import { ArrowRight, BarChart2, RefreshCcw, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProcessManagement() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t('pages.processManagement.title')}</h1>
          <p className="text-xl text-gray-300">
            {t('pages.processManagement.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl">
            <Target className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.processManagement.sections.analysis.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.processManagement.sections.analysis.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <RefreshCcw className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.processManagement.sections.optimization.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.processManagement.sections.optimization.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <BarChart2 className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.processManagement.sections.tracking.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.processManagement.sections.tracking.description')}
            </p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
          >
            {t('nav.getStarted')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}