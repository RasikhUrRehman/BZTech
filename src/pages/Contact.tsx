import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useFormContext } from '../contexts/FormContext';
import { useLanguage } from '../contexts/LanguageContext';

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
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      description: t('contact.info.email.description')
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.content'),
      description: t('contact.info.phone.description')
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      description: t('contact.info.hours.description')
    },
    {
      icon: MapPin,
      title: t('contact.info.location.title'),
      content: t('contact.info.location.content'),
      description: t('contact.info.location.description')
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
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.success.title')}</h2>
          <p className="text-gray-600 mb-6">
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('common.getQuote')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={localFormData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={localFormData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={localFormData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.form.subject')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.service')} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={localFormData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      <label htmlFor="pages" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.pages')}
                      </label>
                      <input
                        type="number"
                        id="pages"
                        name="pages"
                        min="1"
                        value={localFormData.pages}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t('contact.form.pages')}
                      />
                    </div>
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.deadline')} *
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
                      {t('contact.form.additionalRequirements')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={localFormData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.form.instructionsPlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    {t('contact.form.getQuoteNow')}
                    <Send className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className={isRTL ? 'text-right' : ''}>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-blue-700 font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.guarantee.title')}</h3>
                <div className="space-y-4">
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{t('contact.guarantee.response')}</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{t('contact.guarantee.quote')}</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{t('contact.guarantee.noObligation')}</span>
                  </div>
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{t('contact.guarantee.confidential')}</span>
                  </div>
                </div>
              </div>

              <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contact.emergency.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('contact.emergency.description')}
                </p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700 mb-2">{t('contact.emergency.phone')}</div>
                  <div className="text-sm text-gray-500">{t('contact.emergency.label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: t('contact.faq.q1'),
                answer: t('contact.faq.a1')
              },
              {
                question: t('contact.faq.q2'),
                answer: t('contact.faq.a2')
              },
              {
                question: t('contact.faq.q3'),
                answer: t('contact.faq.a3')
              },
              {
                question: t('contact.faq.q4'),
                answer: t('contact.faq.a4')
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
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