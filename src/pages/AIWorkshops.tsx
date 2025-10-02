import { BrainCircuit, Users, Lightbulb, Trophy, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AIWorkshops() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t('pages.aiWorkshops.title')}</h1>
          <p className="text-xl text-gray-300">
            {t('pages.aiWorkshops.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl">
            <BrainCircuit className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.aiWorkshops.sections.fundamentals.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.aiWorkshops.sections.fundamentals.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Users className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.aiWorkshops.sections.teamTraining.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.aiWorkshops.sections.teamTraining.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Lightbulb className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.aiWorkshops.sections.practical.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.aiWorkshops.sections.practical.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Trophy className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.aiWorkshops.sections.certification.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.aiWorkshops.sections.certification.description')}
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