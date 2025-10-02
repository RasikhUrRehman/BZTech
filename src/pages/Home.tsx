import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, BookOpen, PenTool, ArrowRight, Search, Sparkles, Award, TrendingUp } from 'lucide-react';
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
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: PenTool,
      title: t('feature.thesisWriting'),
      description: t('home.service.thesisWriting.desc'),
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Search,
      title: t('feature.researchPublication'),
      description: t('home.service.researchPublication.desc'),
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ];

  const testimonials = [
    {
      name: t('home.testimonial.sarah.name'),
      role: t('home.testimonial.sarah.role'),
      content: t('home.testimonial.sarah.content'),
      rating: 5,
      avatar: '👩‍🎓'
    },
    {
      name: t('home.testimonial.michael.name'),
      role: t('home.testimonial.michael.role'),
      content: t('home.testimonial.michael.content'),
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: t('home.testimonial.emma.name'),
      role: t('home.testimonial.emma.role'),
      content: t('home.testimonial.emma.content'),
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  const stats = [
    { number: '500+', label: t('stats.projectsCompleted') },
    { number: '98%', label: t('stats.clientSatisfaction') },
    { number: '24/7', label: t('stats.supportAvailable') },
    { number: '8+', label: t('stats.yearsExperience') }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-sm font-medium text-white">🎓 Academic Excellence Since 2019</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {t('home.hero.title').split(' ').slice(0, 3).join(' ')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  {t('home.hero.title').split(' ').slice(3).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                {t('home.hero.subtitle')}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/services"
                  className={`group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('home.hero.viewServices')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  {t('home.hero.getQuote')}
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white/80 ml-2">4.9/5 Rating</span>
                </div>
                <div className="text-white/60">|</div>
                <div className="text-white/80">500+ Happy Students</div>
              </div>
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Our Premium Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className={`relative flex items-center justify-center w-20 h-20 ${feature.iconBg} ${feature.iconColor} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                  <feature.icon className="h-10 w-10" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className={`group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('home.services.viewMore')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right order-2' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-medium mb-6">
                <TrendingUp className="h-4 w-4 mr-2" />
                Why Students Choose Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('home.whyChoose.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('home.whyChoose.subtitle')}
              </p>
              
              <div className="space-y-6">
                {[
                  { key: 'home.benefit.expertWriters', icon: '👨‍🎓' },
                  { key: 'home.benefit.freePlagiarism', icon: '🔍' },
                  { key: 'home.benefit.freeRevisions', icon: '🔄' },
                  { key: 'home.benefit.timelyDelivery', icon: '⏰' },
                  { key: 'home.benefit.support247', icon: '💬' },
                  { key: 'home.benefit.confidential', icon: '🔒' }
                ].map((benefit, index) => (
                  <div key={index} className={`group flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'} p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300`}>
                    <div className="text-2xl">{benefit.icon}</div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                      <span className={`text-gray-700 font-medium ${isRTL ? 'text-right' : ''}`}>{t(benefit.key)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isRTL ? 'order-1' : ''}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 shadow-2xl border border-blue-100">
                  <div className={`text-center mb-8 ${isRTL ? 'text-right' : ''}`}>
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{t('home.rating.title')}</p>
                    <p className="text-gray-600 text-lg">{t('home.rating.subtitle')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="text-4xl mb-3">👥</div>
                      <p className={`font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors ${isRTL ? 'text-center' : ''}`}>{t('home.rating.expertTeam')}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
                      <div className="text-4xl mb-3">✅</div>
                      <p className={`font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors ${isRTL ? 'text-center' : ''}`}>{t('home.rating.qualityAssured')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-bounce">
                  🏆
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg animate-pulse">
                  ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Student Success Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Avatar */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className={`flex items-center text-yellow-400 mb-6 ${isRTL ? 'space-x-reverse space-x-1 justify-end' : 'space-x-1'}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-white/90 text-lg leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Decorative Quote Mark */}
                <div className="text-6xl text-white/20 font-serif leading-none">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold mb-8">
              <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
              Ready to Excel in Your Studies?
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              {t('home.cta.title')}
            </h2>
          </div>
          <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              {t('home.cta.getQuote')}
            </button>
            <Link
              to="/services"
              className="group border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center"
            >
              {t('home.cta.viewServices')}
              <BookOpen className="h-6 w-6 ml-3" />
            </Link>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🔒', title: 'Secure & Confidential' },
              { icon: '⚡', title: 'Fast Delivery' },
              { icon: '💯', title: '100% Original' },
              { icon: '🎯', title: 'Expert Writers' }
            ].map((badge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-white font-semibold">{badge.title}</div>
              </div>
            ))}
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