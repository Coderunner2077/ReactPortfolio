import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";
import yaml from "js-yaml";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .use(Backend)
    .init({ //@ts-ignore
        whitelist: ["fr", "en"],
        nonExplicitWhitelist: true,
        load: "languageOnly",
        fallbackLng: {
            'fr-FR': ['fr'],
            'default': ['en']
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        ns: ["common"],
        defaultNS: "common",
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.yaml',
            parse: function (data) { return yaml.load(data) },
        },
    });

export default i18n;