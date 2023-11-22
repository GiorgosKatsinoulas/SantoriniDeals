import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from '../../locales/en.json';
import gr from '../../locales/gr.json';
import useStore from '../../store/store';
import {lang} from '../langString';

const setLanguage = (language: string) => {
  i18n.changeLanguage(language, (err, _) => {
    if (err) {
      console.error('Error changing language:', err);
    }
  });
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
    gr: {translation: gr},
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

useStore.subscribe(() => {
  const selectedLang = useStore.getState().lang.toString();
  if (selectedLang !== lang.none) {
    setLanguage(selectedLang);
  } else {
    setLanguage(RNLocalize.getLocales()[0].languageCode); // get the user's device language
  }
});

export default i18n;
