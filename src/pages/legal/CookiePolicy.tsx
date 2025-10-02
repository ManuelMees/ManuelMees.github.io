import { useTranslation } from 'react-i18next';

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie-Richtlinie</h1>
        
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Was sind Cookies?</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Computer oder 
                mobilen Gerät gespeichert werden. Sie werden häufig verwendet, um Websites funktionsfähig 
                oder effizienter zu machen sowie um Websitebetreibern Informationen zu liefern.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Wie verwenden wir Cookies?</h2>
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl font-medium text-white mt-6 mb-2">Notwendige Cookies</h3>
              <p>
                Diese Cookies sind für das Funktionieren der Website unerlässlich und können in unseren 
                Systemen nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von 
                Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem 
                Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen.
              </p>

              <h3 className="text-xl font-medium text-white mt-6 mb-2">Analyse-Cookies</h3>
              <p>
                Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die 
                Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche 
                Seiten am beliebtesten und am wenigsten beliebt sind und wie sich Besucher auf der 
                Website bewegen.
              </p>

              <h3 className="text-xl font-medium text-white mt-6 mb-2">Marketing-Cookies</h3>
              <p>
                Diese Cookies können von unseren Werbepartnern über unsere Website gesetzt werden. Sie 
                können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu 
                erstellen und Ihnen relevante Werbung auf anderen Websites zu zeigen.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Kontrolle über Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit anpassen, indem Sie auf die Schaltfläche 
                "Cookie-Einstellungen" am unteren Rand der Website klicken. Sie können auch Ihren Browser 
                so einstellen, dass er alle oder einige Browser-Cookies ablehnt. Beachten Sie jedoch, 
                dass die Website ohne Cookies möglicherweise nicht ordnungsgemäß funktioniert.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Weitere Informationen</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Wenn Sie Fragen zu unserer Verwendung von Cookies und ähnlichen Technologien haben, 
                kontaktieren Sie uns bitte unter:
              </p>
              <p>
                Panoramic Insight<br />
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