import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage, isRTL } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 ${
        isRTL ? 'space-x-reverse' : ''
      }`}
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
      <span className="sm:hidden">
        {language === 'en' ? 'AR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
