import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { useFormContext } from '../contexts/FormContext';
import { useLanguage } from '../contexts/LanguageContext';
import QuoteModal from './QuoteModal';

const PricingCalculator: React.FC = () => {
  const { t, isRTL, formatPrice } = useLanguage();
  const { formData, updateFormData } = useFormContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    t('feature.academicAssignments'),
    t('feature.thesisWriting'),
    t('feature.researchPapers'),
    t('feature.dissertationHelp'),
    t('feature.essayWriting'),
    t('feature.researchPublication'),
    t('feature.onlineTeaching'),
    t('feature.plagiarismRemoval'),
    t('feature.paperPreparation')
  ];

  const subjects = [
    t('subject.business'),
    t('subject.computerScience'),
    t('subject.engineering'),
    t('subject.literature'),
    t('subject.psychology'),
    t('subject.sociology'),
    t('subject.history'),
    t('subject.mathematics'),
    t('subject.science'),
    t('subject.law'),
    t('subject.medicine'),
    t('subject.other')
  ];

  const academicLevels = [
    { value: 'high-school', label: t('pricing.calculator.level.highSchool'), basePrice: 300 },
    { value: 'undergraduate', label: t('pricing.calculator.level.undergraduate'), basePrice: 450 },
    { value: 'graduate', label: t('pricing.calculator.level.graduate'), basePrice: 625 },
    { value: 'phd', label: t('pricing.calculator.level.phd'), basePrice: 875 }
  ];

  const deadlines = [
    { value: '24h', label: t('pricing.calculator.deadline.24h'), multiplier: 1.5 },
    { value: '48h', label: t('pricing.calculator.deadline.48h'), multiplier: 1.3 },
    { value: '3days', label: t('pricing.calculator.deadline.3days'), multiplier: 1.2 },
    { value: '1week', label: t('pricing.calculator.deadline.1week'), multiplier: 1.1 },
    { value: '2weeks', label: t('pricing.calculator.deadline.2weeks'), multiplier: 1.0 }
  ];

  const calculatePrice = () => {
    if (!service || !academicLevel || !pages) return 0;

    const level = academicLevels.find(l => l.value === academicLevel);
    const deadlineMultiplier = deadlines.find(d => d.value === deadline)?.multiplier || 1;
    
    if (!level) return 0;

    let basePrice = level.basePrice;
    
    // Service-specific adjustments
    const serviceMultipliers: { [key: string]: number } = {
      [t('feature.thesisWriting')]: 1.5,
      [t('feature.dissertationHelp')]: 1.8,
      [t('feature.researchPublication')]: 2.0,
      [t('feature.onlineTeaching')]: 1.3,
      [t('feature.plagiarismRemoval')]: 0.7,
      [t('feature.paperPreparation')]: 0.8
    };

    const serviceMultiplier = serviceMultipliers[service] || 1;
    
    // Subject complexity adjustments
    const subjectMultipliers: { [key: string]: number } = {
      [t('subject.medicine')]: 1.3,
      [t('subject.law')]: 1.2,
      [t('subject.engineering')]: 1.2,
      [t('subject.computerScience')]: 1.1,
      [t('subject.mathematics')]: 1.1
    };

    const subjectMultiplier = subjectMultipliers[subject] || 1;

    // Custom scaling: 1 page = base price, 10 pages = 5x base price
    // Formula: basePrice * (1 + (pages - 1) * 4/9) to get exactly 5x at 10 pages
    const pageMultiplier = 1 + ((pages - 1) * (4/9));
    const totalPrice = basePrice * pageMultiplier * serviceMultiplier * subjectMultiplier * deadlineMultiplier;
    return Math.round(totalPrice);
  };

  const estimatedPrice = calculatePrice();

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-center mb-6 ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
        <Calculator className="h-8 w-8 text-blue-700" />
        <h3 className="text-2xl font-bold text-gray-900">{t('pricing.calculator.title')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricing.calculator.serviceType')} *
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('pricing.calculator.selectService')}</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricing.calculator.subjectArea')}
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('pricing.calculator.selectSubject')}</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricing.calculator.academicLevel')} *
          </label>
          <select
            value={academicLevel}
            onChange={(e) => setAcademicLevel(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('pricing.calculator.selectLevel')}</option>
            {academicLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label} ({formatPrice(level.basePrice.toString())}/{t('unit.page')})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricing.calculator.deadline')}
          </label>
          <select
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('pricing.calculator.selectDeadline')}</option>
            {deadlines.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label} {d.multiplier > 1 && `(+${Math.round((d.multiplier - 1) * 100)}%)`}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('pricing.calculator.pages')} *
          </label>
          <input
            type="number"
            min="1"
            max="500"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value) || 1)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('pricing.calculator.enterPages')}
          />
        </div>
      </div>

      {/* Price Display */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('pricing.calculator.estimatedPrice')}</h4>
            <p className="text-sm text-gray-600">
              {service && academicLevel && pages ? 
                `${service} • ${academicLevels.find(l => l.value === academicLevel)?.label} • ${pages} ${pages > 1 ? t('unit.pages') : t('unit.page')}` :
                t('pricing.calculator.fillRequired')
              }
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-3xl font-bold text-blue-700">
              <span>{estimatedPrice > 0 ? formatPrice(estimatedPrice.toString()) : '0'}</span>
            </div>
            {estimatedPrice > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {formatPrice((estimatedPrice / pages).toFixed(2))} {t('unit.per')} {t('unit.page')} ({t('unit.average')})
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
          {t('pricing.calculator.disclaimer')}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          {t('common.getQuote')}
        </button>
      </div>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        source="Pricing Calculator"
      />
    </div>
  );
};

export default PricingCalculator;