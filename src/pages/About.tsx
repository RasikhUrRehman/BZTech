import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, Target, Heart, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const values = [
    {
      icon: Target,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Heart,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: BookOpen,
      title: t('about.values.learning.title'),
      description: t('about.values.learning.description')
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: t('team.academicDirector'),
      expertise: t('team.literatureHumanities'),
      experience: t('team.experience.sarah')
    },
    {
      name: 'Prof. James Chen',
      role: t('team.researchSpecialist'),
      expertise: t('team.sciencesTechnology'),
      experience: t('team.experience.james')
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: t('team.writingCoordinator'),
      expertise: t('subject.socialSciences'),
      experience: t('team.experience.maria')
    }
  ];

  const achievements = [
    { number: '500+', label: t('stats.projectsCompleted') },
    { number: '98%', label: t('stats.clientSatisfaction') },
    { number: '5+', label: t('stats.yearsExperience') },
    { number: '50+', label: t('stats.expertWriters') }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('about.subtitle')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Link
                  to="/contact"
                  className={`bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('about.workWithUs')}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
                <a
                  href="https://www.example-uk-website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('about.ukWebsite')}
                  <ExternalLink className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">{achievement.number}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
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
                  <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <GraduationCap className="h-16 w-16 text-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.excellence.title')}</h3>
                <p className="text-gray-600">
                  {t('about.quality.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className={`flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6 mx-auto group-hover:bg-blue-700 group-hover:text-white transition-colors ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={`bg-white rounded-2xl p-8 shadow-lg ${isRTL ? 'text-right' : 'text-left'}`}>
              <Award className={`h-16 w-16 text-emerald-600 mb-6 ${isRTL ? 'ml-auto' : ''}`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.quality.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('about.quality.text')}
              </p>
              <ul className="space-y-3">
                {[
                  t('about.quality.point1'),
                  t('about.quality.point2'),
                  t('about.quality.point3'),
                  t('about.quality.point4')
                ].map((item, index) => (
                  <li key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
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
                className={`bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('about.excellence.viewServices')}
                <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('about.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            {t('about.cta.getStarted')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;