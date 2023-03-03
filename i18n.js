import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./public/locales/en/common.json";
import translationTR from "./public/locales/tr/common.json";

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
    lng:
      typeof window !== "undefined"
        ? window.localStorage.getItem("i18nextLng")
        : "TR",
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
