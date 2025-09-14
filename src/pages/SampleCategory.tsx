import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Download, FileText, Monitor, File } from 'lucide-react';
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
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<{ fileName: string; filePath: string; fileType: 'PDF' | 'PowerPoint' | 'Document' } | null>(null);

  // Sample data organized by categories based on actual folder structure
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
        fileName: 'Leveraging Social Media Analytics for Brand Promotion A Case Study of Netflix in Indias Entertainment Industry.pdf',
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
  console.log('Samples for category', category, samples);
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
        return 'bg-red-100 text-red-700';
      case 'PowerPoint':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleViewFile = (sample: SampleItem) => {
    setSelectedFile({ fileName: sample.fileName, filePath: sample.filePath, fileType: sample.type });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-800 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/samples"
              className={`flex items-center text-indigo-200 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`h-5 w-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              Back to Samples
            </Link>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isRTL ? 'text-right' : ''}`}>
            {categoryTitle}
          </h1>
          <p className={`text-xl text-indigo-100 ${isRTL ? 'text-right' : ''}`}>
            Browse our collection of {samples.length} sample{samples.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {samples.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No samples available</h3>
              <p className="text-gray-600 mb-6">
                We're currently preparing samples for this category. Please check back soon or contact us for specific requirements.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us for Samples
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {samples.map((sample, index) => {
                const IconComponent = getFileIcon(sample.type);
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="p-8">
                      <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex-shrink-0">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                          <h3 title={sample.title} className={`text-xl font-semibold line-clamp-1 text-gray-900 mb-2 ${isRTL ? 'text-right' : ''}`}>
                            {sample.title}
                          </h3>
                          <div className={`flex flex-wrap gap-2 mb-3 ${isRTL ? 'justify-end' : ''}`}>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(sample.type)}`}>
                              {sample.type}
                            </span>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                              {sample.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`space-y-3 mb-6 ${isRTL ? 'text-right' : ''}`}>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {sample.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          <div><strong>Subject:</strong> {sample.subject}</div>
                          {sample.pages && <div><strong>Pages:</strong> {sample.pages}</div>}
                        </div>
                      </div>

                      <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <button
                          onClick={() => handleViewFile(sample)}
                          className={`flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <Eye className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          View Sample
                        </button>
                        <button
                          onClick={() => navigate('/contact')}
                          className={`flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          <Download className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          Request Full
                        </button>
                      </div>
                    </div>
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

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need More Samples?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to access our complete library of academic samples across all subjects and levels.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Request Sample Access
          </button>
        </div>
      </section>
    </div>
  );
};

export default SampleCategory;
