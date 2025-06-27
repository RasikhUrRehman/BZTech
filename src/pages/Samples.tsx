import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye, BookOpen, GraduationCap, Search, PenTool, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Samples: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const sampleCategories = [
    {
      icon: FileText,
      titleKey: 'samples.category.essays',
      countKey: '25+',
      descKey: 'samples.category.essays.desc',
      subjects: ['Literature', 'History', 'Philosophy', 'Sociology']
    },
    {
      icon: Search,
      titleKey: 'samples.category.researchPapers',
      countKey: '20+',
      descKey: 'samples.category.researchPapers.desc',
      subjects: ['Psychology', 'Business', 'Science', 'Technology']
    },
    {
      icon: GraduationCap,
      titleKey: 'samples.category.thesis',
      countKey: '15+',
      descKey: 'samples.category.thesis.desc',
      subjects: ['MBA', 'Masters', 'PhD', 'Undergraduate']
    },
    {
      icon: BookOpen,
      titleKey: 'samples.category.caseStudies',
      countKey: '18+',
      descKey: 'samples.category.caseStudies.desc',
      subjects: ['Business', 'Medicine', 'Law', 'Engineering']
    },
    {
      icon: PenTool,
      titleKey: 'samples.category.dissertations',
      countKey: '12+',
      descKey: 'samples.category.dissertations.desc',
      subjects: ['Education', 'Healthcare', 'Management', 'Social Sciences']
    },
    {
      icon: FileText,
      titleKey: 'samples.category.reports',
      countKey: '22+',
      descKey: 'samples.category.reports.desc',
      subjects: ['Science', 'Business', 'Engineering', 'Finance']
    }
  ];

  const featuredSamples = [
    {
      titleKey: 'samples.featured.socialMedia.title',
      typeKey: 'samples.featured.socialMedia.type',
      subjectKey: 'samples.featured.socialMedia.subject',
      pages: 15,
      levelKey: 'samples.level.graduate',
      descKey: 'samples.featured.socialMedia.desc',
      pdfPath: '/samples/sample-research-paper.pdf'
    },
    {
      titleKey: 'samples.featured.business.title',
      typeKey: 'samples.featured.business.type',
      subjectKey: 'samples.featured.business.subject',
      pages: 12,
      levelKey: 'samples.level.mba',
      descKey: 'samples.featured.business.desc',
      pdfPath: '/samples/sample-essay.pdf'
    },
    {
      titleKey: 'samples.featured.climate.title',
      typeKey: 'samples.featured.climate.type',
      subjectKey: 'samples.featured.climate.subject',
      pages: 45,
      levelKey: 'samples.level.masters',
      descKey: 'samples.featured.climate.desc',
      pdfPath: '/samples/sample-thesis.pdf'
    }
  ];

  const handleViewSample = (pdfPath: string) => {
    // Open PDF in a new window with read-only restrictions
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${t('samples.readOnly')}</title>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
            .header { background: #1e40af; color: white; padding: 10px; text-align: center; }
            .content { height: calc(100vh - 60px); }
            embed { width: 100%; height: 100%; }
            .no-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
          </style>
        </head>
        <body class="no-select">
          <div class="header">
            <strong>${t('samples.readOnly')}</strong> | 
            ${t('samples.demo')}
          </div>
          <div class="content">
            <embed src="${pdfPath}" type="application/pdf" />
          </div>
          <script>
            // Disable right-click context menu
            document.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
            // Disable text selection
            document.addEventListener('selectstart', function(e) {
              e.preventDefault();
            });
            // Disable drag
            document.addEventListener('dragstart', function(e) {
              e.preventDefault();
            });
          </script>
        </body>
        </html>
      `);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 to-purple-700 text-white py-20">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex items-center justify-center mb-6 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <BookOpen className="h-16 w-16 text-purple-300" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {t('samples.title')}
            </h1>
          </div>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            {t('samples.subtitle')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className={`text-lg text-indigo-100 mb-4 ${isRTL ? 'text-right' : ''}`}>
              <strong>{isRTL ? 'ملاحظة:' : 'Note:'}</strong> {t('samples.note')}
            </p>
            <Link
              to="/contact"
              className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('samples.viewSamples')}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('samples.categories.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('samples.categories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className={`flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-700 rounded-lg mb-6 ${isRTL ? 'ml-auto' : ''}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{t(category.titleKey)}</h3>
                    <div className={`text-sm font-medium text-indigo-600 mb-3 ${isRTL ? 'text-right' : ''}`}>{category.countKey}+ {t('samples.category.count')}</div>
                    <p className={`text-gray-600 mb-4 ${isRTL ? 'text-right' : ''}`}>{t(category.descKey)}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>{t('samples.availableSubjects')}:</h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                      {category.subjects.map((subject, subjectIndex) => (
                        <span key={subjectIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center inline-block ${isRTL ? 'text-right' : ''}`}
                  >
                    {t('samples.requestSamples')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Samples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('samples.featuredTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('samples.featuredSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSamples.map((sample, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className={`text-lg font-semibold text-gray-900 mb-3 ${isRTL ? 'text-right' : ''}`}>{t(sample.titleKey)}</h3>
                    <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : ''}`}>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {t(sample.typeKey)}
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {t(sample.levelKey)}
                      </span>
                    </div>
                    <div className={`text-sm text-gray-600 mb-4 ${isRTL ? 'text-right' : ''}`}>
                      <div><strong>{t('samples.subject')}:</strong> {t(sample.subjectKey)}</div>
                      <div><strong>{t('samples.pages')}:</strong> {sample.pages}</div>
                    </div>
                    <p className={`text-gray-600 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>{t(sample.descKey)}</p>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <button
                      onClick={() => handleViewSample(sample.pdfPath)}
                      className={`flex-1 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('samples.viewSample')}
                    </button>
                    <Link
                      to="/contact"
                      className={`flex-1 border border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('samples.request')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('samples.howToAccess.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('samples.howToAccess.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                titleKey: 'samples.step.contact.title',
                descKey: 'samples.step.contact.desc'
              },
              {
                step: 2,
                titleKey: 'samples.step.specify.title',
                descKey: 'samples.step.specify.desc'
              },
              {
                step: 3,
                titleKey: 'samples.step.receive.title',
                descKey: 'samples.step.receive.desc'
              }
            ].map((step, index) => (
              <div key={index} className={`text-center ${isRTL ? 'text-right' : ''}`}>
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-700 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t(step.titleKey)}</h3>
                <p className="text-gray-600">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'order-2' : ''}>
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t('samples.quality.title')}
              </h2>
              <p className={`text-lg text-gray-600 mb-8 ${isRTL ? 'text-right' : ''}`}>
                {t('samples.quality.subtitle')}
              </p>
              
              <div className="space-y-4">
                {[
                  'samples.quality.benefit1',
                  'samples.quality.benefit2',
                  'samples.quality.benefit3',
                  'samples.quality.benefit4',
                  'samples.quality.benefit5',
                  'samples.quality.benefit6'
                ].map((benefitKey, index) => (
                  <div key={index} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`text-gray-700 ${isRTL ? 'text-right' : ''}`}>{t(benefitKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`bg-white rounded-2xl p-8 shadow-lg ${isRTL ? 'order-1' : ''}`}>
              <div className={`text-center ${isRTL ? 'text-right' : ''}`}>
                <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('samples.explore.title')}</h3>
                <p className="text-gray-600 mb-6">
                  {t('samples.note')}
                </p>
                <Link
                  to="/contact"
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  {t('samples.requestSampleAccess')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Samples;