import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className={`flex items-center mb-4 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <img 
                src="/logo.jpeg" 
                alt="Thesis Assignment Hub Logo" 
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">Thesis Assignment Hub</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('footer.description')}
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <div className={`flex items-center text-gray-400 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <Mail className="h-4 w-4" />
                <span>thesisassignmentsuk@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.offers')}
                </Link>
              </li>
              <li>
                <Link to="/samples" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.samples')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;