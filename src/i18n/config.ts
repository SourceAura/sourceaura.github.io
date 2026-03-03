import i18n from "astro-i18n-aut";

export default {
  integrations: [
    i18n({
      defaultLocale: "en",
      locales: {
        en: "en",
        es: "es", 
        fr: "fr",
        de: "de",
        it: "it",
        pt: "pt",
        ru: "ru",
        ja: "ja",
        ko: "ko",
        zh: "zh-CN",
        "zh-CN": "zh-CN",
        "zh-TW": "zh-TW",
        ar: "ar",
        hi: "hi",
        th: "th",
        vi: "vi",
        nl: "nl",
        pl: "pl",
        tr: "tr",
        sv: "sv",
        da: "da",
        no: "no",
        fi: "fi",
        he: "he"
      },
      routing: {
        prefixDefaultLocale: false,
        redirectToDefaultLocale: true
      },
      fallback: {
        locale: "en"
      }
    })
  ]
};
