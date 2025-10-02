import React, { useState, useEffect } from 'react';
import { X, Send, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { initializeEmailJS, sendQuickQuote } from '../utils/emailService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, source = 'Get Quote Button' }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initializeEmailJS();
  }, []);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: '', email: '', phone: '', serviceType: '' });
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendQuickQuote(formData.name, formData.email, formData.phone, formData.serviceType, source);
      setIsSubmitted(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Failed to send quote request:', error);
      alert('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            {t('common.getQuote')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('contact.success.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('contact.success.message')}
              </p>
              <p className="text-sm text-gray-500">
                Closing in a few seconds...
              </p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                Get a personalized quote for your academic needs. We'll respond within 2 hours with detailed pricing and timeline.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.email')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="Essay Writing">Essay Writing</option>
                    <option value="Research Paper">Research Paper</option>
                    <option value="Dissertation">Dissertation</option>
                    <option value="Thesis">Thesis</option>
                    <option value="Assignment Help">Assignment Help</option>
                    <option value="Coursework">Coursework</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Quote'}
                  <Send className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                </button>
              </form>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>What happens next?</strong><br />
                  • We'll review your request<br />
                  • Send you a detailed quote within 2 hours<br />
                  • No obligation to proceed
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;