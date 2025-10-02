import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import GradientText from './ui/GradientText';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.title')}{' '}
              <GradientText className="ml-2">{t('hero.subtitle')}</GradientText>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex gap-4">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#66A8C2] text-white rounded-md hover:bg-[#66A8C2]/80 transition-colors">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-6 py-3 border-2 border-[#66A8C2] text-[#66A8C2] rounded-md hover:bg-[#66A8C2] hover:text-white transition-colors">
                {t('hero.cta.secondary')}
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://qjlmgicdclmscrwpctue.supabase.co/storage/v1/object/sign/pictures/businessman-interacting-with-futuristic-graphics.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9idXNpbmVzc21hbi1pbnRlcmFjdGluZy13aXRoLWZ1dHVyaXN0aWMtZ3JhcGhpY3MuanBnIiwiaWF0IjoxNzQ1NDAyODYwLCJleHAiOjIwNjA3NjI4NjB9.bLv2n_deN39ki5GrY684BUJGw_aJhxzMqkrSDa4ZJi0"
                alt="Engineering team analyzing AI data"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://qjlmgicdclmscrwpctue.supabase.co/storage/v1/object/sign/pictures/portrait-engineers-work-hours-job-site.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9wb3J0cmFpdC1lbmdpbmVlcnMtd29yay1ob3Vycy1qb2Itc2l0ZS5qcGciLCJpYXQiOjE3NDU0MDMwNzMsImV4cCI6MjA2MDc2MzA3M30.fsImOue4P-iHu8MTDkg-BS0NbkD_9_AMGJArGLZriOc"
                alt="Smart manufacturing production line"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}