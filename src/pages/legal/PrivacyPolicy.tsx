import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Wir bei Panoramic Insight legen größten Wert auf den Schutz Ihrer personenbezogenen Daten. 
                Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung 
                personenbezogener Daten auf unserer Website.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Allgemeine Hinweise</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
              
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Datenerfassung auf unserer Website</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-medium text-white mt-6 mb-2">Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p>
                Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung 
                von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie 
                diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website 
                wiederzuerkennen.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Analyse und Tracking Tools</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Wir nutzen verschiedene Analyse- und Tracking-Tools, um die Nutzung unserer Website 
                sicherzustellen und unser Angebot zu optimieren.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
            <div className="space-y-4 text-gray-300">
              <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Recht auf Auskunft</li>
                <li>Recht auf Berichtigung oder Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Kontakt</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei 
                Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p>
                Panoramic Insight <br />
                Hüttersdorferstraße 43<br />
                66809 Nalbach<br />
                Deutschland<br />
                Email: kontakt@panoramic-insight.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}