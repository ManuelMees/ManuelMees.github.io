import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isStartupsOpen, setIsStartupsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo />
            <span className="text-2xl font-bold text-white tracking-tight">Panoramic Insight</span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-[#0ea4c4] font-medium transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/our-approach" className="text-white hover:text-[#0ea4c4] font-medium transition-colors">
              Unser Agiler Ansatz
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-[#0ea4c4] font-medium transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>{t('nav.services')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-1">
                  <Link to="/process-management" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('Process Management')}
                  </Link>
                  <Link to="/ai-workshops" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('AI-Workshops')}
                  </Link>
                  <Link to="/innovation" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('Innovation Management')}
                  </Link>
                </div>
              </div>
            </div>

            {/* For Startups Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-[#0ea4c4] font-medium transition-colors"
                onClick={() => setIsStartupsOpen(!isStartupsOpen)}
              >
                <span>{t('nav.startups')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isStartupsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-1">
                  <Link to="/startups/venture-clienting" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('startups.ventureClienting')}
                  </Link>
                  <Link to="/startups/personal-mentoring" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('startups.personalMentoring')}
                  </Link>
                  <Link to="/startups/resources" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('startups.resources')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-[#0ea4c4] font-medium transition-colors"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <span>{t('nav.resources')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="py-1">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('resources.blog')}
                  </Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('resources.caseStudies')}
                  </Link>
                  <Link to="/documentation" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    {t('resources.documentation')}
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-white hover:text-[#0ea4c4] font-medium transition-colors">
              {t('nav.pricing')}
            </Link>
          </div>

          {/* Right side: CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              mailto="Email" 
              className="bg-[#0ea4c4] text-white px-6 py-2.5 rounded-md hover:bg-[#0ea4c4]/80 transition-colors font-medium"
            >
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#0ea4c4] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
}