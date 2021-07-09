const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        blk: "#000",
        wht: "#FFF",
        royal: "#10091b",
        kingFish: "#5e2981",
        sunGlo: "#bf6854",
        chileanFire: "#ff7400",
        candyPink: "#d96c80",
        twitterBlue: "#1ca1f1",
        // nuxt-green
        caribGreen: "#00c48e",
        elfGreen: "#108774",
        // laravel - php
        laravel: "#ff2d20",
        "gray-900": "#18191a",
        "gray-800": "#212324",
        "gray-700": "#2F3133",
        "gray-600": "#404345",
        "gray-500": "#55585A",
        "gray-400": "#797B7C",
        "gray-300": "#A7A8A8",
      },
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme("colors.black"),
              '[class~="lead"]': {
                color: theme("colors.black"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.chilean-fire"),
              },
              "ol > li::before": {
                color: theme("colors.black"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.black"),
              },
              hr: {
                // trans - nav - and below
                borderColor: theme("colors.black"),
              },
              blockquote: {
                color: theme("colors.black"),
                borderLeftColor: theme("colors.candy-pink"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.transparent"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.white"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.candy-pink"),
              },
            },
          ],
        },
      }),
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
