import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './ui/Logo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold text-white">Panoramic Insight</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering businesses through innovative solutions, strategic thinking, and cutting-edge technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/our-approach" className="hover:text-[#0ea4c4] transition-colors">Unser Agiler Ansatz</Link></li>
              <li><Link to="/about" className="hover:text-[#0ea4c4] transition-colors">Über Uns</Link></li>
              <li><Link to="/contact" className="hover:text-[#0ea4c4] transition-colors">Kontakt</Link></li>
              <li><Link to="/legal/impressum" className="hover:text-[#0ea4c4] transition-colors">{t('footer.legal.impressum')}</Link></li>
              <li><Link to="/legal/agb" className="hover:text-[#0ea4c4] transition-colors">{t('footer.legal.agb')}</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#0ea4c4] transition-colors">Datenschutzerklärung</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#0ea4c4] transition-colors">Cookie-Richtlinie</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            <ul className="mt-4 space-y-2">
              <li>kontakt@panoramic-insight.com</li>
              <li>+49 178184192#</li>
              <li>Hüttersdorferstraße 43</li>
              <li>66809 Nalbach | DE</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Panoramic Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}