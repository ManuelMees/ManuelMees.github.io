export default function Pricing() {
  const plans = [
    {
      name: "Einführungsworkshop Innovationsmanagement & AI",
      price: "ab 799,00 €",
      period: "einmalig für 8h",
      duration: "8h",
      features: [
        "Grundlagen des Innovationsmanagements",
        "Innovationsstrategien entwickeln",
        "Interaktive Workshops",
        "KI-Integration in Geschäftsprozesse",
        "Praktische KI-Anwendungen",
        "Erfahrungsaustausch & Networking"
      
      ]
    },
    {
      name: "Pilotphase 1-3 Monate",
      price: "ab 2.499,00 €",
      period: "pro monat",
      features: [
        "alles aus dem Einführungsworkshop",
        "Teambuilding für Agile Innovationsentwicklung",
        "max. 15 Teilnnehmer",
        "Intensivworkshops & Strategische Entwicklung",
        "Impulsgeber und Befähigung zum selbstorganisierten Arbeiten",
        "PoC - Entwicklung für Digital Solutions"
      ]
    },
    {
      name: "Expertenphase 6-12 Monate",
      price: "Individuell",
      period: "auf Anfrage",
      features: [
        "alles aus der Pilotphase",
        "langfristige Strategische Ausrichtung",
        "1-2 Organisationseinheiten",
        "Individuelle Entwicklung & Integration",
        "weitere Inhalten nach Absprache "
      ]
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Preisübersicht</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">{plan.name}</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-300">• {feature}</li>
                ))}
              </ul>
              <a
                href="/contact"
                className="block w-full text-center py-2 px-4 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
              >
                Jetzt Anfragen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}