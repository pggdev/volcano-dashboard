import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources";

export const defaultLanguage = "en";
export const supportedLanguages = ["en", "zh-CN"];

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: defaultLanguage,
        supportedLngs: supportedLanguages,
        nonExplicitSupportedLngs: true,
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
