import { useTranslation } from 'react-i18next';

export default function AGB() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6">{t('legal.agb.title')}</h1>
        <p className="text-gray-400 mb-12">{t('legal.agb.lastUpdated')}</p>

        <div className="space-y-8">
          {/* General Provisions */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.general.title')}</h2>
            {/*<p className="text-gray-300">{t('legal.agb.sections.general.content')}</p>*/}
            <p>
                Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der von der Panoramic Insight angebotenen Dienstleistungen. Diese AGB gelten für alle Verträge zwischen Panoramic Insight, im Folgenden "Berater" genannt, und den Auftraggebern über Beratungs- und Workshop-Dienstleistungen in den Bereichen Innovationsmanagement, Data Science, Künstliche Intelligenz und Produktionsoptimierung.
              </p>
          </div>

          {/* Services */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.services.title')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.services.content')}</p>*/}
            <p>
               Der Berater erbringt Dienstleistungen gemäß individueller Vereinbarung mit dem Auftraggeber. Der genaue Leistungsumfang wird in einem separaten Angebot oder Vertrag festgelegt. Ein Vertrag kommt durch die schriftliche Annahme des Angebots durch den Auftraggeber zustande. Angebote des Beraters sind freibleibend und unverbindlich.
              </p>
          </div>

          {/* Pricing */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.pricing.title')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.pricing.content')}</p>*/}
            <p>
               Die Vergütung richtet sich nach dem individuell vereinbarten Honorar. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
              </p>
          </div>

          {/* Reisekosten und Spesen */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('Reisekosten und Spesen')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.pricing.content')}</p>*/}
            <p>
               Reisekosten und Spesen, die im Zusammenhang mit der Auftragserfüllung entstehen, werden dem Auftraggeber gemäß vorheriger Absprache in Rechnung gestellt.
              </p>
          </div>
          
          {/* Cooperation / Mitwirkungspflicht */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('Mitwirkungspflichten des Auftraggebers')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.pricing.content')}</p>*/}
            <p>
               Der Auftraggeber verpflichtet sich, alle zur Durchführung des Auftrags erforderlichen Informationen und Unterlagen rechtzeitig und vollständig zur Verfügung zu stellen. Verzögerungen aufgrund unzureichender Mitwirkung gehen nicht zu Lasten des Beraters.
              </p>
          </div>
          
          {/* Liability */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.liability.title')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.liability.content')}</p>*/}
            <p>
               Der Berater haftet für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Bei leichter Fahrlässigkeit haftet der Berater nur bei Verletzung wesentlicher Vertragspflichten. 
              </p>
          </div>

          {/* Confidentiality */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.confidentiality.title')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.confidentiality.content')}</p>*/}
            <p>
               Beide Parteien verpflichten sich, alle im Rahmen des Vertragsverhältnisses erlangten vertraulichen Informationen geheim zu halten und nicht an Dritte weiterzugeben.
              </p>
          </div>

          {/* Urheberrechte */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('Urheberrechte')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.confidentiality.content')}</p>*/}
            <p>
               Alle im Rahmen der Dienstleistung erstellten Unterlagen und Konzepte bleiben geistiges Eigentum des Beraters, sofern nicht anders vereinbart. Der Auftraggeber erhält ein einfaches, nicht übertragbares Nutzungsrecht.
              </p>
          </div>
          
          {/* Termination */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('legal.agb.sections.termination.title')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.termination.content')}</p>*/}
            <p>
               Die Vertragsdauer ergibt sich aus dem individuellen Vertrag. Eine Kündigung bedarf der Schriftform. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
          </div>
          
            {/* Schlussbestimmungen */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">{t('Schlussbestimmungen')}</h2>
             {/*<p className="text-gray-300">{t('legal.agb.sections.termination.content')}</p>*/}
            <p>
               Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Sitz des Beraters, sofern der Auftraggeber Kaufmann ist. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              
 
          </div>
        </div>
      </div>
    </section>
  );
}