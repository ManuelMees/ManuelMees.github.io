import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12">{t('legal.impressum.title')}</h1>

        <div className="space-y-8">
          {/* Company Information */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.impressum.companyInfo.title')}</h2>
            <div className="space-y-2 text-gray-300">
              <p>{t('legal.impressum.companyInfo.name')}</p>
              <p>{t('legal.impressum.companyInfo.address')}</p>
              <p>{t('legal.impressum.companyInfo.city')}</p>
              <p>{t('legal.impressum.companyInfo.country')}</p>
              <p>Email: {t('legal.impressum.companyInfo.email')}</p>
              <p>Tel: {t('legal.impressum.companyInfo.phone')}</p>
            </div>
          </div>

          {/* Management */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.impressum.management.title')}</h2>
            <p className="text-gray-300">{t('legal.impressum.management.managing_director')}</p>
          </div>

          {/* Registration */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.impressum.registration.title')}</h2>
            <div className="space-y-2 text-gray-300">
              <p>{t('legal.impressum.registration.court')}</p>
              <p>{t('legal.impressum.registration.number')}</p>
              <p>{t('legal.impressum.registration.vat_id')}</p>
            </div>
          </div>

          {/* Responsibility */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.impressum.responsibility.title')}</h2>
            <div className="space-y-2 text-gray-300">
              <p>{t('legal.impressum.responsibility.name')}</p>
              <p>{t('legal.impressum.responsibility.address')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}