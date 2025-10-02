import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.offers'), href: '/offers' },
    { name: t('nav.samples'), href: '/samples' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center py-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Enhanced Logo */}
          <Link to="/" className={`flex items-center group ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            <div className="relative">
              <img 
                src="/logo.jpeg" 
                alt="Assignment Thesis Hub Logo" 
                className="h-12 w-12 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg" 
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Assignment Thesis Hub
              </span>
              <div className="text-xs text-gray-500 font-medium">Academic Excellence</div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className={`hidden lg:flex ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.href
                    ? 'text-blue-700 bg-blue-50 shadow-lg'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Language Switcher and CTA Button */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">{t('nav.getStarted')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-blue-700 bg-blue-50 shadow-lg'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`flex items-center justify-between pt-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <LanguageSwitcher />
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;