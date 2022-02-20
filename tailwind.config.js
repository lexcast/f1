const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      fontFamily: {
        bungee: ["Bungee Hairline", "cursive"],
      },
      fontSize: {
        "2xs": ".5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
