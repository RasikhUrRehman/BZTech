import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, BookOpen, Percent, DollarSign, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';
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
      color: 'emerald'
    },
    {
      icon: BookOpen,
      title: t('offers.freeGuidance.title'),
      description: t('offers.freeGuidance.desc'),
      features: [t('offers.freeGuidance.feature1'), t('offers.freeGuidance.feature2'), t('offers.freeGuidance.feature3'), t('offers.freeGuidance.feature4')],
      highlight: t('offers.freeGuidance.highlight'),
      color: 'blue'
    },
    {
      icon: FileCheck,
      title: t('offers.freeResearch.title'),
      description: t('offers.freeResearch.desc'),
      features: [t('offers.freeResearch.feature1'), t('offers.freeResearch.feature2'), t('offers.freeResearch.feature3'), t('offers.freeResearch.feature4')],
      highlight: t('offers.freeResearch.highlight'),
      color: 'purple'
    },
    {
      icon: Percent,
      title: t('offers.firstOrder.title'),
      description: t('offers.firstOrder.desc'),
      features: [t('offers.firstOrder.feature1'), t('offers.firstOrder.feature2'), t('offers.firstOrder.feature3'), t('offers.firstOrder.feature4')],
      highlight: t('offers.firstOrder.highlight'),
      color: 'orange'
    },
    {
      icon: DollarSign,
      title: t('offers.bulkOrder.title'),
      description: t('offers.bulkOrder.desc'),
      features: [t('offers.bulkOrder.feature1'), t('offers.bulkOrder.feature2'), t('offers.bulkOrder.feature3'), t('offers.bulkOrder.feature4')],
      highlight: t('offers.bulkOrder.highlight'),
      color: 'green'
    },
    {
      icon: RefreshCw,
      title: t('offers.revisions.title'),
      description: t('offers.revisions.desc'),
      features: [t('offers.revisions.feature1'), t('offers.revisions.feature2'), t('offers.revisions.feature3'), t('offers.revisions.feature4')],
      highlight: t('offers.revisions.highlight'),
      color: 'indigo'
    }
  ];

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-300',
      button: 'bg-emerald-700 hover:bg-emerald-800'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
      button: 'bg-blue-700 hover:bg-blue-800'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-300',
      button: 'bg-purple-700 hover:bg-purple-800'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      border: 'border-orange-300',
      button: 'bg-orange-700 hover:bg-orange-800'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
      button: 'bg-green-700 hover:bg-green-800'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      border: 'border-indigo-300',
      button: 'bg-indigo-700 hover:bg-indigo-800'
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('offers.title')}
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            {t('offers.subtitle')}
          </p>
          <Link
            to="/contact"
            className={`bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('offers.claim')}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('offers.amazing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('offers.amazing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const colors = colorClasses[offer.color as keyof typeof colorClasses];
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border flex flex-col h-full ${
                  index < 3 ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-100'
                } ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="p-8 pb-4 flex-grow">
                    {index < 3 && (
                      <div className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        {t('common.free')}
                      </div>
                    )}
                    
                    <div className={`flex items-center justify-center w-16 h-16 ${colors.bg} ${colors.text} rounded-lg mb-6 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                      <offer.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{offer.title}</h3>
                    <p className="text-gray-600 mb-6">{offer.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-4">
                      <span className={`text-sm font-medium ${
                        index < 3 ? 'text-emerald-700' : 'text-purple-700'
                      }`}>{offer.highlight}</span>
                    </div>
                  </div>
                  
                  <div className="p-8 pt-0 mt-auto">
                    <Link
                      to="/contact"
                      className={`w-full ${
                        index < 3 ? 'bg-emerald-600 hover:bg-emerald-700' : colors.button
                      } text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {t('offers.claimNow')}
                      <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('offers.terms.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('offers.terms.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t('offers.termsGeneral')}</h3>
                </div>
                <div className="space-y-4">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-blue-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsGeneral.term1')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-blue-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsGeneral.term2')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-blue-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsGeneral.term3')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mr-3">
                    <Percent className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t('offers.termsDiscount')}</h3>
                </div>
                <div className="space-y-4">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-emerald-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsDiscount.term1')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-emerald-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsDiscount.term2')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-emerald-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsDiscount.term3')}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mr-3">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t('offers.termsRevision')}</h3>
                </div>
                <div className="space-y-4">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-purple-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsRevision.term1')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-purple-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsRevision.term2')}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} p-4 bg-purple-50 rounded-xl`}>
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{t('offers.termsRevision.term3')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 via-purple-800 to-pink-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300/20 rounded-full"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {t('offers.ctaLimited')}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('offers.cta.title')}
            </h2>
          </div>
          <p className="text-xl lg:text-2xl mb-12 text-purple-100 leading-relaxed max-w-3xl mx-auto">
            {t('offers.cta.subtitle')}
          </p>
          <div className={`flex flex-col gap-6 justify-center ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <Link
              to="/contact"
              className="bg-white text-purple-700 hover:bg-pink-50 hover:scale-105 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl inline-flex items-center justify-center"
            >
              {t('offers.cta.getStarted')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              {t('offers.cta.viewServices')}
              <BookOpen className={`h-5 w-5 ${isRTL ? 'mr-3' : 'ml-3'}`} />
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-purple-200 text-sm">{t('common.support')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-purple-200 text-sm">{t('common.original')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-purple-200 text-sm">{t('common.satisfaction')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-1">5★</div>
              <div className="text-purple-200 text-sm">{t('common.rating')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;