import React, { useState, useEffect } from 'react';
import { X, Sparkles, Gift, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WelcomePopup: React.FC = () => {
  const { isRTL, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [progress, setProgress] = useState(0);

  // Check if popup should be shown (first time visit or after "maybe later")
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('welcomePopupSeen');
    const maybeLaterTime = localStorage.getItem('welcomePopupMaybeLater');
    
    if (!hasSeenPopup && !maybeLaterTime) {
      // First time visit - show after delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (maybeLaterTime && !hasSeenPopup) {
      // Check if 10 minutes have passed since "maybe later"
      const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
      if (parseInt(maybeLaterTime) < tenMinutesAgo) {
        localStorage.removeItem('welcomePopupMaybeLater');
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Auto-slide offers with progress tracking
  useEffect(() => {
    if (isVisible && autoSlide && offers.length > 1) {
      const interval = setInterval(() => {
        setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
        setProgress(0); // Reset progress
      }, 5000); // Change offer every 5 seconds
      
      // Progress tracking
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2; // Update every 100ms, complete in 5s
        });
      }, 100);
      
      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [isVisible, autoSlide, currentOfferIndex]);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('welcomePopupSeen', 'true');
  };

  const maybeLater = () => {
    setIsVisible(false);
    // Show popup again after 10 minutes (600000 ms)
    localStorage.setItem('welcomePopupMaybeLater', Date.now().toString());
  };

  // Auto-close popup after 30 seconds if no interaction
  useEffect(() => {
    if (isVisible) {
      const autoCloseTimer = setTimeout(() => {
        closePopup();
      }, 30000);
      return () => clearTimeout(autoCloseTimer);
    }
  }, [isVisible]);

  const offers = [
    {
      icon: <Gift className="h-8 w-8 text-yellow-500" />,
      title: language === 'ar' ? 'خصم 30% للعملاء الجدد' : '30% OFF for New Clients',
      description: language === 'ar' 
        ? 'احصل على خصم 30% على طلبك الأول. عرض محدود!'
        : 'Get 30% discount on your first order. Limited time offer!',
      code: 'WELCOME30',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: language === 'ar' ? 'اقتراحات البحث مجانية' : 'FREE Research Proposals',
      description: language === 'ar'
        ? 'نقدم اقتراحات البحث مجاناً تماماً مع كل الخدمات'
        : 'Get completely FREE research proposals with all our services',
      code: 'FREEPROP',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: language === 'ar' ? 'ضمان التسليم في الوقت' : '24/7 Quick Delivery',
      description: language === 'ar'
        ? 'تسليم سريع مع دعم على مدار الساعة وضمان الجودة'
        : 'Fast delivery with 24/7 support and quality guarantee',
      code: 'FASTHELP',
      gradient: 'from-green-400 to-blue-500'
    }
  ];

  const nextOffer = () => {
    setAutoSlide(false); // Stop auto-slide when user manually navigates
    setProgress(0); // Reset progress
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
  };

  const openWhatsApp = () => {
    const whatsappNumber = '447482576463';
    const message = language === 'ar'
      ? 'مرحباً! أريد الاستفادة من العرض الخاص وأحتاج مساعدة في متطلباتي الأكاديمية.'
      : 'Hi! I want to avail the special offer and need help with my academic requirements.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    closePopup();
  };

  if (!isVisible) return null;

  const currentOffer = offers[currentOfferIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 popup-backdrop flex items-center justify-center z-[100] p-4">
      <div className={`bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300 animate-slide-in-up offer-card-hover ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header with gradient background */}
        <div className={`bg-gradient-to-r ${currentOffer.gradient} text-white p-6 relative`}>
          {/* Close button */}
          <button
            onClick={closePopup}
            className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-4 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20`}
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Welcome message */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold mb-2">
              {language === 'ar' ? '🎉 مرحباً بك!' : '🎉 Welcome!'}
            </h2>
            <p className="text-white/90 text-sm">
              {language === 'ar' 
                ? 'عروض خاصة للطلاب الجدد' 
                : 'Special offers for new students'}
            </p>
          </div>
        </div>

        {/* Offer content */}
        <div className="p-6">
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} mb-4`}>
            {currentOffer.icon}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {currentOffer.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {currentOffer.description}
              </p>
            </div>
          </div>

          {/* Offer code */}
          <div className="bg-gray-100 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-500 mb-1">
              {language === 'ar' ? 'كود الخصم:' : 'Offer Code:'}
            </p>
            <p className="font-mono font-bold text-lg text-gray-800 tracking-wider">
              {currentOffer.code}
            </p>
          </div>

          {/* Additional features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              {language === 'ar' ? 'ما تحصل عليه:' : 'What you get:'}
            </h4>
            <ul className={`text-sm text-gray-600 space-y-1 ${isRTL ? 'text-right' : 'text-left'}`}>
              <li className="flex items-center">
                <span className={`text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`}>✓</span>
                {language === 'ar' ? 'كتابة أكاديمية احترافية' : 'Professional academic writing'}
              </li>
              <li className="flex items-center">
                <span className={`text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`}>✓</span>
                {language === 'ar' ? 'تقارير مجانية للسرقة الأدبية' : 'FREE plagiarism reports'}
              </li>
              <li className="flex items-center">
                <span className={`text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`}>✓</span>
                {language === 'ar' ? 'مراجعات مجانية غير محدودة' : 'Unlimited FREE revisions'}
              </li>
              <li className="flex items-center">
                <span className={`text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`}>✓</span>
                {language === 'ar' ? 'دعم 24/7' : '24/7 support'}
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
            <button
              onClick={openWhatsApp}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm"
            >
              {language === 'ar' ? '📱 احصل على العرض' : '📱 Claim Offer'}
            </button>
            <button
              onClick={maybeLater}
              className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-600"
            >
              {language === 'ar' ? 'لاحقاً' : 'Later'}
            </button>
            {offers.length > 1 && (
              <button
                onClick={nextOffer}
                className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                title={language === 'ar' ? 'العرض التالي' : 'Next offer'}
              >
                →
              </button>
            )}
          </div>

          {/* Progress bar for auto-slide */}
          {offers.length > 1 && autoSlide && (
            <div className="mt-4 mb-2">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-blue-500 h-1 rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Offer indicators */}
          {offers.length > 1 && (
            <div className="flex justify-center mt-2 space-x-2">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoSlide(false);
                    setCurrentOfferIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentOfferIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Timer or urgency indicator */}
          <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>
              {language === 'ar' ? 'عرض محدود - لا تفوت الفرصة!' : 'Limited time - Don\'t miss out!'}
            </span>
          </div>
        </div>

        {/* Bottom accent */}
        <div className={`h-1 bg-gradient-to-r ${currentOffer.gradient}`}></div>
      </div>
    </div>
  );
};

export default WelcomePopup;
