import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, Target, Heart, CheckCircle, ArrowRight, ExternalLink, Sparkles, Shield, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Heart,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description'),
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: t('about.values.learning.title'),
      description: t('about.values.learning.description'),
      color: 'from-emerald-500 to-green-600'
    }
  ];

  const team = [
    {
      name: 'Zain Asghar',
      role: t('team.director'),
      expertise: t('team.businessStrategy'),
      experience: t('team.experience.director'),
      image: '/Director.jpg',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      name: 'Khair Ul Burria',
      role: t('team.itManager'),
      expertise: t('team.technologyManagement'),
      experience: t('team.experience.itManager'),
      image: '/IT Manager.webp',
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Raja Shahzaib',
      role: t('team.marketingSalesManager'),
      expertise: t('team.marketingAndSales'),
      experience: t('team.experience.raja'),
      image: '/Marketing and Sales Manager.jpg',
      color: 'from-orange-400 to-orange-500'
    },
    {
      name: 'Dr. Sarah Khan',
      role: t('team.academicDirector'),
      expertise: t('team.literatureHumanities'),
      experience: t('team.experience.sarah'),
      image: null,
      color: 'from-purple-600 to-purple-700'
    },
    {
      name: 'Prof. Usman Ali',
      role: t('team.researchSpecialist'),
      expertise: t('team.sciencesTechnology'),
      experience: t('team.experience.usman'),
      image: null,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Dr. Maria Imran',
      role: t('team.writingCoordinator'),
      expertise: t('subject.socialSciences'),
      experience: t('team.experience.maria'),
      image: null,
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const achievements = [
    { number: '500+', label: t('stats.projectsCompleted'), icon: Award },
    { number: '98%', label: t('stats.clientSatisfaction'), icon: Star },
    { number: '8+', label: t('stats.yearsExperience'), icon: Sparkles },
    { number: '50+', label: t('stats.expertWriters'), icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <Shield className="h-4 w-4 text-[#f5a63a] mr-2" />
                <span className="text-sm font-medium">About Us</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                {t('about.subtitle')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className={`group inline-flex items-center justify-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('about.workWithUs')}
                  <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
                
                <a
                  href="https://www.example-uk-website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-[#4c2868] px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('about.ukWebsite')}
                  <ExternalLink className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105">
                    <IconComponent className="h-10 w-10 text-[#f5a63a] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                    <div className="text-purple-200 text-sm">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Target className="h-4 w-4 text-[#4c2868] mr-2" />
                <span className="text-[#4c2868] font-semibold text-sm">Our Mission</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.mission.text1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.mission.text2')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('about.mission.point1'),
                  t('about.mission.point2'),
                  t('about.mission.point3'),
                  t('about.mission.point4')
                ].map((item, index) => (
                  <div key={index} className={`group flex items-start bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 hover:shadow-md transition-all ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f5a63a] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('about.excellence.title')}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('about.quality.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Heart className="h-4 w-4 text-[#f5a63a] mr-2" />
              <span className="text-[#f5a63a] font-semibold text-sm">Core Values</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} text-white rounded-xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="relative text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                  <p className="relative text-gray-600 text-center leading-relaxed">{value.description}</p>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-4">
              <Users className="h-4 w-4 text-[#4c2868] mr-2" />
              <span className="text-[#4c2868] font-semibold text-sm">Our Team</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 text-center overflow-hidden">
                {member.image ? (
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Users className="h-12 w-12 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm font-bold text-[#5c5c9c] mb-3">{member.role}</p>
                <p className="text-gray-700 font-medium mb-2">{member.expertise}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={`relative bg-white rounded-2xl p-10 shadow-xl ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${isRTL ? 'ml-auto' : ''}`}>
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.quality.title')}</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {t('about.quality.text')}
              </p>
              <ul className="space-y-4">
                {[
                  t('about.quality.point1'),
                  t('about.quality.point2'),
                  t('about.quality.point3'),
                  t('about.quality.point4')
                ].map((item, index) => (
                  <li key={index} className={`flex items-start ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-[#4c2868] mr-2" />
                <span className="text-[#4c2868] font-semibold text-sm">Excellence</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('about.excellence.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.excellence.text1')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.excellence.text2')}
              </p>
              <Link
                to="/services"
                className={`group inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('about.excellence.viewServices')}
                <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#f5a63a] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6787f2] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 text-[#f5a63a] mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-purple-100 max-w-2xl mx-auto leading-relaxed">
            {t('about.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105"
          >
            {t('about.cta.getStarted')}
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;