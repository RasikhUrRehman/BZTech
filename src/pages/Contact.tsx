import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useFormContext } from '../contexts/FormContext';

const Contact: React.FC = () => {
  const { formData, updateFormData, clearFormData } = useFormContext();
  const [localFormData, setLocalFormData] = useState({
    name: formData.name || '',
    email: formData.email || '',
    subject: formData.subject || '',
    service: formData.service || '',
    deadline: formData.deadline || '',
    message: formData.message || '',
    pages: formData.pages || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update local form data when context changes
  useEffect(() => {
    setLocalFormData({
      name: formData.name || '',
      email: formData.email || '',
      subject: formData.subject || '',
      service: formData.service || '',
      deadline: formData.deadline || '',
      message: formData.message || '',
      pages: formData.pages || ''
    });
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const updatedData = {
      ...localFormData,
      [e.target.name]: e.target.value
    };
    setLocalFormData(updatedData);
    updateFormData(updatedData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', localFormData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      clearFormData();
      setLocalFormData({
        name: '',
        email: '',
        subject: '',
        service: '',
        deadline: '',
        message: '',
        pages: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@bztechnologies.com',
      description: 'Send us your requirements anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Speak with our academic consultants'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: '24/7 Available',
      description: 'Round-the-clock support for urgent needs'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      content: 'Worldwide',
      description: 'Supporting students globally'
    }
  ];

  const services = [
    'Academic Assignments',
    'Thesis Writing',
    'Research Papers',
    'Dissertation Help',
    'Essay Writing',
    'Research Proposal',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your message has been received. We'll get back to you within 2 hours with a detailed quote and timeline.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting back to form in a few seconds...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get Your Academic Help Today
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to excel in your studies? Contact us now for professional academic writing and research services
          </p>
          {(formData.service || formData.pages || formData.academicLevel) && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-blue-100">
                ✨ Your pricing calculator data has been pre-filled below!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={localFormData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={localFormData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject/Topic *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={localFormData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your assignment subject or topic"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={localFormData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pages" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Pages
                      </label>
                      <input
                        type="number"
                        id="pages"
                        name="pages"
                        min="1"
                        value={localFormData.pages}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Pages"
                      />
                    </div>
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                        Deadline *
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        required
                        value={localFormData.deadline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={localFormData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide detailed instructions, formatting requirements, sources needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    Get Quote Now
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-blue-700 font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Response Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Response within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Free quote and timeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">No obligation to proceed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Confidential consultation</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-4">
                  Need urgent help with a last-minute assignment? We offer 24/7 emergency support for tight deadlines.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-2">+1 (555) 911-HELP</div>
                  <div className="text-sm text-gray-500">Emergency Hotline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and process
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How quickly can you complete my assignment?',
                answer: 'We can work with deadlines as short as 3 hours for urgent assignments. Standard delivery times range from 24 hours to several weeks, depending on complexity and length.'
              },
              {
                question: 'Is the work original and plagiarism-free?',
                answer: 'Absolutely. All our work is written from scratch by qualified experts. We use advanced plagiarism detection tools and provide a free plagiarism report with every order.'
              },
              {
                question: 'What if I need revisions?',
                answer: 'We offer unlimited free revisions within 30 days of delivery. Our goal is to ensure you are completely satisfied with the final work.'
              },
              {
                question: 'How do you ensure confidentiality?',
                answer: 'We maintain strict confidentiality protocols. Your personal information and assignment details are never shared with third parties, and all communication is secure.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;