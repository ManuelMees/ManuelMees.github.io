import { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function KIPotenziale() {
  const [activeTab, setActiveTab] = useState('deutschland');

  // KI-Nutzung in Deutschland nach Branchen
  const kiNutzungData = [
    { name: 'Verarbeitendes Gewerbe', value: 31 },
    { name: 'Durchschnitt alle Branchen', value: 27 },
  ];

  // Hemnisse bei KI-Implementierung
  const hemnisseData = [
    { name: 'Sicherheitsbedenken', wert: 52 },
    { name: 'Mangel an KI-Verständnis', wert: 40 },
    { name: 'Unzureichende Gesetzgebung', wert: 38 },
    { name: 'Angst vor Arbeitsplatzverlusten', wert: 38 },
    { name: 'Mangel an Investitionen', wert: 38 },
    { name: 'Mangel an politischem Diskurs', wert: 38 },
  ];

  // KI-Einsatz international
  const kiInternationalData = [
    { name: 'China', wert: 94 },
    { name: 'USA', wert: 46 },
    { name: 'DACH-Region', wert: 20 },
  ];

  // Chancen von KI
  const chancenData = [
    { name: 'KI als Chance in der Industrie', wert: 47 },
    { name: 'Materialdisposition', wert: 51 },
    { name: 'Maschinenservice/Wartung', wert: 44 },
  ];

  // Potenziale für das Saarland
  const saarlandPotenziale = [
    { id: 1, title: 'Wettbewerbsfähigkeit steigern', 
      description: 'Durch effizientere Produktionsprozesse und innovative Produkte' },
    { id: 2, title: 'Neue Arbeitsplätze schaffen', 
      description: 'Im Bereich KI-Entwicklung und -Anwendung' },
    { id: 3, title: 'Investitionen anziehen', 
      description: 'In KI-basierte Technologien und Unternehmen' },
    { id: 4, title: 'Forschungskooperation stärken', 
      description: 'Zusammenarbeit zwischen Forschung und Industrie' },
  ];

  // Anwendungsbereiche
  const anwendungsbereiche = [
    { id: 1, title: 'Effizienzsteigerung', description: 'Optimierung von Produktionsprozessen' },
    { id: 2, title: 'Predictive Maintenance', description: 'Vorausschauende Wartung zur Reduzierung von Ausfallzeiten' },
    { id: 3, title: 'Qualitätskontrolle', description: 'Automatisierte Fehlererkennung und -prävention' },
    { id: 4, title: 'Produktionsplanung', description: 'Optimierte Ressourcenallokation durch Datenanalyse' },
    { id: 5, title: 'Neue Geschäftsmodelle', description: 'Datengetriebene Services und Produkte' },
    { id: 6, title: 'Individualisierte Produktion', description: 'Flexible Fertigung nach Kundenwunsch' },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">KI-Potenziale im Maschinenbau und in der Produktion</h1>
        
        <div className="mb-6">
          <div className="flex space-x-4 mb-4 justify-center">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'deutschland' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab('deutschland')}
            >
              Deutschland
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'saarland' ? 'bg-[#0ea4c4] text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab('saarland')}
            >
              Saarland
            </button>
          </div>
          
          {activeTab === 'deutschland' && (
            <div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold text-white mb-4">KI-Potenzial für Deutschland</h2>
                <p className="text-lg font-semibold text-[#0ea4c4]">Geschätzte Bruttowertschöpfung durch KI: 330 Milliarden Euro</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-2">KI-Nutzung in Deutschland 2024</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={kiNutzungData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({name, value}) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {kiNutzungData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-2">KI-Einsatz international (in %)</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={kiInternationalData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis domain={[0, 100]} stroke="#fff" />
                        <Tooltip />
                        <Bar dataKey="wert" fill="#0ea4c4" name="Prozent der Unternehmen" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-2">Hemmnisse bei KI-Implementierung (in %)</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={hemnisseData}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 60]} stroke="#fff" />
                        <YAxis dataKey="name" type="category" width={80} stroke="#fff" />
                        <Tooltip />
                        <Bar dataKey="wert" fill="#0ea4c4" name="Prozent der Befragten" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-2">Chancen durch KI (in %)</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chancenData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#fff" />
                        <YAxis domain={[0, 60]} stroke="#fff" />
                        <Tooltip />
                        <Bar dataKey="wert" fill="#0ea4c4" name="Prozent der Befragten" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'saarland' && (
            <div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold text-white mb-4">KI-Potenziale für das Saarland</h2>
                <p className="mb-2 italic text-gray-300">Hinweis: Keine spezifischen Daten für das Saarland verfügbar. Die dargestellten Potenziale basieren auf allgemeinen Trends und der industriellen Struktur des Saarlandes.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-4">Potenziale für das Saarland</h3>
                  <ul className="space-y-4">
                    {saarlandPotenziale.map(item => (
                      <li key={item.id} className="border-l-4 border-[#0ea4c4] pl-4">
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-white mb-4">Anwendungsbereiche von KI im Maschinenbau</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {anwendungsbereiche.map(item => (
                      <div key={item.id} className="bg-gray-700 p-3 rounded-lg">
                        <h4 className="font-bold text-[#0ea4c4]">{item.title}</h4>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-white mb-4">Handlungsempfehlungen für das Saarland</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-[#0ea4c4]">
                    <h4 className="font-bold text-white">Gezielte Förderprogramme</h4>
                    <p className="text-gray-300">Auf die Bedürfnisse der lokalen KMUs zugeschnittene Initiativen</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-[#0ea4c4]">
                    <h4 className="font-bold text-white">KI-Pilotprojekte</h4>
                    <p className="text-gray-300">Förderung und Unterstützung bei der praktischen Implementierung</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-[#0ea4c4]">
                    <h4 className="font-bold text-white">Weiterbildungsinitiativen</h4>
                    <p className="text-gray-300">Qualifizierung von Mitarbeitern im Bereich KI</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}