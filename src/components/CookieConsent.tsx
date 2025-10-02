import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true as these are essential
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setSettings({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    Cookies.set('cookie-consent', 'all', { expires: 365 });
    Cookies.set('cookie-settings', JSON.stringify({ necessary: true, analytics: true, marketing: true }), { expires: 365 });
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    setSettings({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    Cookies.set('cookie-consent', 'necessary', { expires: 365 });
    Cookies.set('cookie-settings', JSON.stringify({ necessary: true, analytics: false, marketing: false }), { expires: 365 });
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    Cookies.set('cookie-consent', 'custom', { expires: 365 });
    Cookies.set('cookie-settings', JSON.stringify(settings), { expires: 365 });
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto p-6">
        {!showSettings ? (
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-white">Ihre Privatsphäre ist uns wichtig</h2>
              <button 
                onClick={() => setIsVisible(false)} 
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-300">
              Diese Website verwendet Cookies und andere Tracking-Technologien, um Ihr Surferlebnis zu folgenden Zwecken zu verbessern: um grundlegende Funktionen der Website zu ermöglichen, um ein besseres Erlebnis auf der Website zu bieten, um Ihr Interesse an unseren Produkten und Dienstleistungen zu messen und Marketinginteraktionen zu personalisieren, um Anzeigen zu liefern die für Sie relevanter sind.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleDeclineAll}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-[#0ea4c4] hover:text-[#0ea4c4] transition-colors"
              >
                Ich lehne ab
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-[#0ea4c4] hover:text-[#0ea4c4] transition-colors"
              >
                Einstellungen ändern
              </button>
            </div>
            <div className="text-sm text-gray-400">
              <Link to="/privacy-policy" className="text-[#0ea4c4] hover:text-[#0ea4c4]/80">
                Datenschutzerklärung
              </Link>
              {' | '}
              <Link to="/cookie-policy" className="text-[#0ea4c4] hover:text-[#0ea4c4]/80">
                Cookie-Richtlinie
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-white">Cookie-Einstellungen</h2>
              <button 
                onClick={() => setShowSettings(false)} 
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium text-white">Notwendige Cookies</h3>
                  <p className="text-sm text-gray-400">Diese Cookies sind für die Grundfunktionen der Website erforderlich</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.necessary}
                  disabled
                  className="h-5 w-5 rounded border-gray-600 text-[#0ea4c4] focus:ring-[#0ea4c4]"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium text-white">Analyse Cookies</h3>
                  <p className="text-sm text-gray-400">Helfen uns zu verstehen, wie Besucher mit der Website interagieren</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                  className="h-5 w-5 rounded border-gray-600 text-[#0ea4c4] focus:ring-[#0ea4c4]"
                />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium text-white">Marketing Cookies</h3>
                  <p className="text-sm text-gray-400">Werden verwendet, um Besuchern relevante Werbung zu zeigen</p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                  className="h-5 w-5 rounded border-gray-600 text-[#0ea4c4] focus:ring-[#0ea4c4]"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-[#0ea4c4] hover:text-[#0ea4c4] transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-6 py-2 bg-[#0ea4c4] text-white rounded-md hover:bg-[#0ea4c4]/80 transition-colors"
              >
                Einstellungen speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}