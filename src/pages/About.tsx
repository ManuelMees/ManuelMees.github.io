import { Users, Target, Award, Building, Clock, Rocket, Shield, Coins } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Betreute Kunden', value: '500+' },
    { icon: Target, label: 'Abgeschlossene Projekte', value: '1.000+' },
    { icon: Award, label: 'Branchenauszeichnungen', value: '25+' },
    { icon: Building, label: 'Globale Standorte', value: '8' },
  ];

  const team = [
    {
      department: 'Prozessmanagement',
      description: 'Unser Team im Prozessmanagement ist auf Geschäftsprozessoptimierung und Automatisierung spezialisiert. Mit Workshops, Interviews und Feedback-Runden nehmen wir Ihre Abläufe genau unter die Lupe, identifizieren Schwachstellen und entwickeln individuelle Lösungen. Wir kombinieren bewährte Methoden mit digitalen Tools, um Routineaufgaben zu automatisieren und Ihre IT-Landschaft nahtlos zu integrieren. Wir schulen Ihre Mitarbeiter, um Effizienzsteigerungen und Wettbewerbsvorteile zu sichern.',
    },
    {
      department: 'KI & Maschinelles Lernen',
      description: 'Unsere Data Scientists und KI-Spezialisten entwickeln zukunftsweisende Lösungen im Bereich KI & Maschinelles Lernen. In Workshops, Interviews und kurzen Sprintphasen, orientiert an der Lean Startup Methode, erkennen wir rasch Potenziale und setzen moderne Machine-Learning-Modelle ein, um nutzerzentrierte Anwendungen zu realisieren. Mit prädiktiven Analysen integrieren wir innovative Tools in Ihre IT-Umgebung und sichern nachhaltige Wettbewerbsvorteile.',
    },
    {
      department: 'Innovationsstrategie',
      description: 'Unsere strategischen Berater begleiten Ihr Unternehmen bei der digitalen Transformation durch gezieltes Innovationsmanagement und potenzielle Zukunftsplanung. In Workshops, Interviews und agilen Sprints analysieren wir systematisch bestehende Prozesse, identifizieren Innovationspotenziale und entwickeln maßgeschneiderte Strategien. Mithilfe unseres strukturierten Innovationsframeworks fördern wir die Entwicklung digitaler Geschäftsmodelle und schaffen eine innovationsgetriebene Unternehmenskultur. Durch kontinuierliche Bewertung und iterative Anpassung sichern wir nachhaltige Wettbewerbsvorteile und positionieren Ihr Unternehmen als Vorreiter in einem dynamischen Marktumfeld.',
    },
    {
      department: 'Kundenbetreuung',
      description: 'Unsere engagierten Fachleute in der Kundenbetreuung sichern Kundenzufriedenheit und Projekterfolg. Wir legen besonderen Wert darauf, den Wirtschaftsstandort Saarland zu stärken und die Region zukunftsfähig zu machen. Unter dem Motto „Eich bin ach Saarlänna" organisieren wir Workshops, Interviews und fördern Projekte, die von unten nach oben initiiert werden. Diese Bottom-Up-Ansätze erzeugen intrinsische Motivation bei den Mitarbeitern und schaffen nachhaltige Impulse für den wirtschaftlichen Fortschritt in unserer Region. So tragen wir aktiv zur regionalen Wertschöpfung und Zukunftssicherung bei',
    },
  ];

  const offerings = [
    {
      icon: Clock,
      title: "Flexible Zusammenarbeit",
      description: "Zusammenarbeit für 3 bis 24 Monate als freie Mitarbeiter in Ihrem Team."
    },
    {
      icon: Rocket,
      title: "Gewinne Geschwindigkeit",
      description: "Mit bewährte Strategien aus dem beruflichen Kontext erreicht Ihr Unternehmen entscheidende Meilensteine effizienter und vermeidet unnötige Fehler."
    },
    {
      icon: Shield,
      title: "Werde entlastet",
      description: "Als fester Bestandteil deines Teams unterstützt Panoramic Insights Sie 100 % hands-on bei der Umsetzung Ihrer Aufgaben. So werden Teilbereiche entlastet und können sich auf das Wesentliche konzentrieren."
    },
    {
      icon: Coins,
      title: "Faires Vergütungsmodell",
      description: "Wir erhalten ein kleines Fixum und eine Erfolgsbeteiligung – so teilen wir dieselben Interessen und profitieren gemeinsam langfristig vom Erfolg."
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Über Panoramic Insight</h1>
        </div>

        {/* About content with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="text-left">
            <p className="text-xl text-gray-300 mb-6">
              Willkommen bei Panoramic Insights - Ihrem innovativen Partner im digitalen Zeitalter. Wir sind ein junges, dynamisches Unternehmen, das es sich zur Aufgabe gemacht hat, Künstliche Intelligenz, Data Science und Innovationsmanagement einfach, intuitiv und effizient nutzbar zu machen.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Mit einem frischen, zukunftsorientierten Ansatz und modernsten Technologien entwickeln wir maßgeschneiderte Lösungen, die Ihnen helfen, Ihre Produktivität zu steigern und Ihre Wertschöpfung nachhaltig zu optimieren. Ein wesentlicher Bestandteil unseres Erfolgs ist die frühzeitige Einbindung der Mitarbeiter in den gesamten Transformationsprozess.
            </p>
            <p className="text-xl text-gray-300">
              Wir sind überzeugt, dass die Zukunft eines Unternehmens nur dann nachhaltig beeinflusst werden kann, wenn alle Beteiligten von Anfang an ihre Ideen und Perspektiven einbringen. Durch diesen integrativen Ansatz fördern wir nicht nur die Zusammenarbeit und das Verantwortungsbewusstsein innerhalb Ihres Teams, sondern schaffen auch ein Umfeld, in dem innovative Konzepte und strategische Neuerungen gemeinsam erarbeitet und erfolgreich umgesetzt werden.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>

        {/* Das biete ich dir Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Das bieten wir dir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering) => (
              <div key={offering.title} className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <offering.icon className="h-8 w-8 text-[#0ea4c4] mr-4" />
                  <h3 className="text-xl font-semibold text-white">{offering.title}</h3>
                </div>
                <p className="text-gray-300">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Statistics - Commented out but preserved for later use */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gray-800 p-6 rounded-xl text-center">
              <stat.icon className="h-8 w-8 text-[#0ea4c4] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Unsere Bereiche in denen wir unterstützen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((dept) => (
              <div key={dept.department} className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{dept.department}</h3>
                </div>
                <p className="text-gray-300">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}