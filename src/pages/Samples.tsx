import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, BookOpen, Search, PenTool, Sparkles, Award, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Samples: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const sampleCategories = [
    {
      icon: Search,
      titleKey: 'AI & Machine Learning',
      countKey: '5',
      descKey: 'Comprehensive collection of AI and ML projects, research papers, and presentations including healthcare analytics, weather prediction, and cybersecurity applications',
      subjects: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Healthcare AI'],
      route: '/sample/ai-machine-learning',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: BookOpen,
      titleKey: 'Case Studies',
      countKey: '5',
      descKey: 'Real-world case studies covering business analytics, social media analysis, web accessibility audits, and industry-specific solutions',
      subjects: ['Business Analytics', 'Social Media Analytics', 'Web Accessibility', 'Market Research', 'Data Analysis'],
      route: '/sample/case-studies',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: PenTool,
      titleKey: 'Programming',
      countKey: '1',
      descKey: 'Programming assignments and projects demonstrating practical problem-solving with modern technologies',
      subjects: ['Python', 'Software Development', 'Problem Solving', 'Programming Fundamentals'],
      route: '/sample/programming',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  const featuredSamples = [
    {
      titleKey: 'AI in Healthcare: Predictive Analytics for Heart Diseases',
      typeKey: 'Research Proposal',
      subjectKey: 'Artificial Intelligence & Healthcare',
      pages: 5,
      levelKey: 'Masters Level',
      descKey: 'Comprehensive proposal exploring the application of AI in healthcare for predictive analytics, specifically focusing on heart disease prediction using machine learning algorithms.',
      pdfPath: '/samples/AI and Machine Learning/AI in Healthcare Predictive Analytics for Heart Diseases-proposal.pdf',
      color: 'from-purple-600 to-purple-700'
    },
    {
      titleKey: 'Social Media Analytics: Netflix Brand Promotion Case Study',
      typeKey: 'Case Study',
      subjectKey: 'Digital Marketing & Analytics',
      pages: 20,
      levelKey: 'MBA Level',
      descKey: 'In-depth analysis of how Netflix leverages social media analytics for brand promotion in India entertainment industry, showcasing data-driven marketing strategies.',
      pdfPath: '/samples/Case Studies/Leveraging Social Media Analytics for Brand Promotion A Case Study of Netflix in India Entertainment Industry.pdf',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      titleKey: 'Sentiment Analysis: KFC vs McDonald\'s Customer Reviews',
      typeKey: 'Research Paper',
      subjectKey: 'Data Analytics & Business Intelligence',
      pages: 18,
      levelKey: 'Graduate Level',
      descKey: 'Comparative sentiment analysis study examining customer reviews for KFC and McDonald\'s using Trustpilot data and advanced analytics techniques.',
      pdfPath: '/samples/Case Studies/Sentiment Analysis of Customer Reviews A Comparative Study of KFC and McDonald Using Trustpilot Data.pdf',
      color: 'from-emerald-500 to-green-600'
    },
    {
      titleKey: 'Web Accessibility Audit: Tesco Website WCAG Compliance',
      typeKey: 'Audit Report',
      subjectKey: 'Web Development & Accessibility',
      pages: 15,
      levelKey: 'Professional Level',
      descKey: 'Comprehensive web accessibility audit evaluating Tesco website\'s compliance with WCAG standards, including recommendations for improvement.',
      pdfPath: '/samples/Case Studies/Web Accessibility Audit Report Tesco Website Compliance with WCAG Standards.pdf',
      color: 'from-orange-400 to-orange-500'
    },
    {
      titleKey: 'AI in Weather Prediction Using Satellite Images',
      typeKey: 'Research Paper',
      subjectKey: 'AI & Meteorology',
      pages: 30,
      levelKey: 'Masters Level',
      descKey: 'Advanced research paper exploring the application of artificial intelligence and satellite imagery for accurate weather prediction systems.',
      pdfPath: '/samples/AI and Machine Learning/AI in Weather Prediction Using Satellite Images-research.pdf',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      titleKey: 'Python for Real-World Problem Solving',
      typeKey: 'Programming Assignment',
      subjectKey: 'Computer Science & Programming',
      pages: 10,
      levelKey: 'Undergraduate Level',
      descKey: 'Practical programming assignment demonstrating Python solutions for real-world problems and computational challenges.',
      pdfPath: '/samples/Programming/Python for Real-World Problem Solving-assignment.pdf',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const handleViewSample = (pdfPath: string) => {
    // Open PDF in a new window with read-only restrictions
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const isPresentation = pdfPath.toLowerCase().includes('.pptx');
      
      if (isPresentation) {
        // Handle PowerPoint files
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>PowerPoint Preview - ${t('samples.readOnly')}</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              .header { background: #5c5c9c; color: white; padding: 10px; text-align: center; }
              .content { height: calc(100vh - 60px); padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
              .no-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
              .download-btn { 
                background: linear-gradient(to right, #f5a63a, #ff8c42);
                color: white; 
                padding: 12px 24px; 
                border: none; 
                border-radius: 12px; 
                cursor: pointer; 
                text-decoration: none; 
                display: inline-block;
                margin: 10px;
                font-weight: 600;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              }
              .download-btn:hover { transform: scale(1.05); }
              .icon { width: 64px; height: 64px; margin-bottom: 20px; }
            </style>
          </head>
          <body class="no-select">
            <div class="header">
              <strong>${t('samples.readOnly')}</strong> | 
              ${t('samples.demo')}
            </div>
            <div class="content">
              <svg class="icon" fill="#6787f2" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
              <h3 style="color: #374151; margin-bottom: 16px;">PowerPoint Presentation</h3>
              <p style="color: #6b7280; margin-bottom: 24px; text-align: center;">
                This is a PowerPoint presentation file. Click the button below to open it in your default application.
              </p>
              <a href="${pdfPath}" class="download-btn" onclick="window.close()">
                Open Presentation
              </a>
              <p style="color: #9ca3af; font-size: 14px; margin-top: 16px;">
                <em>The file will open in PowerPoint or your browser's viewer.</em>
              </p>
            </div>
            <script>
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });
            </script>
          </body>
          </html>
        `);
      } else {
        // Handle PDF files
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>${t('samples.readOnly')}</title>
            <style>
              body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
              .header { background: #5c5c9c; color: white; padding: 10px; text-align: center; }
              .content { height: calc(100vh - 60px); }
              embed { width: 100%; height: 100%; }
              .no-select { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
              .error { padding: 20px; text-align: center; color: #666; }
            </style>
          </head>
          <body class="no-select">
            <div class="header">
              <strong>${t('samples.readOnly')}</strong> | 
              ${t('samples.demo')}
            </div>
            <div class="content">
              <embed src="${pdfPath}" type="application/pdf" />
              <div class="error" style="display: none;" id="error-msg">
                <p>Unable to display PDF. <a href="${pdfPath}" download>Download instead</a></p>
              </div>
            </div>
            <script>
              document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
              document.addEventListener('selectstart', function(e) { e.preventDefault(); });
              document.addEventListener('dragstart', function(e) { e.preventDefault(); });
            </script>
          </body>
          </html>
        `);
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <FileText className="h-4 w-4 text-[#f5a63a] mr-2" />
              <span className="text-sm font-medium">Quality Sample Work</span>
            </div>

            <div className={`flex items-center justify-center mb-6 ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <BookOpen className="h-16 w-16 text-[#f5a63a]" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                {t('samples.title')}
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {t('samples.subtitle')}
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Sample Categories - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Browse by Category</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('samples.categories.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('samples.categories.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCategories.map((category, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                
                <div className="relative p-8 flex-grow">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform ${isRTL ? 'ml-auto' : ''}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>
                      {category.titleKey}
                    </h3>
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold mb-4 shadow-md`}>
                      {category.countKey}+ {t('samples.category.count')}
                    </div>
                    <p className={`text-gray-600 mb-6 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                      {category.descKey}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-bold text-gray-900 mb-3 ${isRTL ? 'text-right' : ''}`}>{t('samples.availableSubjects')}:</h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                      {category.subjects.map((subject, subjectIndex) => (
                        <span key={subjectIndex} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative p-8 pt-0 mt-auto">
                  <Link
                    to={category.route}
                    className={`w-full bg-gradient-to-r ${category.color} text-white px-6 py-4 rounded-xl font-semibold transition-all text-center inline-flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('samples.viewSamples')}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Link>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Samples - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full mb-4">
              <Award className="h-4 w-4 text-[#f5a63a] mr-2" />
              <span className="text-[#f5a63a] font-semibold text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('samples.featuredTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('samples.featuredSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSamples.map((sample, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                <div className="relative p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>{sample.titleKey}</h3>
                    <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'justify-end' : ''}`}>
                      <span className={`px-3 py-1.5 bg-gradient-to-r ${sample.color} text-white rounded-full text-sm font-semibold shadow-sm`}>
                        {sample.typeKey}
                      </span>
                      <span className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-semibold shadow-sm">
                        {sample.levelKey}
                      </span>
                    </div>
                    <div className={`text-sm text-gray-700 mb-4 space-y-1 ${isRTL ? 'text-right' : ''}`}>
                      <div><strong className="font-semibold">{t('samples.subject')}:</strong> {sample.subjectKey}</div>
                      <div><strong className="font-semibold">{t('samples.pages')}:</strong> {sample.pages} pages</div>
                    </div>
                    <p className={`text-gray-600 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>{sample.descKey}</p>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <button
                      onClick={() => handleViewSample(sample.pdfPath)}
                      className={`flex-1 bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {t('samples.viewSample')}
                    </button>
                    <Link
                      to="/contact"
                      className={`flex-1 border-2 border-[#5c5c9c] text-[#5c5c9c] hover:bg-purple-50 px-4 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
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

      {/* How to Access - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 bg-[#d0afcd] bg-opacity-30 rounded-full mb-4">
              <span className="text-[#4c2868] font-semibold text-sm">Simple Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('samples.howToAccess.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('samples.howToAccess.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                titleKey: 'samples.step.contact.title',
                descKey: 'samples.step.contact.desc',
                color: 'from-[#5c5c9c] to-[#6787f2]',
                icon: FileText
              },
              {
                step: 2,
                titleKey: 'samples.step.specify.title',
                descKey: 'samples.step.specify.desc',
                color: 'from-[#f5a63a] to-orange-500',
                icon: Search
              },
              {
                step: 3,
                titleKey: 'samples.step.receive.title',
                descKey: 'samples.step.receive.desc',
                color: 'from-emerald-500 to-green-600',
                icon: CheckCircle
              }
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {step.step}
                  </div>

                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t(step.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(step.descKey)}</p>
                </div>

                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={isRTL ? 'order-2' : ''}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-[#4c2868] mr-2" />
                <span className="text-[#4c2868] font-semibold text-sm">Quality Guaranteed</span>
              </div>

              <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
                {t('samples.quality.title')}
              </h2>
              <p className={`text-lg text-gray-600 mb-10 ${isRTL ? 'text-right' : ''}`}>
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
                  <div key={index} className={`group flex items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className={`text-gray-700 font-medium ${isRTL ? 'text-right' : ''}`}>{t(benefitKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative ${isRTL ? 'order-1' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#6787f2] to-[#5c5c9c] rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f5a63a] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('samples.explore.title')}</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {t('samples.note')}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  {t('samples.requestSampleAccess')}
                  <ArrowRight className="h-5 w-5 ml-2" />
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