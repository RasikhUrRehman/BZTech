import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles, MessageSquare, Shield, Zap } from 'lucide-react';
import { useFormContext } from '../contexts/FormContext';
import { useLanguage } from '../contexts/LanguageContext';
import { initializeEmailJS, sendEmail, EmailData } from '../utils/emailService';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initializeEmailJS();
  }, []);

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
    let value = e.target.value;
    
    if (e.target.name === 'deadline' && value) {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        return;
      }
    }
    
    const updatedData = {
      ...localFormData,
      [e.target.name]: value
    };
    setLocalFormData(updatedData);
    updateFormData(updatedData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData: EmailData = {
        name: localFormData.name,
        email: localFormData.email,
        subject: localFormData.subject,
        service: localFormData.service,
        deadline: localFormData.deadline,
        pages: localFormData.pages,
        message: localFormData.message,
        source: 'Contact Form'
      };

      await sendEmail(emailData);

      console.log('Email sent successfully');
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
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      description: t('contact.info.email.description'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.content'),
      description: t('contact.info.phone.description'),
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      description: t('contact.info.hours.description'),
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      content: t('contact.info.location.content'),
      description: t('contact.info.location.description'),
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const services = [
    t('feature.academicAssignments'),
    t('feature.thesisWriting'),
    t('feature.researchPapers'),
    t('feature.dissertationHelp'),
    t('feature.essayWriting'),
    t('feature.researchProposal'),
    t('feature.other')
  ];

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
          <p className="text-gray-600 mb-6 text-lg">
            {t('contact.success.message')}
          </p>
          <div className="text-sm text-gray-500">
            {t('contact.success.redirect')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <MessageSquare className="h-4 w-4 text-[#f5a63a] mr-2" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Form & Info - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
                    <Sparkles className="h-4 w-4 text-[#4c2868] mr-2" />
                    <span className="text-[#4c2868] font-semibold text-sm">Request a Quote</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{t('common.getQuote')}</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={localFormData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={localFormData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                        placeholder={t('contact.form.email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={localFormData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                      placeholder={t('contact.form.subject')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.service')} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={localFormData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                      >
                        <option value="">{t('contact.form.service')}</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pages" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.pages')}
                      </label>
                      <input
                        type="number"
                        id="pages"
                        name="pages"
                        min="1"
                        value={localFormData.pages}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                        placeholder={t('contact.form.pages')}
                      />
                    </div>
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.deadline')} *
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        required
                        value={localFormData.deadline}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.additionalRequirements')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={localFormData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5c5c9c] focus:border-[#5c5c9c] transition-all"
                      placeholder={t('contact.form.instructionsPlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center"
                  >
                    {isSubmitting ? t('contact.form.sending') || 'Sending...' : t('contact.form.getQuoteNow')}
                    <Send className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                        <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${info.color} text-white rounded-xl flex-shrink-0 shadow-md`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className={isRTL ? 'text-right' : ''}>
                          <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                          <p className="text-[#5c5c9c] font-semibold mb-1">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={`relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-[#5c5c9c]" />
                  {t('contact.guarantee.title')}
                </h3>
                <div className="space-y-4">
                  {[
                    t('contact.guarantee.response'),
                    t('contact.guarantee.quote'),
                    t('contact.guarantee.noObligation'),
                    t('contact.guarantee.confidential')
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 opacity-10 rounded-bl-full"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t('contact.emergency.title')}</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {t('contact.emergency.description')}
                </p>
                <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{t('contact.emergency.phone')}</div>
                  <div className="text-sm text-gray-600 font-medium">{t('contact.emergency.label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <MessageSquare className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {[
              { question: t('contact.faq.q1'), answer: t('contact.faq.a1') },
              { question: t('contact.faq.q2'), answer: t('contact.faq.a2') },
              { question: t('contact.faq.q3'), answer: t('contact.faq.a3') },
              { question: t('contact.faq.q4'), answer: t('contact.faq.a4') }
            ].map((faq, index) => (
              <div key={index} className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-l-4 border-[#6787f2] ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;