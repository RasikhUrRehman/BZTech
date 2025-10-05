import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, BookOpen, Percent, DollarSign, RefreshCw, ArrowRight, CheckCircle, Sparkles, Gift, Zap, Award, Tag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Offers: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const offers = [
    {
      icon: FileCheck,
      title: t('offers.freePlagiarism.title'),
      description: t('offers.freePlagiarism.desc'),
      features: [t('offers.freePlagiarism.feature1'), t('offers.freePlagiarism.feature2'), t('offers.freePlagiarism.feature3'), t('offers.freePlagiarism.feature4')],
      highlight: t('offers.freePlagiarism.highlight'),
      color: 'from-emerald-500 to-green-600',
      isFree: true
    },
    {
      icon: BookOpen,
      title: t('offers.freeGuidance.title'),
      description: t('offers.freeGuidance.desc'),
      features: [t('offers.freeGuidance.feature1'), t('offers.freeGuidance.feature2'), t('offers.freeGuidance.feature3'), t('offers.freeGuidance.feature4')],
      highlight: t('offers.freeGuidance.highlight'),
      color: 'from-blue-500 to-indigo-600',
      isFree: true
    },
    {
      icon: FileCheck,
      title: t('offers.freeResearch.title'),
      description: t('offers.freeResearch.desc'),
      features: [t('offers.freeResearch.feature1'), t('offers.freeResearch.feature2'), t('offers.freeResearch.feature3'), t('offers.freeResearch.feature4')],
      highlight: t('offers.freeResearch.highlight'),
      color: 'from-purple-600 to-purple-700',
      isFree: true
    },
    {
      icon: Percent,
      title: t('offers.firstOrder.title'),
      description: t('offers.firstOrder.desc'),
      features: [t('offers.firstOrder.feature1'), t('offers.firstOrder.feature2'), t('offers.firstOrder.feature3'), t('offers.firstOrder.feature4')],
      highlight: t('offers.firstOrder.highlight'),
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: DollarSign,
      title: t('offers.bulkOrder.title'),
      description: t('offers.bulkOrder.desc'),
      features: [t('offers.bulkOrder.feature1'), t('offers.bulkOrder.feature2'), t('offers.bulkOrder.feature3'), t('offers.bulkOrder.feature4')],
      highlight: t('offers.bulkOrder.highlight'),
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: RefreshCw,
      title: t('offers.revisions.title'),
      description: t('offers.revisions.desc'),
      features: [t('offers.revisions.feature1'), t('offers.revisions.feature2'), t('offers.revisions.feature3'), t('offers.revisions.feature4')],
      highlight: t('offers.revisions.highlight'),
      color: 'from-indigo-600 to-purple-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Gift className="h-4 w-4 text-[#f5a63a] mr-2" />
            <span className="text-sm font-medium">Limited Time Offers</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {t('offers.title')}
          </h1>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('offers.subtitle')}
          </p>
          <Link
            to="/contact"
            className={`group inline-flex items-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('offers.claim')}
            <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Offers Grid - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <Tag className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">Special Deals</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('offers.amazing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('offers.amazing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden ${
                  offer.isFree ? 'ring-2 ring-emerald-400' : ''
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative p-8 pb-4 flex-grow">
                  {offer.isFree && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-4 py-2 rounded-full inline-flex mb-4 shadow-lg">
                      <Gift className="h-4 w-4" />
                      <span>{t('common.free')}</span>
                    </div>
                  )}
                  
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${offer.color} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                    <offer.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{offer.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <div className="flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className={`text-lg font-bold ${
                      offer.isFree ? 'text-emerald-600' : 'text-[#5c5c9c]'
                    }`}>{offer.highlight}</span>
                  </div>
                </div>
                
                <div className="relative p-8 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-4 rounded-xl text-base font-semibold transition-all text-center inline-flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 ${
                      offer.isFree 
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white'
                        : `bg-gradient-to-r ${offer.color} text-white`
                    } ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('offers.claimNow')}
                    <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Link>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Important Information</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('offers.terms.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('offers.terms.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* General Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('offers.termsGeneral')}</h3>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors`}>
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{t(`offers.termsGeneral.term${num}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Discount Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <Percent className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('offers.termsDiscount')}</h3>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors`}>
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{t(`offers.termsDiscount.term${num}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Revision Terms */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl flex items-center justify-center mr-4 shadow-md">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('offers.termsRevision')}</h3>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors`}>
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{t(`offers.termsRevision.term${num}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative bg-gradient-to-r from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#f5a63a] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6787f2] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <Zap className="h-5 w-5 text-[#f5a63a] mr-2 animate-pulse" />
            <span className="font-semibold">{t('offers.ctaLimited')}</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t('offers.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-purple-100 leading-relaxed max-w-3xl mx-auto">
            {t('offers.cta.subtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              to="/contact"
              className={`group inline-flex items-center justify-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('offers.cta.getStarted')}
              <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
            <Link
              to="/services"
              className={`inline-flex items-center justify-center backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#4c2868] px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('offers.cta.viewServices')}
              <BookOpen className={`h-5 w-5 ${isRTL ? 'mr-3' : 'ml-3'}`} />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '24/7', label: t('common.support'), icon: Award },
              { value: '100%', label: t('common.original'), icon: CheckCircle },
              { value: '98%', label: t('common.satisfaction'), icon: Sparkles },
              { value: '5★', label: t('common.rating'), icon: Gift }
            ].map((stat, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105">
                <stat.icon className="h-8 w-8 text-[#f5a63a] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;