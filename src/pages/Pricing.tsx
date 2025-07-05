import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, CreditCard } from 'lucide-react';
import PricingCalculator from '../components/PricingCalculator';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t, isRTL, formatPrice } = useLanguage();
  const additionalServices = [
    { service: t('pricing.additional.rushDelivery24'), price: t('pricing.additional.price.rush24') },
    { service: t('pricing.additional.rushDelivery48'), price: t('pricing.additional.price.rush48') },
    { service: t('pricing.additional.rushDelivery72'), price: t('pricing.additional.price.rush72') },
    { service: t('pricing.additional.powerpoint'), price: t('pricing.additional.price.powerpoint') },
    { service: t('pricing.additional.excel'), price: t('pricing.additional.price.excel') },
    { service: t('pricing.additional.proofreading'), price: t('pricing.additional.price.proofreading') },
    { service: t('pricing.additional.plagiarism'), price: t('pricing.additional.price.plagiarism') },
    { service: t('pricing.additional.aiRemoval'), price: t('pricing.additional.price.aiRemoval') }
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`flex items-center justify-center mb-6 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <DollarSign className="h-16 w-16 text-green-300" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {t('pricing.title')}
            </h1>
          </div>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
            <p className="text-lg font-semibold text-green-100">
              {t('pricing.discount')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.calculator.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricing.calculator.subtitle')}
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.additional.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
                <span className="font-medium text-gray-900">{service.service}</span>
                <span className="font-semibold text-blue-700">
                  {formatPrice(service.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.payment.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('pricing.payment.subtitle')}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-lg font-semibold text-blue-900">{t('pricing.payment.info')}</h3>
              </div>
              <p className="text-blue-800 mb-4">
                {t('pricing.payment.description')}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200 hover:border-blue-300 transition-colors w-32 h-28">
                <div className="flex justify-center items-center mb-2 h-12">
                  <img src={method.icon} alt={method.name} className="max-h-8 max-w-20 w-auto h-auto object-contain" />
                </div>
                <span className="text-xs font-medium text-gray-900 leading-tight">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('pricing.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('pricing.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: t('pricing.faq.q1'),
                answer: t('pricing.faq.a1')
              },
              {
                question: t('pricing.faq.q2'),
                answer: t('pricing.faq.a2')
              },
              {
                question: t('pricing.faq.q3'),
                answer: t('pricing.faq.a3')
              },
              {
                question: t('pricing.faq.q4'),
                answer: t('pricing.faq.a4')
              },
              {
                question: t('pricing.faq.q5'),
                answer: t('pricing.faq.a5')
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className={`text-lg font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>{faq.question}</h3>
                <p className={`text-gray-600 ${isRTL ? 'text-right' : ''}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-20">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-green-100 text-center">
            {t('pricing.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              to="/contact"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('pricing.cta.getQuote')}
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('pricing.cta.viewServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;