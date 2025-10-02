import { BrainCircuit, Workflow, Lightbulb, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Workflow,
      title: t('services.processManagement'),
      description: t('services.processManagementDesc'),
    },
    {
      icon: BrainCircuit,
      title: t('services.aiWorkshops'),
      description: t('services.aiWorkshopsDesc'),
    },
    {
      icon: Lightbulb,
      title: t('services.innovationService'),
      description: t('services.innovationServiceDesc'),
    },
    {
      icon: LineChart,
      title: t('services.digitalTransformation'),
      description: t('services.digitalTransformationDesc'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">{t('services.title')}</h2>
          <p className="mt-4 text-xl text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-[#0ea4c4] transition-all duration-300 h-full">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg text-[#0ea4c4] group-hover:bg-gray-700 transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}