import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import zh from "./locales/zh/translation.json";
import zhCn from "./locales/zh-cn/translation.json";
import zhTw from "./locales/zh-tw/translation.json";
import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      // zh: {
      //   translation: zh,
      // },
      "zh-CN": {
        translation: zhCn,
      },
      "zh-TW": {
        translation: zhTw,
      },
      en: {
        translation: en,
      },
      ja: {
        translation: ja,
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
