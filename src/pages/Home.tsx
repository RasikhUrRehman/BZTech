import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, BookOpen, PenTool, ArrowRight, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const features = [
    {
      icon: BookOpen,
      title: t('feature.academicAssignments'),
      description: t('home.service.academicAssignments.desc')
    },
    {
      icon: PenTool,
      title: t('feature.thesisWriting'),
      description: t('home.service.thesisWriting.desc')
    },
    {
      icon: Search,
      title: t('feature.researchPublication'),
      description: t('home.service.researchPublication.desc')
    }
  ];

  const testimonials = [
    {
      name: t('home.testimonial.sarah.name'),
      role: t('home.testimonial.sarah.role'),
      content: t('home.testimonial.sarah.content'),
      rating: 5
    },
    {
      name: t('home.testimonial.michael.name'),
      role: t('home.testimonial.michael.role'),
      content: t('home.testimonial.michael.content'),
      rating: 5
    },
    {
      name: t('home.testimonial.emma.name'),
      role: t('home.testimonial.emma.role'),
      content: t('home.testimonial.emma.content'),
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: t('stats.projectsCompleted') },
    { number: '98%', label: t('stats.clientSatisfaction') },
    { number: '24/7', label: t('stats.supportAvailable') },
    { number: '5+', label: t('stats.yearsExperience') }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('home.hero.title').split(' ').slice(0, 3).join(' ')} <span className="text-emerald-300">{t('home.hero.title').split(' ').slice(3).join(' ')}</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/services"
                  className={`bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('home.hero.viewServices')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  {t('home.hero.getQuote')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-300 mb-2">{stat.number}</div>
                      <div className="text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className={`bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('home.services.viewMore')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('home.whyChoose.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.whyChoose.subtitle')}
              </p>
              
              <div className="space-y-4">
                {[
                  'home.benefit.expertWriters',
                  'home.benefit.freePlagiarism',
                  'home.benefit.freeRevisions',
                  'home.benefit.timelyDelivery',
                  'home.benefit.support247',
                  'home.benefit.confidential'
                ].map((benefitKey, index) => (
                  <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : ''}`}>{t(benefitKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className={`text-center mb-8 ${isRTL ? 'text-right' : ''}`}>
                <div className={`inline-flex items-center text-yellow-500 mb-2 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-gray-900">{t('home.rating.title')}</p>
                <p className="text-gray-600">{t('home.rating.subtitle')}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className={`font-semibold text-gray-900 ${isRTL ? 'text-center' : ''}`}>{t('home.rating.expertTeam')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <p className={`font-semibold text-gray-900 ${isRTL ? 'text-center' : ''}`}>{t('home.rating.qualityAssured')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center text-yellow-500 mb-4 ${isRTL ? 'space-x-reverse space-x-1 justify-end' : 'space-x-1'}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-emerald-700 text-white py-20">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'text-right' : ''}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('home.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              to="/contact"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('home.cta.getQuote')}
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('home.cta.viewServices')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;