import { ArrowRight, Target, Users, Rocket, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function VentureClienting() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Target,
      title: t('startups.benefits.marketValidation'),
      description: t('startups.benefits.marketValidationDesc')
    },
    {
      icon: Users,
      title: t('startups.benefits.network'),
      description: t('startups.benefits.networkDesc')
    },
    {
      icon: Rocket,
      title: t('startups.benefits.growth'),
      description: t('startups.benefits.growthDesc')
    },
    {
      icon: LineChart,
      title: t('startups.benefits.revenue'),
      description: t('startups.benefits.revenueDesc')
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t('startups.ventureClienting')}</h1>
          <p className="text-xl text-gray-300">
            {t('startups.whatIs')}
          </p>
          <p className="text-xl text-gray-300 mt-4">
            {t('startups.whatIsDescription')}
          </p>
          
          <h2 className="text-4xl font-bold text-white mb-6 mt-12">{t('startups.whyInteresting')}</h2>
          <p className="text-xl text-gray-300">
            {t('startups.whyInterestingDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-gray-800 p-8 rounded-xl">
              <benefit.icon className="h-12 w-12 text-[#0ea4c4] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
          >
            {t('nav.getStarted')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}