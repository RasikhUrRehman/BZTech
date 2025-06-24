import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { useFormContext } from '../contexts/FormContext';

const PricingCalculator: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [service, setService] = useState(formData.service || '');
  const [subject, setSubject] = useState('');
  const [pages, setPages] = useState(formData.pages ? parseInt(formData.pages) : 1);
  const [academicLevel, setAcademicLevel] = useState(formData.academicLevel || '');
  const [deadline, setDeadline] = useState('');

  // Update form context when values change
  useEffect(() => {
    updateFormData({
      service,
      pages: pages.toString(),
      academicLevel
    });
  }, [service, pages, academicLevel, updateFormData]);

  const services = [
    'Academic Assignments',
    'Thesis Writing',
    'Research Papers',
    'Dissertation Help',
    'Essay Writing',
    'Research Publication',
    'Online Teaching',
    'Plagiarism & AI Removal',
    'Paper Preparation'
  ];

  const subjects = [
    'Business & Management',
    'Computer Science',
    'Engineering',
    'Literature & English',
    'Psychology',
    'Sociology',
    'History',
    'Mathematics',
    'Science',
    'Law',
    'Medicine',
    'Other'
  ];

  const academicLevels = [
    { value: 'high-school', label: 'High School', basePrice: 300 },
    { value: 'undergraduate', label: 'Undergraduate', basePrice: 450 },
    { value: 'graduate', label: 'Graduate/Masters', basePrice: 625 },
    { value: 'phd', label: 'PhD/Doctorate', basePrice: 875 }
  ];

  const deadlines = [
    { value: '24h', label: '24 Hours', multiplier: 1.5 },
    { value: '48h', label: '48 Hours', multiplier: 1.3 },
    { value: '3days', label: '3 Days', multiplier: 1.2 },
    { value: '1week', label: '1 Week', multiplier: 1.1 },
    { value: '2weeks', label: '2+ Weeks', multiplier: 1.0 }
  ];

  const calculatePrice = () => {
    if (!service || !academicLevel || !pages) return 0;

    const level = academicLevels.find(l => l.value === academicLevel);
    const deadlineMultiplier = deadlines.find(d => d.value === deadline)?.multiplier || 1;
    
    if (!level) return 0;

    let basePrice = level.basePrice;
    
    // Service-specific adjustments
    const serviceMultipliers: { [key: string]: number } = {
      'Thesis Writing': 1.5,
      'Dissertation Help': 1.8,
      'Research Publication': 2.0,
      'Online Teaching': 1.3,
      'Plagiarism & AI Removal': 0.7,
      'Paper Preparation': 0.8
    };

    const serviceMultiplier = serviceMultipliers[service] || 1;
    
    // Subject complexity adjustments
    const subjectMultipliers: { [key: string]: number } = {
      'Medicine': 1.3,
      'Law': 1.2,
      'Engineering': 1.2,
      'Computer Science': 1.1,
      'Mathematics': 1.1
    };

    const subjectMultiplier = subjectMultipliers[subject] || 1;

    const totalPrice = basePrice * pages * serviceMultiplier * subjectMultiplier * deadlineMultiplier;
    return Math.round(totalPrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-blue-700 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Pricing Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject Area
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Subject</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Level *
          </label>
          <select
            value={academicLevel}
            onChange={(e) => setAcademicLevel(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Level</option>
            {academicLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label} (PKR {level.basePrice}/page)
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Deadline
          </label>
          <select
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Deadline</option>
            {deadlines.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label} {d.multiplier > 1 && `(+${Math.round((d.multiplier - 1) * 100)}%)`}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Pages *
          </label>
          <input
            type="number"
            min="1"
            max="500"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter number of pages"
          />
        </div>
      </div>

      {/* Price Display */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Estimated Price</h4>
            <p className="text-sm text-gray-600">
              {service && academicLevel && pages ? 
                `${service} • ${academicLevels.find(l => l.value === academicLevel)?.label} • ${pages} page${pages > 1 ? 's' : ''}` :
                'Please fill in the required fields'
              }
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-3xl font-bold text-blue-700">
              <span className="text-lg mr-1">PKR</span>
              <span>{estimatedPrice || '0'}</span>
            </div>
            {estimatedPrice > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                PKR {(estimatedPrice / pages).toFixed(2)} per page
              </p>
            )}
          </div>
        </div>

        {estimatedPrice > 0 && (
          <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="flex flex-wrap gap-2 text-sm">
              {estimatedPrice >= 25000 && (
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                  30% Bulk Discount Eligible
                </span>
              )}
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                Free Plagiarism Report
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                Unlimited Revisions
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 mb-4">
          This is an estimated price. Final pricing may vary based on specific requirements.
        </p>
        <button
          onClick={() => window.location.href = '/contact'}
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Get Exact Quote
        </button>
      </div>
    </div>
  );
};

export default PricingCalculator;