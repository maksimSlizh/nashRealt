import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import ru from './locales/ru.json'
import pl from './locales/pl.json'


const resources = {
  ru: {
    translation: ru,
  },
  pl: {
    translation: pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Default language
  keySeparator: false, // We do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18n;
