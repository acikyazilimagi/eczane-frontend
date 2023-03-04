import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import translationEN from "./public/locales/en/common.json";
import translationTR from "./public/locales/tr/common.json";
import { LANGUAGE_KEY_LOCAL_STORAGE } from "./src/utils/constants";
import { getLocalStorage } from "./src/utils/hooks";

const resources = {
  EN: {
    common: translationEN,
  },
  TR: {
    common: translationTR,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "TR",
    localeDetection: false,
    lng: getLocalStorage(LANGUAGE_KEY_LOCAL_STORAGE, "TR"),
    debug: false,
    preload: true,
    returnNull: false,
    ns: ["common"],
    detection: {
      order: ["localStorage", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
