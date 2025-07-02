import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppWidget: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const whatsappNumber = '923241929739';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
  };

  const sendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      closeModal();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openModal}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative group"
          aria-label={t('whatsapp.contactButton')}
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Chat
          </div>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {/* Header */}
            <div className="flex items-center justify-between bg-green-500 text-white p-4 rounded-t-lg">
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MessageCircle className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">{t('whatsapp.modalTitle')}</h3>
                  <p className="text-sm text-green-100">{t('whatsapp.modalSubtitle')}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="whatsapp-message" className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('whatsapp.messageLabel')}
                </label>
                <textarea
                  id="whatsapp-message"
                  rows={4}
                  className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('whatsapp.messagePlaceholder')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              
              <div className={`text-xs text-gray-500 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p>{t('whatsapp.description')}</p>
              </div>

              {/* Footer */}
              <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                <button
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t('whatsapp.cancel')}
                </button>
                <button
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className={`flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                >
                  <Send className="h-4 w-4" />
                  <span>{t('whatsapp.send')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
