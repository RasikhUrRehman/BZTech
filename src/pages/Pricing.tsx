import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, CreditCard, Sparkles, Tag, HelpCircle, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import PricingCalculator from '../components/PricingCalculator';
import { useLanguage } from '../contexts/LanguageContext';
import QuoteModal from '../components/QuoteModal';

const Pricing: React.FC = () => {
  const { t, isRTL, formatPrice } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const additionalServices = [
    { 
      service: t('pricing.additional.rushDelivery24'), 
      price: t('pricing.additional.price.rush24'),
      color: 'from-red-500 to-orange-500',
      popular: true
    },
    { 
      service: t('pricing.additional.rushDelivery48'), 
      price: t('pricing.additional.price.rush48'),
      color: 'from-orange-400 to-orange-500'
    },
    { 
      service: t('pricing.additional.rushDelivery72'), 
      price: t('pricing.additional.price.rush72'),
      color: 'from-orange-400 to-yellow-500'
    },
    { 
      service: t('pricing.additional.powerpoint'), 
      price: t('pricing.additional.price.powerpoint'),
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      service: t('pricing.additional.excel'), 
      price: t('pricing.additional.price.excel'),
      color: 'from-green-500 to-emerald-600'
    },
    { 
      service: t('pricing.additional.proofreading'), 
      price: t('pricing.additional.price.proofreading'),
      color: 'from-purple-600 to-purple-700'
    },
    { 
      service: t('pricing.additional.plagiarism'), 
      price: t('pricing.additional.price.plagiarism'),
      color: 'from-indigo-600 to-purple-600',
      popular: true
    },
    { 
      service: t('pricing.additional.aiRemoval'), 
      price: t('pricing.additional.price.aiRemoval'),
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const paymentMethods = [
    { name: 'MasterCard', icon: '/mastercard_logo.png' },
    { name: 'Visa Card', icon: '/visacard_logo.png' },
    { name: 'UnionPay', icon: '/unionpay_logo.png' },
    { name: 'iFast GlobalBank', icon: '/ifast_logo.png' },
    { name: 'Remitly', icon: '/remitly_icon.png' },
    { name: 'Western Union', icon: '/westernunioin_logo.png' },
    { name: 'Cash Pickup', icon: '/cashpickup_icon.png' }
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
            <Tag className="h-4 w-4 text-[#f5a63a] mr-2" />
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>

          <div className={`flex items-center justify-center mb-6 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <DollarSign className="h-16 w-16 text-[#f5a63a]" />
            <h1 className="text-5xl lg:text-6xl font-bold">
              {t('pricing.title')}
            </h1>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto shadow-2xl">
            <Sparkles className="h-8 w-8 text-[#f5a63a] mx-auto mb-3 animate-pulse" />
            <p className="text-lg font-bold text-white">
              {t('pricing.discount')}
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Pricing Calculator - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <DollarSign className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">Calculate Your Price</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.calculator.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricing.calculator.subtitle')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Additional Services - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Zap className="h-4 w-4 text-[#f5a63a] mr-2" />
              <span className="text-[#f5a63a] font-semibold text-sm">Add-On Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.additional.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 overflow-hidden ${
                  service.popular ? 'ring-2 ring-[#f5a63a]' : ''
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f5a63a] to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-lg">
                    Popular
                  </div>
                )}

                <div className={`relative flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{service.service}</span>
                  </div>
                  <span className={`font-bold text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {formatPrice(service.price)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-4">
              <CreditCard className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">Secure Payments</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('pricing.payment.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('pricing.payment.subtitle')}
            </p>
            <div className="bg-white border-2 border-[#6787f2] rounded-2xl p-8 max-w-3xl mx-auto shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('pricing.payment.info')}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('pricing.payment.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {paymentMethods.map((method, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 text-center border-2 border-gray-100 hover:border-[#6787f2] w-36"
              >
                <div className="flex justify-center items-center mb-3 h-16">
                  <img 
                    src={method.icon} 
                    alt={method.name} 
                    className="max-h-10 max-w-24 w-auto h-auto object-contain group-hover:scale-110 transition-transform" 
                  />
                </div>
                <span className="text-sm font-semibold text-gray-900 leading-tight block">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <HelpCircle className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">Common Questions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('pricing.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {[
              { question: t('pricing.faq.q1'), answer: t('pricing.faq.a1') },
              { question: t('pricing.faq.q2'), answer: t('pricing.faq.a2') },
              { question: t('pricing.faq.q3'), answer: t('pricing.faq.a3') },
              { question: t('pricing.faq.q4'), answer: t('pricing.faq.a4') },
              { question: t('pricing.faq.q5'), answer: t('pricing.faq.a5') }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-[#6787f2]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : ''}`}>
                      {faq.question}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

        <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <Sparkles className="h-12 w-12 text-[#f5a63a] mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-purple-100 text-center max-w-2xl mx-auto leading-relaxed">
            {t('pricing.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className={`group inline-flex items-center justify-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('pricing.cta.getQuote')}
              <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </button>
            <Link
              to="/services"
              className={`inline-flex items-center justify-center backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#4c2868] px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('pricing.cta.viewServices')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'}`} />
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="Pricing Page"
      />
    </div>
  );
};

export default Pricing;