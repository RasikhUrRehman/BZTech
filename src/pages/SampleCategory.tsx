import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Eye, Download, FileText, Monitor, File, Sparkles, BookOpen, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import FileViewer from '../components/FileViewer';

interface SampleItem {
  title: string;
  type: 'PDF' | 'PowerPoint' | 'Document';
  fileName: string;
  filePath: string;
  pages?: number;
  description: string;
  level: string;
  subject: string;
}

const SampleCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { isRTL } = useLanguage();
  const [selectedFile, setSelectedFile] = useState<{ fileName: string; filePath: string; fileType: 'PDF' | 'PowerPoint' | 'Document' } | null>(null);

  const samplesByCategory: Record<string, SampleItem[]> = {
    'ai-machine-learning': [
      {
        title: 'AI in Healthcare Predictive Analytics for Heart Diseases',
        type: 'PDF',
        fileName: 'AI in Healthcare Predictive Analytics for Heart Diseases-proposal.pdf',
        filePath: '/samples/AI and Machine Learning/AI in Healthcare Predictive Analytics for Heart Diseases-proposal.pdf',
        pages: 5,
        description: 'Research proposal on using AI for predictive analytics in healthcare, specifically focusing on heart disease prediction.',
        level: 'Masters',
        subject: 'AI & Healthcare'
      },
      {
        title: 'AI in Weather Prediction Using Satellite Images',
        type: 'PDF',
        fileName: 'AI in Weather Prediction Using Satellite Images-research.pdf',
        filePath: '/samples/AI and Machine Learning/AI in Weather Prediction Using Satellite Images-research.pdf',
        pages: 30,
        description: 'Comprehensive research paper on using artificial intelligence and satellite imagery for weather prediction.',
        level: 'Masters',
        subject: 'AI & Meteorology'
      },
      {
        title: 'Data-Driven Approach for Automated Diabetes Diagnosis',
        type: 'PowerPoint',
        fileName: 'A Data-Driven Approach for Automated Diabetes Diagnosis Using Machine Learning.pdf',
        filePath: '/samples/AI and Machine Learning/A Data-Driven Approach for Automated Diabetes Diagnosis Using Machine Learning.pdf',
        description: 'Presentation on machine learning techniques for automated diabetes diagnosis using data-driven approaches.',
        level: 'Graduate',
        subject: 'Machine Learning & Healthcare'
      },
      {
        title: 'DDoS Attack Detection in SDN Using Machine Learning',
        type: 'PowerPoint',
        fileName: 'Ddos attack detection of SDn Dataset using machine learning techniques & Classification Methods.pdf',
        filePath: '/samples/AI and Machine Learning/Ddos attack detection of SDn Dataset using machine learning techniques & Classification Methods.pdf',
        description: 'Research presentation on using machine learning for DDoS attack detection in Software Defined Networks.',
        level: 'Graduate',
        subject: 'Cybersecurity & ML'
      },
      {
        title: 'Sarcasm Detection in News Headlines',
        type: 'PowerPoint',
        fileName: 'Sarcasm Detection in News Headlines.pdf',
        filePath: '/samples/AI and Machine Learning/Sarcasm Detection in News Headlines.pdf',
        description: 'NLP research on detecting sarcasm in news headlines using machine learning techniques.',
        level: 'Graduate',
        subject: 'Natural Language Processing'
      }
    ],
    'case-studies': [
      {
        title: 'IoT and Cloud-Based Big Data Architecture for Insurance Innovation',
        type: 'PDF',
        fileName: 'IoT and Cloud-Based Big Data Architecture for Insurance Innovation A Case Study of Cantos ApexSolutions Initiative.pdf',
        filePath: '/samples/Case Studies/IoT and Cloud-Based Big Data Architecture for Insurance Innovation A Case Study of Cantos ApexSolutions Initiative.pdf',
        pages: 25,
        description: 'Case study examining the implementation of IoT and cloud-based big data architecture in the insurance industry.',
        level: 'Masters',
        subject: 'Technology & Insurance'
      },
      {
        title: 'Social Media Analytics for Brand Promotion: Netflix Case Study',
        type: 'PDF',
        fileName: 'Leveraging Social Media Analytics for Brand Promotion A Case Study of Netflix in India Entertainment Industry.pdf',
        filePath: '/samples/Case Studies/Leveraging Social Media Analytics for Brand Promotion A Case Study of Netflix in India Entertainment Industry.pdf',
        pages: 20,
        description: 'Analysis of how Netflix leverages social media analytics for brand promotion in the Indian entertainment market.',
        level: 'MBA',
        subject: 'Digital Marketing'
      },
      {
        title: 'Sentiment Analysis: KFC vs McDonald\'s Customer Reviews',
        type: 'PDF',
        fileName: 'Sentiment Analysis of Customer Reviews A Comparative Study of KFC and McDonald Using Trustpilot Data.pdf',
        filePath: '/samples/Case Studies/Sentiment Analysis of Customer Reviews A Comparative Study of KFC and McDonald Using Trustpilot Data.pdf',
        pages: 18,
        description: 'Comparative sentiment analysis of customer reviews for KFC and McDonald\'s using Trustpilot data.',
        level: 'Graduate',
        subject: 'Data Analytics'
      },
      {
        title: 'UK Census Data Analysis',
        type: 'PowerPoint',
        fileName: 'UK Census Data.pdf',
        filePath: '/samples/Case Studies/UK Census Data.pdf',
        pages: 12,
        description: 'From Numbers to Narratives: Statistical Analysis and Visualization of UK Census Data with Key Insights and Trends.',
        level: 'Undergraduate',
        subject: 'Statistics & Demographics'
      },
      {
        title: 'Web Accessibility Audit: Tesco Website WCAG Compliance',
        type: 'PDF',
        fileName: 'Web Accessibility Audit Report Tesco Website Compliance with WCAG Standards.pdf',
        filePath: '/samples/Case Studies/Web Accessibility Audit Report Tesco Website Compliance with WCAG Standards.pdf',
        pages: 15,
        description: 'Comprehensive web accessibility audit of Tesco website evaluating WCAG standards compliance.',
        level: 'Professional',
        subject: 'Web Development & Accessibility'
      }
    ],
    'programming': [
      {
        title: 'Python for Real-World Problem Solving',
        type: 'PDF',
        fileName: 'Python for Real-World Problem Solving-assignment.pdf',
        filePath: '/samples/Programming/Python for Real-World Problem Solving-assignment.pdf',
        pages: 10,
        description: 'Programming assignment demonstrating Python solutions for real-world problems and challenges.',
        level: 'Undergraduate',
        subject: 'Python Programming'
      }
    ]
  };

  const categoryTitles: Record<string, string> = {
    'ai-machine-learning': 'AI & Machine Learning',
    'case-studies': 'Case Studies',
    'programming': 'Programming'
  };

  const samples = category ? samplesByCategory[category] || [] : [];
  const categoryTitle = category ? categoryTitles[category] || 'Unknown Category' : 'Unknown Category';

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return FileText;
      case 'PowerPoint':
        return Monitor;
      default:
        return File;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'from-red-500 to-red-600';
      case 'PowerPoint':
        return 'from-orange-400 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const handleViewFile = (sample: SampleItem) => {
    setSelectedFile({ fileName: sample.fileName, filePath: sample.filePath, fileType: sample.type });
  };

  return (
    <div className="pt-20">
      {/* Header - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#4c2868] via-[#5c5c9c] to-[#653d6e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5a63a] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6787f2] rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/sample"
              className={`group flex items-center text-purple-200 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`h-5 w-5 group-hover:-translate-x-1 transition-transform ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              Back to Samples
            </Link>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
            <Tag className="h-4 w-4 text-[#f5a63a] mr-2" />
            <span className="text-sm font-medium">Category</span>
          </div>

          <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
            {categoryTitle}
          </h1>
          <p className={`text-xl text-purple-100 ${isRTL ? 'text-right' : ''}`}>
            Browse our collection of {samples.length} sample{samples.length !== 1 ? 's' : ''} in this category
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Samples Grid - Enhanced */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {samples.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5c5c9c] to-[#6787f2] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No samples available</h3>
                <p className="text-gray-600 mb-8">
                  We're currently preparing samples for this category. Please check back soon or contact us for specific requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  Contact Us for Samples
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {samples.map((sample, index) => {
                const IconComponent = getFileIcon(sample.type);
                return (
                  <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    
                    <div className="relative p-8">
                      <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${getTypeColor(sample.type)} text-white rounded-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <div className="flex-grow">
                          <h3 className={`text-xl font-bold text-gray-900 mb-3 line-clamp-2 ${isRTL ? 'text-right' : ''}`}>
                            {sample.title}
                          </h3>
                          <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                            <span className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${getTypeColor(sample.type)} text-white rounded-full text-xs font-bold shadow-sm`}>
                              {sample.type}
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-xs font-bold shadow-sm">
                              {sample.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`space-y-3 mb-6 ${isRTL ? 'text-right' : ''}`}>
                        <p className="text-gray-600 leading-relaxed">
                          {sample.description}
                        </p>
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
                          <div className="text-sm space-y-1">
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-[#5c5c9c]" />
                              <span className="font-semibold text-gray-700">Subject:</span>
                              <span className="text-gray-600">{sample.subject}</span>
                            </div>
                            {sample.pages && (
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-[#5c5c9c]" />
                                <span className="font-semibold text-gray-700">Pages:</span>
                                <span className="text-gray-600">{sample.pages}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <button
                          onClick={() => handleViewFile(sample)}
                          className={`flex-1 bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          View Sample
                        </button>
                        
                        <Link
                          to="/contact"
                          className={`flex-1 border-2 border-[#5c5c9c] text-[#5c5c9c] hover:bg-purple-50 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          Request Full
                        </Link>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50"></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* File Viewer Modal */}
      {selectedFile && (
        <FileViewer
          fileName={selectedFile.fileName}
          filePath={selectedFile.filePath}
          fileType={selectedFile.fileType}
          onClose={() => setSelectedFile(null)}
        />
      )}

      {/* Call to Action - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#f5a63a] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need More Samples?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to access our complete library of academic samples across all subjects and levels.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-[#5c5c9c] to-[#6787f2] hover:from-[#6787f2] hover:to-[#5c5c9c] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Request Sample Access
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleCategory;