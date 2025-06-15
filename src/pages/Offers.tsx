import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, FileCheck, BookOpen, Percent, DollarSign, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

const Offers: React.FC = () => {
  const offers = [
    {
      icon: FileCheck,
      title: 'Free Plagiarism & AI Reports',
      description: 'Get comprehensive plagiarism and AI detection reports with every order at no extra cost.',
      features: ['Detailed plagiarism report', 'AI content detection', 'Originality verification', 'Quality assurance'],
      highlight: 'Always Free',
      color: 'emerald'
    },
    {
      icon: BookOpen,
      title: 'Free Assignment Guidance',
      description: 'Receive expert guidance and consultation for your assignments before placing an order.',
      features: ['Topic consultation', 'Structure guidance', 'Resource recommendations', 'Approach suggestions'],
      highlight: 'Complimentary',
      color: 'blue'
    },
    {
      icon: FileCheck,
      title: 'Free Research Proposal',
      description: 'Get a complete research proposal up to 1 page absolutely free to kickstart your research.',
      features: ['Problem statement', 'Research objectives', 'Methodology outline', 'Literature overview'],
      highlight: 'Up to 1 Page Free',
      color: 'purple'
    },
    {
      icon: Percent,
      title: '30% Off First Order',
      description: 'New clients get an exclusive 30% discount on their first order with us.',
      features: ['Valid for new customers', 'All services included', 'No minimum order', 'One-time offer'],
      highlight: '30% Discount',
      color: 'orange'
    },
    {
      icon: DollarSign,
      title: '30% Off Orders Above $1000',
      description: 'Save big on large orders with our bulk discount for orders exceeding $1000.',
      features: ['Automatic discount', 'All services eligible', 'Stackable with other offers', 'No expiry date'],
      highlight: 'Bulk Savings',
      color: 'green'
    },
    {
      icon: RefreshCw,
      title: 'Unlimited Revisions',
      description: 'Get unlimited free revisions on all paid tasks until you are completely satisfied.',
      features: ['No revision limits', 'Free of charge', '30-day guarantee', 'Quality assurance'],
      highlight: 'Always Included',
      color: 'indigo'
    }
  ];

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-300',
      button: 'bg-emerald-700 hover:bg-emerald-800'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
      button: 'bg-blue-700 hover:bg-blue-800'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-300',
      button: 'bg-purple-700 hover:bg-purple-800'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-700',
      border: 'border-orange-300',
      button: 'bg-orange-700 hover:bg-orange-800'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
      button: 'bg-green-700 hover:bg-green-800'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      border: 'border-indigo-300',
      button: 'bg-indigo-700 hover:bg-indigo-800'
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-16 w-16 text-pink-300 mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">
              Exclusive Offers
            </h1>
          </div>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Take advantage of our special offers and save on premium academic services. 
            Quality education support shouldn't break the bank!
          </p>
          <Link
            to="/contact"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Claim Your Offers
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Amazing Deals & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in providing exceptional value to our clients through these exclusive offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const colors = colorClasses[offer.color as keyof typeof colorClasses];
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-2 ${colors.border}`}>
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} ${colors.text} rounded-lg mb-4`}>
                      <offer.icon className="h-8 w-8" />
                    </div>
                    <div className={`inline-block px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold mb-4`}>
                      {offer.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{offer.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{offer.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className={`${colors.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center`}
                    >
                      Claim Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Terms & Conditions
            </h2>
            <p className="text-lg text-gray-600">
              Please read our offer terms carefully to understand how to claim these benefits
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Terms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>All offers are subject to availability and may be modified or discontinued at any time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Offers cannot be combined unless explicitly stated</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Free services are provided as-is and subject to our standard quality guidelines</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Discount Terms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>First-time customer discount applies only to new clients who haven't used our services before</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Bulk discount for orders above $1000 is automatically applied at checkout</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Discounts are calculated before taxes and additional fees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Revision Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Unlimited revisions are available for 30 days after delivery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Revisions must be within the original scope of work</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Major changes to requirements may incur additional charges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Miss Out on These Amazing Offers!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact us today to claim your benefits and get started with premium academic services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;