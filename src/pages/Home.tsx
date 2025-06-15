import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, BookOpen, PenTool, FileCheck, ArrowRight, Search } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Assignments',
      description: 'Comprehensive help with all types of academic assignments across various subjects.'
    },
    {
      icon: PenTool,
      title: 'Thesis Writing',
      description: 'Expert assistance in thesis writing, from proposal to final submission.'
    },
    {
      icon: Search,
      title: 'Research Publication in Journals',
      description: 'Professional support for publishing your research in reputable academic journals.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Graduate Student',
      content: 'The quality of work exceeded my expectations. My thesis was completed on time and with exceptional research depth.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'PhD Candidate',
      content: 'Professional service with excellent communication throughout the process. Highly recommend for research work.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Undergraduate',
      content: 'Helped me understand complex concepts while delivering high-quality assignments. Great learning experience.',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Excel in Your <span className="text-emerald-300">Academic Journey</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional academic writing services for assignments, thesis, and research papers. 
                Quality work that helps you achieve academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  View Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-300 mb-2">{stat.number}</div>
                      <div className="text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Academic Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic support tailored to your specific needs and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              View More Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine academic expertise with professional service to deliver exceptional results that exceed expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expert writers with advanced degrees',
                  'Free plagiarism and AI reports',
                  'Unlimited free revisions',
                  'Timely delivery guaranteed',
                  '24/7 customer support available',
                  'Confidential and secure service'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-gray-900">4.9/5 Rating</p>
                <p className="text-gray-600">From 500+ satisfied clients</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Expert Team</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from students who achieved academic success with our help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Excel in Your Studies?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get started today and experience the difference professional academic support can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Your Quote
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;