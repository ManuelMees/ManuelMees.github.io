import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import GradientBackground from './components/layout/GradientBackground';
import Home from './pages/Home';
import About from './pages/About';
import OurApproach from './pages/OurApproach';
import ProcessManagement from './pages/ProcessManagement';
import AIWorkshops from './pages/AIWorkshops';
import Innovation from './pages/Innovation';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Documentation from './pages/Documentation';
import DocumentationDetail from './pages/DocumentationDetail';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import VentureClienting from './pages/startups/VentureClienting';
import PersonalMentoring from './pages/startups/PersonalMentoring';
import StartupResources from './pages/startups/StartupResources';
import ResourceDetail from './pages/startups/ResourceDetail';
import KIPotenziale from './pages/startups/KIPotenziale';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import NewArticle from './pages/admin/NewArticle';
import EditArticle from './pages/admin/EditArticle';
import Login from './pages/admin/Login';
import Impressum from './pages/legal/Impressum';
import AGB from './pages/legal/AGB';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';

function App() {
  return (
    <Router>
      <GradientBackground>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-approach" element={<OurApproach />} />
              <Route path="/process-management" element={<ProcessManagement />} />
              <Route path="/ai-workshops" element={<AIWorkshops />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/documentation/:id" element={<DocumentationDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Startup Routes */}
              <Route path="/startups/venture-clienting" element={<VentureClienting />} />
              <Route path="/startups/personal-mentoring" element={<PersonalMentoring />} />
              <Route path="/startups/resources" element={<StartupResources />} />
              <Route path="/startups/resources/:id" element={<ResourceDetail />} />
              <Route path="/startups/ki-potenziale" element={<KIPotenziale />} />
              
              {/* Legal Routes */}
              <Route path="/legal/impressum" element={<Impressum />} />
              <Route path="/legal/agb" element={<AGB />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="new" element={<NewArticle />} />
                <Route path="edit/:id" element={<EditArticle />} />
              </Route>
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </GradientBackground>
    </Router>
  );
}

export default App;