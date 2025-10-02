import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-white hover:text-[#0ea4c4] transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5" />
      <span>{i18n.language === 'en' ? 'DE' : 'EN'}</span>
    </button>
  );
}