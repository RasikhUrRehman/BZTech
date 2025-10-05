import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Search, FileText, GraduationCap, Lightbulb, Clock, CheckCircle, ArrowRight, FileCheck, Users, Shield, Gift, Sparkles, Award, Zap } from 'lucide-react';
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
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: GraduationCap,
      title: t('feature.thesisWriting'),
      description: t('service.thesisWriting.desc'),
      features: [t('service.feature.researchProposal'), t('service.feature.literatureReview'), t('service.feature.methodologyDesign'), t('service.feature.dataAnalysis')],
      price: t('service.pricing.tailored'),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Search,
      title: t('feature.researchPapers'),
      description: t('service.researchPapers.desc'),
      features: [t('service.feature.originalResearch'), t('service.feature.peerReviewReady'), t('service.feature.citationIncluded'), t('service.feature.qualitySources')],
      price: t('service.pricing.competitive'),
      color: 'from-orange-400 to-orange-500'
    },
    {
      icon: BookOpen,
      title: t('feature.dissertationHelp'),
      description: t('service.dissertationHelp.desc'),
      features: [t('service.feature.topicSelection'), t('service.feature.chapterWiseWriting'), t('service.feature.defensePreparation'), t('service.feature.revisionSupport')],
      price: t('service.pricing.comprehensive'),
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: PenTool,
      title: t('feature.essayWriting'),
      description: t('service.essayWriting.desc'),
      features: [t('service.feature.argumentativeEssays'), t('service.feature.narrativeEssays'), t('service.feature.descriptiveEssays'), t('service.feature.compareContrast')],
      price: t('service.pricing.affordable'),
      color: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: t('feature.researchProposal'),
      description: t('service.researchProposal.desc'),
      features: [t('service.feature.problemStatement'), t('service.feature.literatureGap'), t('service.feature.methodology'), t('service.feature.timeline')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true,
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: FileCheck,
      title: t('feature.researchPublication'),
      description: t('service.researchPublication.desc'),
      features: [t('service.feature.journalSelection'), t('service.feature.manuscriptPreparation'), t('service.feature.peerReviewSupport'), t('service.feature.publicationGuidance')],
      price: t('service.pricing.premium'),
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Users,
      title: t('feature.onlineTeaching'),
      description: t('service.onlineTeaching.desc'),
      features: [t('service.feature.oneOnOneSessions'), t('service.feature.assignmentWalkthrough'), t('service.feature.conceptClarification'), t('service.feature.studyGuidance')],
      price: t('service.pricing.hourly'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: t('feature.plagiarismRemoval'),
      description: t('service.plagiarismRemoval.desc'),
      features: [t('service.feature.contentRewriting'), t('service.feature.originalityEnhancement'), t('service.feature.qualityImprovement'), t('service.feature.reportIncluded')],
      price: t('service.pricing.perPage'),
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: FileText,
      title: t('feature.paperPreparation'),
      description: t('service.paperPreparation.desc'),
      features: [t('service.feature.academicFormatting'), t('service.feature.citationStyles'), t('service.feature.proofreading'), t('service.feature.finalReview')],
      price: t('service.pricing.formatting'),
      color: 'from-purple-600 to-indigo-700'
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
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: BookOpen,
      title: t('service.freeGuidance.title'),
      description: t('service.freeGuidance.desc'),
      features: [t('service.feature.topicConsultation'), t('service.feature.structureGuidance'), t('service.feature.resourceRecommendations'), t('service.feature.approachSuggestions')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const allServices = [...freeServices, ...services];

  const process = [
    {
      step: 1,
      title: t('services.process.step1.title'),
      description: t('services.process.step1.desc'),
      icon: FileText,
      color: 'from-[#5c5c9c] to-[#6787f2]'
    },
    {
      step: 2,
      title: t('services.process.step2.title'),
      description: t('services.process.step2.desc'),
      icon: Award,
      color: 'from-[#6787f2] to-[#5c5c9c]'
    },
    {
      step: 3,
      title: t('services.process.step3.title'),
      description: t('services.process.step3.desc'),
      icon: PenTool,
      color: 'from-[#f5a63a] to-orange-500'
    },
    {
      step: 4,
      title: t('services.process.step4.title'),
      description: t('services.process.step4.desc'),
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-[#f5a63a] mr-2" />
            <span className="text-sm font-medium">Complete Academic Solutions</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
          <Link
            to="/contact"
            className={`group inline-flex items-center bg-gradient-to-r from-[#f5a63a] to-orange-500 hover:from-orange-500 hover:to-[#f5a63a] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('services.getStarted')}
            <ArrowRight className={`h-5 w-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.ourServices')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.chooseServices')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden ${
                  service.highlight ? 'ring-2 ring-emerald-400' : ''
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative p-8 pb-4 flex-grow">
                  {service.freeOffer && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-4 py-2 rounded-full inline-flex mb-4 shadow-lg">
                      <Gift className="h-4 w-4" />
                      <span>{t('service.freeService')}</span>
                    </div>
                  )}
                  
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
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
                      service.highlight ? 'text-emerald-600' : 'text-[#5c5c9c]'
                    }`}>{service.price}</span>
                  </div>
                </div>
                
                <div className="relative p-8 pt-0 mt-auto">
                  {service.freeOffer ? (
                    <Link
                      to="/contact"
                      className={`w-full px-6 py-4 rounded-xl text-base font-semibold transition-all text-center inline-block shadow-md hover:shadow-lg hover:scale-105 ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white'
                      }`}
                    >
                      {t('common.learnMore')}
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full px-6 py-4 rounded-xl text-base font-semibold transition-all text-center shadow-md hover:shadow-lg hover:scale-105 ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white'
                      }`}
                    >
                      {t('common.getQuote')}
                    </button>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('services.howItWorks')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.step}
                  </div>

                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Zap className="h-4 w-4 text-[#f5a63a] mr-2" />
                <span className="text-[#f5a63a] font-semibold text-sm">Why Us</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {t('services.whyStandOut')}
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                {t('services.standOut.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Clock, titleKey: 'services.feature.onTimeDelivery.title', descKey: 'services.feature.onTimeDelivery.desc', color: 'from-blue-500 to-indigo-600' },
                  { icon: CheckCircle, titleKey: 'services.feature.qualityGuaranteed.title', descKey: 'services.feature.qualityGuaranteed.desc', color: 'from-emerald-500 to-green-600' },
                  { icon: PenTool, titleKey: 'services.feature.originalWork.title', descKey: 'services.feature.originalWork.desc', color: 'from-purple-500 to-pink-600' },
                  { icon: Lightbulb, titleKey: 'services.feature.expertWriters.title', descKey: 'services.feature.expertWriters.desc', color: 'from-orange-400 to-orange-500' }
                ].map((feature, index) => (
                  <div key={index} className={`group flex items-start bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:scale-105 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} text-white rounded-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h4 className="font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{t(feature.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side CTA card - Enhanced */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f5a63a] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('services.readyToStart')}</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {t('services.readyToStart.subtitle')}
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105"
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