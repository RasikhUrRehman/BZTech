import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Search, FileText, GraduationCap, Lightbulb, Clock, CheckCircle, ArrowRight, FileCheck, Users, Shield, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const services = [
    {
      icon: FileText,
      title: t('feature.academicAssignments'),
      description: t('service.academicAssignments.desc'),
      features: [t('service.feature.allLevels'), t('service.feature.variousSubjects'), t('service.feature.originalContent'), t('service.feature.properFormatting')],
      price: t('service.pricing.custom')
    },
    {
      icon: GraduationCap,
      title: t('feature.thesisWriting'),
      description: t('service.thesisWriting.desc'),
      features: [t('service.feature.researchProposal'), t('service.feature.literatureReview'), t('service.feature.methodologyDesign'), t('service.feature.dataAnalysis')],
      price: t('service.pricing.tailored')
    },
    {
      icon: Search,
      title: t('feature.researchPapers'),
      description: t('service.researchPapers.desc'),
      features: [t('service.feature.originalResearch'), t('service.feature.peerReviewReady'), t('service.feature.citationIncluded'), t('service.feature.qualitySources')],
      price: t('service.pricing.competitive')
    },
    {
      icon: BookOpen,
      title: t('feature.dissertationHelp'),
      description: t('service.dissertationHelp.desc'),
      features: [t('service.feature.topicSelection'), t('service.feature.chapterWiseWriting'), t('service.feature.defensePreparation'), t('service.feature.revisionSupport')],
      price: t('service.pricing.comprehensive')
    },
    {
      icon: PenTool,
      title: t('feature.essayWriting'),
      description: t('service.essayWriting.desc'),
      features: [t('service.feature.argumentativeEssays'), t('service.feature.narrativeEssays'), t('service.feature.descriptiveEssays'), t('service.feature.compareContrast')],
      price: t('service.pricing.affordable')
    },
    {
      icon: Lightbulb,
      title: t('feature.researchProposal'),
      description: t('service.researchProposal.desc'),
      features: [t('service.feature.problemStatement'), t('service.feature.literatureGap'), t('service.feature.methodology'), t('service.feature.timeline')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true
    },
    {
      icon: FileCheck,
      title: t('feature.researchPublication'),
      description: t('service.researchPublication.desc'),
      features: [t('service.feature.journalSelection'), t('service.feature.manuscriptPreparation'), t('service.feature.peerReviewSupport'), t('service.feature.publicationGuidance')],
      price: t('service.pricing.premium')
    },
    {
      icon: Users,
      title: t('feature.onlineTeaching'),
      description: t('service.onlineTeaching.desc'),
      features: [t('service.feature.oneOnOneSessions'), t('service.feature.assignmentWalkthrough'), t('service.feature.conceptClarification'), t('service.feature.studyGuidance')],
      price: t('service.pricing.hourly')
    },
    {
      icon: Shield,
      title: t('feature.plagiarismRemoval'),
      description: t('service.plagiarismRemoval.desc'),
      features: [t('service.feature.contentRewriting'), t('service.feature.originalityEnhancement'), t('service.feature.qualityImprovement'), t('service.feature.reportIncluded')],
      price: t('service.pricing.perPage')
    },
    {
      icon: FileText,
      title: t('feature.paperPreparation'),
      description: t('service.paperPreparation.desc'),
      features: [t('service.feature.academicFormatting'), t('service.feature.citationStyles'), t('service.feature.proofreading'), t('service.feature.finalReview')],
      price: t('service.pricing.formatting')
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
      freeOffer: true
    },
    {
      icon: BookOpen,
      title: t('service.freeGuidance.title'),
      description: t('service.freeGuidance.desc'),
      features: [t('service.feature.topicConsultation'), t('service.feature.structureGuidance'), t('service.feature.resourceRecommendations'), t('service.feature.approachSuggestions')],
      price: t('common.free'),
      highlight: true,
      freeOffer: true
    }
  ];

  const allServices = [...freeServices, ...services];

  const process = [
    {
      step: 1,
      title: t('services.process.step1.title'),
      description: t('services.process.step1.desc')
    },
    {
      step: 2,
      title: t('services.process.step2.title'),
      description: t('services.process.step2.desc')
    },
    {
      step: 3,
      title: t('services.process.step3.title'),
      description: t('services.process.step3.desc')
    },
    {
      step: 4,
      title: t('services.process.step4.title'),
      description: t('services.process.step4.desc')
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <Link
            to="/contact"
            className={`bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('services.getStarted')}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('services.ourServices')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.chooseServices')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border flex flex-col h-full ${
                service.highlight ? 'border-emerald-300 ring-2 ring-emerald-100' : 'border-gray-100'
              } ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="p-8 pb-4 flex-grow">
                  {service.freeOffer && (
                    <div className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      {t('service.freeService')}
                    </div>
                  )}
                  
                  <div className={`flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6 ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="">
                    <span className={`text-sm font-medium ${
                      service.highlight ? 'text-emerald-700' : 'text-blue-700'
                    }`}>{service.price}</span>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center inline-block ${
                      service.highlight 
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-blue-700 hover:bg-blue-800 text-white'
                    }`}
                  >
                    {service.freeOffer ? t('common.learnMore') : t('common.getQuote')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('services.howItWorks')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-cols-2' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('services.whyStandOut')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('services.standOut.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Clock, titleKey: 'services.feature.onTimeDelivery.title', descKey: 'services.feature.onTimeDelivery.desc' },
                  { icon: CheckCircle, titleKey: 'services.feature.qualityGuaranteed.title', descKey: 'services.feature.qualityGuaranteed.desc' },
                  { icon: PenTool, titleKey: 'services.feature.originalWork.title', descKey: 'services.feature.originalWork.desc' },
                  { icon: Lightbulb, titleKey: 'services.feature.expertWriters.title', descKey: 'services.feature.expertWriters.desc' }
                ].map((feature, index) => (
                  <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex-shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h4 className="font-semibold text-gray-900 mb-1">{t(feature.titleKey)}</h4>
                      <p className="text-sm text-gray-600">{t(feature.descKey)}</p>
                    </div>
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
                <Link
                  to="/contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  {t('services.getQuote')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;