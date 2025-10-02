import { Rocket, Puzzle, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Innovation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-6">{t('pages.innovation.title')}</h1>
          <p className="text-xl text-gray-300">
            {t('pages.innovation.subtitle')}
          </p>
        </div>

        {/* Video Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-10 max-w-5xl mx-auto">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              src="https://qjlmgicdclmscrwpctue.supabase.co/storage/v1/object/sign/pictures/Innovation_Moment.gif?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9Jbm5vdmF0aW9uX01vbWVudC5naWYiLCJpYXQiOjE3NDQ2MjY5NjksImV4cCI6MjA1OTk4Njk2OX0.qiyVgM_j0742bM1CrL71GCPvtidJkqD06oYOzt_VNLg"
              allow="autoplay"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
            ></iframe>
            
          </div>
          <div className="max-w-xl text-center lg:text-left">
                <p className="text-xl text-gray-50">
                  Unser Ziel ist es, gemeinsam mit Ihnen neue Ideen zu entwickeln. Dies bedeutet Ihre Experties und Domainenwissen ist gefragt. Einen strukturierten Innovationsprozess zu etablieren benötigt Zeit und passiert nicht von Heute auf Morgen. Somit begleiten wir Sie Schritt-für-Schritt, um kontinuierlich Feedback von potentizellen Kunden zu erhalten. 
                </p>
            </div>
        </div>

             
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl">
            <Rocket className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.innovation.sections.strategy.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.innovation.sections.strategy.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Puzzle className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.innovation.sections.design.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.innovation.sections.design.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Target className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.innovation.sections.implementation.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.innovation.sections.implementation.description')}
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl">
            <Users className="h-12 w-12 text-[#0ea4c4] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('pages.innovation.sections.culture.title')}
            </h3>
            <p className="text-gray-300">
              {t('pages.innovation.sections.culture.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}