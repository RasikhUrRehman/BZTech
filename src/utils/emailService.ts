import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  publicKey: '1vQwsGxkBJmS6KcXn',
  serviceId: 'service_irm387a',
  templateId: 'template_kffxg9o',
  recipientEmail: 'thesisassignmentsuk@gmail.com'
};

// Initialize EmailJS
export const initializeEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Interface for email data
export interface EmailData {
  name: string;
  email: string;
  subject?: string;
  service?: string;
  deadline?: string;
  pages?: string;
  message?: string;
  source?: string; // To track where the email came from (contact form, get quote button, etc.)
}

// Send email function
export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject || 'Quote Request',
      service: data.service || 'General Inquiry',
      deadline: data.deadline || 'Not specified',
      pages: data.pages || 'Not specified',
      message: data.message || 'No additional message provided',
      to_email: EMAILJS_CONFIG.recipientEmail,
      source: data.source || 'Website Contact'
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
};

// Quick quote email function for Get Quote buttons
export const sendQuickQuote = async (name: string, email: string, phone?: string, serviceType?: string, source: string = 'Get Quote Button'): Promise<void> => {
  const emailData: EmailData = {
    name,
    email,
    subject: 'Quick Quote Request',
    service: serviceType || 'General Academic Services',
    message: `Quick quote request from ${name} (${email})${phone ? `, Phone: ${phone}` : ''}. Source: ${source}`,
    source
  };

  return sendEmail(emailData);
};