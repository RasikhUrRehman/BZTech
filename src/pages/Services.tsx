import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Search, FileText, GraduationCap, Lightbulb, Clock, CheckCircle, ArrowRight, FileCheck, Users, Shield, Gift, Sparkles, Award, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import QuoteModal from '../components/QuoteModal';

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: FileText,
      title: t('feature.academicAssignments'),
      description: t('service.academicAssignments.desc'),
      features: [t('service.feature.allLevels'), t('service.feature.variousSubjects'), t('service.feature.originalContent'), t('service.feature.properFormatting')],
      price: t('service.pricing.custom'),
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: GraduationCap,
      title: t('feature.thesisWriting'),
      description: t('service.thesisWriting.desc'),
      features: [t('service.feature.researchProposal'), t('service.feature.literatureReview'), t('service.feature.methodologyDesign'), t('service.feature.dataAnalysis')],
      price: t('service.pricing.tailored'),
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Search,
      title: t('feature.researchPapers'),
      description: t('service.researchPapers.desc'),
      features: [t('service.feature.originalResearch'), t('service.feature.peerReviewReady'), t('service.feature.citationIncluded'), t('service.feature.qualitySources')],
      price: t('service.pricing.competitive'),
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: BookOpen,
      title: t('feature.dissertationHelp'),
      description: t('service.dissertationHelp.desc'),
      features: [t('service.feature.topicSelection'), t('service.feature.chapterWiseWriting'), t('service.feature.defensePreparation'), t('service.feature.revisionSupport')],
      price: t('service.pricing.comprehensive'),
      gradient: 'from-indigo-500 to-blue-500',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: PenTool,
      title: t('feature.essayWriting'),
      description: t('service.essayWriting.desc'),
      features: [t('service.feature.argumentativeEssays'), t('service.feature.narrativeEssays'), t('service.feature.descriptiveEssays'), t('service.feature.compareContrast')],
      price: t('service.pricing.affordable'),
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Lightbulb,
      title: t('feature.researchProposal'),
      description: t('service.researchProposal.desc'),
      features: [t('service.feature.problemStatement'), t('service.feature.literatureGap'), t('service.feature.methodology'), t('service.feature.timeline')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true,
      gradient: 'from-emerald-400 to-green-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: FileCheck,
      title: t('feature.researchPublication'),
      description: t('service.researchPublication.desc'),
      features: [t('service.feature.journalSelection'), t('service.feature.manuscriptPreparation'), t('service.feature.peerReviewSupport'), t('service.feature.publicationGuidance')],
      price: t('service.pricing.premium'),
      gradient: 'from-violet-500 to-purple-500',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600'
    },
    {
      icon: Users,
      title: t('feature.onlineTeaching'),
      description: t('service.onlineTeaching.desc'),
      features: [t('service.feature.oneOnOneSessions'), t('service.feature.assignmentWalkthrough'), t('service.feature.conceptClarification'), t('service.feature.studyGuidance')],
      price: t('service.pricing.hourly'),
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Shield,
      title: t('feature.plagiarismRemoval'),
      description: t('service.plagiarismRemoval.desc'),
      features: [t('service.feature.contentRewriting'), t('service.feature.originalityEnhancement'), t('service.feature.qualityImprovement'), t('service.feature.reportIncluded')],
      price: t('service.pricing.perPage'),
      gradient: 'from-rose-500 to-pink-500',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: FileText,
      title: t('feature.paperPreparation'),
      description: t('service.paperPreparation.desc'),
      features: [t('service.feature.academicFormatting'), t('service.feature.citationStyles'), t('service.feature.proofreading'), t('service.feature.finalReview')],
      price: t('service.pricing.formatting'),
      gradient: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  // Free services from offers
  const freeServices = [
    {
      icon: Gift,
      title: t('service.freePlagiarism.title'),
      description: t('service.freePlagiarism.desc'),
      features: [t('service.feature.detailedReport'), t('service.feature.aiDetection'), t('service.feature.originalityVerification'), t('service.feature.qualityAssurance')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true,
      gradient: 'from-emerald-400 to-green-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: BookOpen,
      title: t('service.freeGuidance.title'),
      description: t('service.freeGuidance.desc'),
      features: [t('service.feature.topicConsultation'), t('service.feature.structureGuidance'), t('service.feature.resourceRecommendations'), t('service.feature.approachSuggestions')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true,
      gradient: 'from-emerald-400 to-green-500',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ];

  const allServices = [...freeServices, ...services];

  const process = [
    {
      step: 1,
      title: t('services.process.step1.title'),
      description: t('services.process.step1.desc'),
      icon: '📝',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: t('services.process.step2.title'),
      description: t('services.process.step2.desc'),
      icon: '💰',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      step: 3,
      title: t('services.process.step3.title'),
      description: t('services.process.step3.desc'),
      icon: '✍️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 4,
      title: t('services.process.step4.title'),
      description: t('services.process.step4.desc'),
      icon: '🎉',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Award className="h-5 w-5 text-yellow-300 mr-2" />
            <span className="text-lg font-semibold">Premium Academic Services</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h1>
          
          <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
          
          <Link
            to="/contact"
            className={`group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('services.getStarted')}
            <ArrowRight className={`h-6 w-6 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:translate-x-1 transition-transform`} />
          </Link>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-white/80 ml-2">4.9/5 Rating</span>
            </div>
            <div className="text-white/60">|</div>
            <div className="text-white/80">500+ Projects Completed</div>
            <div className="text-white/60">|</div>
            <div className="text-white/80">24/7 Support</div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Our Premium Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.ourServices')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.chooseServices')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border overflow-hidden ${
                service.highlight ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-100'
              } ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 pb-4 flex-grow">
                  {service.freeOffer && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-400 to-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                      <Gift className="h-3 w-3 inline mr-1" />
                      {t('service.freeService')}
                    </div>
                  )}
                  
                  {/* Enhanced Icon */}
                  <div className={`relative flex items-center justify-center w-20 h-20 ${service.iconBg} ${service.iconColor} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                    <service.icon className="h-10 w-10" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <span className={`text-lg font-bold ${
                      service.highlight ? 'text-emerald-700' : 'text-blue-700'
                    }`}>{service.price}</span>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  {service.freeOffer ? (
                    <Link
                      to="/contact"
                      className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center inline-block ${
                        service.highlight 
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : 'bg-blue-700 hover:bg-blue-800 text-white'
                      }`}
                    >
                      {t('common.learnMore')}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center ${
                        service.highlight 
                          ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                          : 'bg-blue-700 hover:bg-blue-800 text-white'
                      }`}
                    >
                      {t('common.getQuote')}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.howItWorks')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Enhanced Step Number */}
                  <div className={`relative flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-3xl">{step.icon}</span>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-gray-800 font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right order-2' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Why We Stand Out
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                {t('services.whyStandOut')}
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {t('services.standOut.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Clock, titleKey: 'services.feature.onTimeDelivery.title', descKey: 'services.feature.onTimeDelivery.desc', color: 'text-blue-600', bg: 'bg-blue-100' },
                  { icon: CheckCircle, titleKey: 'services.feature.qualityGuaranteed.title', descKey: 'services.feature.qualityGuaranteed.desc', color: 'text-emerald-600', bg: 'bg-emerald-100' },
                  { icon: PenTool, titleKey: 'services.feature.originalWork.title', descKey: 'services.feature.originalWork.desc', color: 'text-purple-600', bg: 'bg-purple-100' },
                  { icon: Lightbulb, titleKey: 'services.feature.expertWriters.title', descKey: 'services.feature.expertWriters.desc', color: 'text-orange-600', bg: 'bg-orange-100' }
                ].map((feature, index) => (
                  <div key={index} className={`group p-6 rounded-2xl hover:shadow-lg transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center justify-center w-14 h-14 ${feature.bg} ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{t(feature.titleKey)}</h4>
                    <p className="text-gray-600 leading-relaxed">{t(feature.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.readyToStart')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('services.readyToStart.subtitle')}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  {t('services.getQuote')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="Services Page"
      />
    </div>
  );
};

export default Services;