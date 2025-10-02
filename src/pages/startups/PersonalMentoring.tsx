import { Users, BookOpen, Target, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PersonalMentoring() {
  const mentors = [
    {
      name: "Manuel Mees",
      role: "AI & Innovation Expert",
      image: "https://profile-images.xing.com/images/6307d7371a3f6c6a887eebf06644d15d-3/manuel-mees.1024x1024.jpg",
      expertise: "Artificial Intelligence, Innovation Strategy, Startup Advisor, Digitalization"
    },
    {
      name: "YOU",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300",
      expertise: "Startup Growth, Technology"
    },
    {
      name: "YOU",
      role: "Business Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300",
      expertise: "Sales, Marketing, Business Strategy"
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Find your Mentor</h1>
          <p className="text-xl text-gray-300">
            Persönliche Beratung von erfahrenen Unternehmern und Branchenexperten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{mentor.name}</h3>
                <p className="text-[#0ea4c4] mb-2">{mentor.role}</p>
                <p className="text-gray-300">{mentor.expertise}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
          >
            Kontaktier Uns
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}