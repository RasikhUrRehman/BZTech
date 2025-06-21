import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye, BookOpen, GraduationCap, Search, PenTool, ArrowRight } from 'lucide-react';

const Samples: React.FC = () => {
  const sampleCategories = [
    {
      icon: FileText,
      title: 'Essays',
      count: '25+ Samples',
      description: 'Argumentative, narrative, descriptive, and analytical essays across various subjects.',
      subjects: ['Literature', 'History', 'Philosophy', 'Sociology']
    },
    {
      icon: Search,
      title: 'Research Papers',
      count: '20+ Samples',
      description: 'Comprehensive research papers with proper methodology and citations.',
      subjects: ['Psychology', 'Business', 'Science', 'Technology']
    },
    {
      icon: GraduationCap,
      title: 'Thesis Samples',
      count: '15+ Samples',
      description: 'Complete thesis examples from various academic levels and disciplines.',
      subjects: ['MBA', 'Masters', 'PhD', 'Undergraduate']
    },
    {
      icon: BookOpen,
      title: 'Case Studies',
      count: '18+ Samples',
      description: 'Detailed case study analyses across different industries and subjects.',
      subjects: ['Business', 'Medicine', 'Law', 'Engineering']
    },
    {
      icon: PenTool,
      title: 'Dissertations',
      count: '12+ Samples',
      description: 'Comprehensive dissertation samples with complete chapters and analysis.',
      subjects: ['Education', 'Healthcare', 'Management', 'Social Sciences']
    },
    {
      icon: FileText,
      title: 'Reports',
      count: '22+ Samples',
      description: 'Professional reports including lab reports, business reports, and project reports.',
      subjects: ['Science', 'Business', 'Engineering', 'Finance']
    }
  ];

  const featuredSamples = [
    {
      title: 'The Impact of Social Media on Modern Communication',
      type: 'Research Paper',
      subject: 'Communication Studies',
      pages: 15,
      level: 'Graduate',
      description: 'A comprehensive analysis of how social media platforms have transformed interpersonal communication patterns in the digital age.',
      pdfPath: '/samples/sample-research-paper.pdf'
    },
    {
      title: 'Sustainable Business Practices in the 21st Century',
      type: 'Case Study',
      subject: 'Business Management',
      pages: 12,
      level: 'MBA',
      description: 'An in-depth case study examining how modern corporations integrate sustainability into their business models.',
      pdfPath: '/samples/sample-essay.pdf'
    },
    {
      title: 'Climate Change and Its Economic Implications',
      type: 'Thesis',
      subject: 'Environmental Economics',
      pages: 45,
      level: 'Masters',
      description: 'A detailed thesis exploring the economic costs and benefits of climate change mitigation strategies.',
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
          <title>Sample Document - Read Only</title>
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
            <strong>Sample Document - Read Only</strong> | 
            This is a demonstration sample. Contact us for full access to our sample library.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 text-purple-300 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Sample Works
            </h1>
          </div>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Explore our collection of high-quality academic samples to understand our writing standards 
            and get inspiration for your own projects.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-indigo-100 mb-4">
              <strong>Note:</strong> Sample works will be provided in folder format upon request. 
              Contact us to access our complete sample library.
            </p>
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Request Samples
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sample Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our diverse collection of academic samples across various subjects and formats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-700 rounded-lg mb-6">
                    <category.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <div className="text-sm font-medium text-indigo-600 mb-3">{category.count}</div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
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
                    className="w-full bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center inline-block"
                  >
                    Request Samples
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Sample Works
            </h2>
            <p className="text-xl text-gray-600">
              Preview some of our high-quality academic works across different disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSamples.map((sample, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{sample.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                        {sample.type}
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {sample.level}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div><strong>Subject:</strong> {sample.subject}</div>
                      <div><strong>Pages:</strong> {sample.pages}</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{sample.description}</p>
                  </div>
                </div>
                
                <div className="p-8 pt-0 mt-auto">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleViewSample(sample.pdfPath)}
                      className="flex-1 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center inline-flex items-center justify-center"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Sample
                    </button>
                    <Link
                      to="/contact"
                      className="flex-1 border border-indigo-700 text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center inline-flex items-center justify-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Request
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Access Sample Works
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to get access to our comprehensive sample library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Contact Us',
                description: 'Reach out to us through our contact form or direct communication channels.'
              },
              {
                step: 2,
                title: 'Specify Requirements',
                description: 'Tell us what type of samples you need - subject, academic level, and format.'
              },
              {
                step: 3,
                title: 'Receive Samples',
                description: 'Get access to relevant sample works organized in easy-to-navigate folders.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-700 text-white rounded-full text-2xl font-bold mb-6 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Our Samples Stand Out
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our sample works represent the same high standards and quality that we deliver to all our clients.
              </p>
              
              <div className="space-y-4">
                {[
                  'Written by PhD-qualified experts',
                  'Properly formatted and cited',
                  'Original and plagiarism-free',
                  'Comprehensive research and analysis',
                  'Multiple academic levels covered',
                  'Diverse subject areas included'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Explore?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to get access to our comprehensive sample library and see the quality of work we deliver.
                </p>
                <Link
                  to="/contact"
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Request Sample Access
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