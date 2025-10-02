import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Contact() {
  const { t } = useTranslation();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendly Widget */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Termin vereinbaren</h2>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/manuel-mees/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Contact Form and Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">{t('contact.form.submit')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md bg-gray-700 border-gray-600 text-white focus:ring-[#0ea4c4] focus:border-[#0ea4c4]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors font-medium"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>

            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#0ea4c4] mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{t('contact.info.email')}</h3>
                    <a href="mailto:kontakt@panoramic-insight.com" className="text-gray-300 underline">
                      kontakt@panoramic-insight.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#0ea4c4] mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{t('contact.info.phone')}</h3>
                    <p className="text-gray-300">+49 178 1841###</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#0ea4c4] mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">{t('contact.info.address')}</h3>
                    <p className="text-gray-300">
                      Hüttersdorferstraße 43<br />
                      66809 Nalbach<br />
                      Saarland | DE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}