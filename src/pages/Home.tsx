import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, BookOpen, PenTool, ArrowRight, Search, Sparkles, Award, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import QuoteModal from '../components/QuoteModal';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: BookOpen,
      title: t('feature.academicAssignments'),
      description: t('home.service.academicAssignments.desc'),
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: PenTool,
      title: t('feature.thesisWriting'),
      description: t('home.service.thesisWriting.desc'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Search,
      title: t('feature.researchPublication'),
      description: t('home.service.researchPublication.desc'),
      color: 'from-orange-400 to-orange-500'
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
    { number: '500+', label: t('stats.projectsCompleted'), icon: Award },
    { number: '98%', label: t('stats.clientSatisfaction'), icon: Star },
    { number: '24/7', label: t('stats.supportAvailable'), icon: Clock },
    { number: '8+', label: t('stats.yearsExperience'), icon: Sparkles }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced with gradient overlay and animated elements */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 text-[#f5a63a] mr-2" />
                <span className="text-sm font-medium">Premium Academic Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t('home.hero.title').split(' ').slice(0, 3).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5a63a] to-[#6787f2]">
                  {t('home.hero.title').split(' ').slice(3).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/services"
                  className={`group bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('home.hero.viewServices')}
                  <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#4c2868] px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 inline-flex items-center justify-center shadow-lg"
                >
                  {t('home.hero.getQuote')}
                </button>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <stat.icon className="h-8 w-8 text-[#f5a63a] mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Features Section - Enhanced cards with hover effects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                
                <h3 className="relative text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="relative text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className={`group inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('home.services.viewMore')}
              <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced layout */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-6">
                <span className="text-[#4c2868] font-semibold text-sm">Why Choose Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('home.whyChoose.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                {t('home.whyChoose.subtitle')}
              </p>
              
              <div className="space-y-5">
                {[
                  'home.benefit.expertWriters',
                  'home.benefit.freePlagiarism',
                  'home.benefit.freeRevisions',
                  'home.benefit.timelyDelivery',
                  'home.benefit.support247',
                  'home.benefit.confidential'
                ].map((benefitKey, index) => (
                  <div 
                    key={index} 
                    className={`group flex items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:scale-102 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-gray-800 font-medium ${isRTL ? 'text-right' : ''}`}>{t(benefitKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Enhanced rating card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl">
                <div className={`text-center mb-8 ${isRTL ? 'text-right' : ''}`}>
                  <div className={`inline-flex items-center text-[#f5a63a] mb-4 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-8 w-8 fill-current drop-shadow-lg" />
                    ))}
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">{t('home.rating.title')}</p>
                  <p className="text-gray-600 text-lg">{t('home.rating.subtitle')}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center group hover:scale-105 transition-transform">
                    <Users className="h-10 w-10 text-[#5c5c9c] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className={`font-bold text-gray-900 ${isRTL ? 'text-center' : ''}`}>{t('home.rating.expertTeam')}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center group hover:scale-105 transition-transform">
                    <CheckCircle className="h-10 w-10 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className={`font-bold text-gray-900 ${isRTL ? 'text-center' : ''}`}>{t('home.rating.qualityAssured')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <span className="text-[#f5a63a] font-semibold text-sm">Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6787f2] via-[#5c5c9c] to-[#f5a63a] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm"></div>
                
                <div className={`flex items-center text-[#f5a63a] mb-6 ${isRTL ? 'space-x-reverse space-x-1 justify-end' : 'space-x-1'}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5c5c9c] to-[#6787f2] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with pattern background */}
      <section className="relative bg-gradient-to-r from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#f5a63a] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6787f2] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 text-[#f5a63a] mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-purple-100 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105"
            >
              {t('home.cta.getQuote')}
            </button>
            <Link
              to="/services"
              className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#4c2868] px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl"
            >
              {t('home.cta.viewServices')}
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="Home Page"
      />
    </div>
  );
};

export default Home;