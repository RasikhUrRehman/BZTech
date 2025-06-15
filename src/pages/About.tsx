import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Award, BookOpen, Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in every piece of academic work we deliver.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, ethical practices and complete confidentiality in all our services.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with students to understand and meet their unique needs.'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Supporting educational growth and academic development at every level.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Academic Director',
      expertise: 'Literature & Humanities',
      experience: '12+ years'
    },
    {
      name: 'Prof. James Chen',
      role: 'Research Specialist',
      expertise: 'Sciences & Technology',
      experience: '15+ years'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Writing Coordinator',
      expertise: 'Social Sciences',
      experience: '10+ years'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Writers' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About AcademicPro
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We are a dedicated team of academic professionals committed to helping students achieve 
                excellence in their educational journey through high-quality writing and research services.
              </p>
              <Link
                to="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-300 mb-2">{achievement.number}</div>
                  <div className="text-blue-100">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower students worldwide by providing exceptional academic writing and research services 
                that not only meet their immediate needs but also contribute to their long-term educational success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that every student deserves access to high-quality academic support, regardless of 
                their background or circumstances. Our goal is to bridge the gap between academic challenges 
                and student success.
              </p>
              
              <div className="space-y-4">
                {[
                  'Deliver original, high-quality academic work',
                  'Support students at all educational levels',
                  'Maintain the highest ethical standards',
                  'Foster academic growth and learning'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <GraduationCap className="h-16 w-16 text-blue-700 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
                <p className="text-gray-600">
                  Committed to maintaining the highest standards of academic integrity and quality in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and ensure exceptional service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-lg mb-6 mx-auto group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced academics and professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-2">{member.expertise}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Award className="h-16 w-16 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">
                Every project goes through our rigorous quality assurance process to ensure 
                it meets the highest academic standards.
              </p>
              <ul className="space-y-3">
                {[
                  'Multi-level review process',
                  'Plagiarism detection and prevention',
                  'Grammar and style checking',
                  'Academic formatting verification'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to excellence extends beyond just delivering assignments. We're dedicated 
                to helping you understand the subject matter and improve your academic skills.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a team of PhD-qualified writers and researchers from diverse academic backgrounds, 
                we ensure that every project is handled by experts in the relevant field.
              </p>
              <Link
                to="/services"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students who have achieved academic success with our professional support
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;