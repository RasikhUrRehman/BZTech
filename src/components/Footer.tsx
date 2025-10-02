import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react';
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
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className={`flex items-center text-gray-300 hover:text-white transition-colors group ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>thesisassignmentsuk@gmail.com</span>
              </div>
              <div className={`flex items-center text-gray-300 hover:text-white transition-colors group ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+44 7482 576463</span>
              </div>
              <div className={`flex items-center text-gray-300 hover:text-white transition-colors group ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {[
                { name: t('nav.home'), href: '/' },
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.offers'), href: '/offers' },
                { name: t('nav.samples'), href: '/samples' },
                { name: t('nav.pricing'), href: '/pricing' },
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.contact'), href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-block group"
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start space-x-2">
                <span>{t('footer.copyright')}</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>Made with passion for education</span>
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Secure & Confidential</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm">5★ Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;