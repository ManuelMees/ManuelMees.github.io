import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    onClose();
    setActiveMenu(null);
  };

  if (!mounted) return null;

  return (
    <div className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="fixed inset-0 bg-[#66A8C2] backdrop-blur-sm">
        <div className="min-h-screen flex flex-col overflow-y-auto bg-[#66A8C2]/95">
          {/* Main Navigation */}
          <div className="flex-1 px-4 py-4">
            <nav className="space-y-2">
              {/* Main Links */}
              <Link 
                to="/about" 
                className="block w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                {t('nav.about')}
              </Link>
              
              <Link 
                to="/our-approach" 
                className="block w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                Unser Agiler Ansatz
              </Link>

              {/* Services Menu */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu('services')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                >
                  <span>{t('nav.services')}</span>
                  {activeMenu === 'services' ? (
                    <ChevronDown className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-white" />
                  )}
                </button>
                {activeMenu === 'services' && (
                  <div className="mt-1 py-2 px-4 bg-black/20 rounded-lg">
                    <Link
                      to="/process-management"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('services.processManagement')}
                    </Link>
                    <Link
                      to="/ai-workshops"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('services.aiWorkshops')}
                    </Link>
                    <Link
                      to="/innovation"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      Innovation Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Startups Menu */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu('startups')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                >
                  <span>{t('nav.startups')}</span>
                  {activeMenu === 'startups' ? (
                    <ChevronDown className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-white" />
                  )}
                </button>
                {activeMenu === 'startups' && (
                  <div className="mt-1 py-2 px-4 bg-black/20 rounded-lg">
                    <Link
                      to="/startups/venture-clienting"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('startups.ventureClienting')}
                    </Link>
                    <Link
                      to="/startups/personal-mentoring"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('startups.personalMentoring')}
                    </Link>
                    <Link
                      to="/startups/resources"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('startups.resources')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Menu */}
              <div className="relative">
                <button
                  onClick={() => toggleMenu('resources')}
                  className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                >
                  <span>{t('nav.resources')}</span>
                  {activeMenu === 'resources' ? (
                    <ChevronDown className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-white" />
                  )}
                </button>
                {activeMenu === 'resources' && (
                  <div className="mt-1 py-2 px-4 bg-black/20 rounded-lg">
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('resources.blog')}
                    </Link>
                    <Link
                      to="/case-studies"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('resources.caseStudies')}
                    </Link>
                    <Link
                      to="/documentation"
                      className="block px-4 py-2 text-lg text-white hover:bg-black/20 rounded-lg transition-colors"
                      onClick={handleLinkClick}
                    >
                      {t('resources.documentation')}
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/pricing" 
                className="block w-full px-4 py-3 text-lg font-medium text-white bg-black/10 hover:bg-black/20 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                {t('nav.pricing')}
              </Link>
            </nav>
          </div>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-white/20">
            <Link 
              to="/contact" 
              className="block w-full bg-[#0ea4c4] text-white px-6 py-3 rounded-lg hover:bg-[#0ea4c4]/80 transition-colors font-medium text-center text-lg shadow-lg"
              onClick={handleLinkClick}
            >
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}