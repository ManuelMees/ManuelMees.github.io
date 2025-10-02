import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { de } from './locales/de';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: {
        translation: de
      }
    },
    lng: 'de', // Set German as default
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;