import { Check, BrainCircuit, Workflow, Lightbulb, LineChart } from 'lucide-react';

const features = [
  {
    title: "KI-gestützte Analytik",
    description: "Nutzen Sie fortschrittliche KI-Algorithmen für umsetzbare Erkenntnisse aus Ihren Daten."
  },
  {
    title: "Prozessautomatisierung",
    description: "Optimieren Sie Abläufe mit intelligenten Automatisierungslösungen."
  },
  {
    title: "Innovationsframework",
    description: "Strukturierter Ansatz zur Förderung und Umsetzung innovativer Ideen."
  },
  {
    title: "Expertenberatung",
    description: "Zugang zu Branchenexperten und maßgeschneiderter Beratung für Ihr Unternehmen."
  }
];

const techStack = [
  {
    name: "ChatGPT OpenAI LLMs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Microsoft Azure AI Platform",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    bgColor: "bg-blue-50",
  },
  {
    name: "LangChain Core + Community",
    logo: "https://python.langchain.com/img/favicon.ico",
    bgColor: "bg-gray-50",
  },
  {
    name: "Microsoft 365 Copilot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
    bgColor: "bg-pink-50",
  },
  {
    name: "Antrophic Claude LMs",
    logo: "https://claude.ai/favicon.ico",
    bgColor: "bg-orange-50",
  },
  {
    name: "Google Gemini LMs",
    logo: "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
    bgColor: "bg-purple-50",
  },
  {
    name: "Google Cloud AI & Machine Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    bgColor: "bg-blue-50",
  },
  {
    name: "Mistral AI Mixtral LMs",
    logo: "https://mistral.ai/favicon.ico",
    bgColor: "bg-orange-50",
  },
  {
    name: "Meta Llama LMs",
    logo: "https://about.meta.com/favicon.ico",
    bgColor: "bg-blue-50",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/favicon.ico",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Microsoft Power Automate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg",
    bgColor: "bg-blue-50",
  },
  {
    name: "Microsoft Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Robocorp",
    logo: "https://logovectordl.com/wp-content/uploads/2020/11/robocorp-logo-vector.png",
    bgColor: "bg-purple-50",
  },
  {
    name: "Google Looker Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Looker.svg",
    bgColor: "bg-blue-50",
  },
  {
    name: "Appsmith",
    logo: "https://www.appsmith.com/favicon.ico",
    bgColor: "bg-orange-50",
  },
  {
    name: "Node-RED",
    logo: "https://nodered.org/favicon.ico",
    bgColor: "bg-red-50",
  },
  {
    name: "KNIME Analytics Platform",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/KNIMELogoTM.svg",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Archi - Modeller",
    logo: "https://www.archimatetool.com/wp-content/uploads/2018/07/header.png",
    bgColor: "bg-blue-50",
  }
];

export default function OurApproach() {
  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Unser Agiler Ansatz</h1>
          <div className="relative">
            <div className="space-y-6">
              <div className="md:float-right md:ml-8 md:w-1/2 lg:w-[500px] mb-8">
                <img
        src="https://qjlmgicdclmscrwpctue.supabase.co/storage/v1/object/sign/pictures/Grafik%20Lean.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy9HcmFmaWsgTGVhbi5wbmciLCJpYXQiOjE3NDQyOTQzNDYsImV4cCI6MjA1OTY1NDM0Nn0.c1R5gOgnq0AsdqfLdkqQmri3weI7Cke3yj8N5gNcHmc"
                          
                  alt="Design Thinking, Lean Startup, and Agile Process"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
              
              <div className="text-left">
                <p className="text-xl text-gray-300">
                  Entdecken Sie die Tools und Methoden, die den Geschäftserfolg vorantreiben. Unser Ansatz basiert auf einer tiefgehenden Analyse Ihrer Datenströme und Geschäftsprozesse, um passgenaue Lösungen zu entwickeln, die sowohl auf fortschrittlichen als auch auf grundlegenden Methoden aufbauen.
                </p>
                <p className="text-xl text-gray-300 mt-6">
                  Zunächst erfassen wir relevante Daten aus unterschiedlichsten Quellen, überführen diese in strukturierte Datenbanken und bereiten sie so auf, dass sie in intuitiven Dashboards übersichtlich visualisiert werden können. Diese Basismaßnahmen ermöglichen es Ihnen, schnell fundierte Entscheidungen zu treffen und den Status quo Ihres Unternehmens in Echtzeit zu überwachen.
                </p>
                <p className="text-xl text-gray-300 mt-6">
                  Dabei setzen wir nicht ausschließlich auf komplexe High-End-Algorithmen, sondern kombinieren fortschrittliche Machine-Learning-Verfahren mit einfachen, effektiven Kernmethoden. In Szenarien, in denen detaillierte prädiktive Analysen erforderlich sind, kommen moderne KI-Technologien zum Einsatz. Gleichzeitig legen wir großen Wert auf den direkten Zugang zu den Daten: Die manuelle Erfassung, Speicherung in leistungsfähigen Datenbanken und die anschauliche Darstellung in Dashboards stehen dabei ebenso im Fokus. So können Routineprozesse automatisiert, manuelle Tätigkeiten reduziert und Einsichten aus den Daten nachhaltig genutzt werden.
                </p>
                <p className="text-xl text-gray-300 mt-6">
                  Unser strukturiertes Innovationsframework ergänzt diesen datenbasierten Ansatz, indem es systematisch neue Ideen generiert und bewertet. Durch regelmäßige Workshops, Feedback-Runden und gezielte Expertenberatung wird sichergestellt, dass sowohl technologische als auch strategische Maßnahmen passgenau an den Bedürfnissen Ihres Unternehmens ausgerichtet sind. Unser interdisziplinäres Team begleitet Sie von der ersten Analysephase bis zur finalen Umsetzung, fördert den digitalen Wandel in Ihrer Organisation und schafft so langfristige Wettbewerbsvorteile.
                </p>
                {/*zweistes bild */}
        <div className="mx-auto mb-8 md:w-1/2 lg:w-[500px]">
  <img
    src="https://qjlmgicdclmscrwpctue.supabase.co/storage/v1/object/sign/pictures/2149126945.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwaWN0dXJlcy8yMTQ5MTI2OTQ1LmpwZyIsImlhdCI6MTc0NTQwMzQwMSwiZXhwIjoyMDYwNzYzNDAxfQ.cOU6-0MAobeyW2HxYyvDXLVgDdDGpiUdVfXzlDzjtPc"
    alt="Dashboard visualization"
    className="w-full rounded-xl shadow-xl"
  />
</div>
             
              
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#0ea4c4]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-300 ml-9">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Unsere Open-Source Technologien</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech,index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                {tech.logo ? (
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${tech.bgColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 p-2`}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <BrainCircuit className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
                  </div>
                )}
                <h3 className="text-white text-center font-medium text-sm sm:text-base">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}