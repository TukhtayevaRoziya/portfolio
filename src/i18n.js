import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translationEN.json";
import translationUZ from "./locales/uz/translationUZ.json";
import translationRU from "./locales/ru/translationRU.json";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEN,
  },
  uz: {
    translation: translationUZ,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang"),
    fallbackLng: "uz",
    debug: false,
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      lookupLocalStorage: "lang",
      lookupCookie: "i18next",
      lookupSessionStorage: "i18nextLng",
    },
    resources,

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
