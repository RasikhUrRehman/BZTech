import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Search, FileText, GraduationCap, Lightbulb, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Academic Assignments',
      description: 'Comprehensive help with essays, reports, case studies, and all types of academic assignments.',
      features: ['All academic levels', 'Various subjects', 'Original content', 'Proper formatting'],
      price: 'From $15/page'
    },
    {
      icon: GraduationCap,
      title: 'Thesis Writing',
      description: 'Expert assistance with thesis writing from proposal development to final submission.',
      features: ['Research proposal', 'Literature review', 'Methodology design', 'Data analysis'],
      price: 'Custom pricing'
    },
    {
      icon: Search,
      title: 'Research Papers',
      description: 'In-depth research papers with comprehensive analysis and academic rigor.',
      features: ['Original research', 'Peer review ready', 'Citation included', 'Quality sources'],
      price: 'From $20/page'
    },
    {
      icon: BookOpen,
      title: 'Dissertation Help',
      description: 'Complete dissertation support from topic selection to final defense preparation.',
      features: ['Topic selection', 'Chapter-wise writing', 'Defense preparation', 'Revision support'],
      price: 'Custom pricing'
    },
    {
      icon: PenTool,
      title: 'Essay Writing',
      description: 'Professional essay writing services for all academic levels and subjects.',
      features: ['Argumentative essays', 'Narrative essays', 'Descriptive essays', 'Compare & contrast'],
      price: 'From $12/page'
    },
    {
      icon: Lightbulb,
      title: 'Research Proposal',
      description: 'Well-structured research proposals that get approved by academic committees.',
      features: ['Problem statement', 'Literature gap', 'Methodology', 'Timeline'],
      price: 'From $100'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Submit Requirements',
      description: 'Share your assignment details, guidelines, and deadline with us.'
    },
    {
      step: 2,
      title: 'Get Quote',
      description: 'Receive a competitive quote based on your specific requirements.'
    },
    {
      step: 3,
      title: 'Expert Assignment',
      description: 'Your work is assigned to a qualified expert in your subject area.'
    },
    {
      step: 4,
      title: 'Quality Delivery',
      description: 'Receive your completed work on time with unlimited revisions.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Academic Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive academic writing and research services designed to help you achieve excellence in your studies
          </p>
          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of academic writing and research services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-700">{service.price}</span>
                  <Link
                    to="/contact"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Order Now
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent process to get your academic work completed
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Our Services Stand Out
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We deliver exceptional academic work that meets the highest standards of quality and originality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Clock, title: 'On-Time Delivery', description: 'Never miss a deadline' },
                  { icon: CheckCircle, title: 'Quality Guaranteed', description: 'High academic standards' },
                  { icon: PenTool, title: 'Original Work', description: 'Plagiarism-free content' },
                  { icon: Lightbulb, title: 'Expert Writers', description: 'PhD qualified professionals' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex-shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss your academic needs and get a personalized quote.
                </p>
                <Link
                  to="/contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  Get Your Quote
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