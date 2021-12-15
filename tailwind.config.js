const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      // primary: "#D6D610",
      primary: "#F7AB0A",
      background: "#1B1B1B",
      black: "#03090f",
      transparent: "transparent",
      white: colors.white,
      gray: colors.coolGray,
      yellow: colors.amber,
      blue: colors.blue,
    },
    fontFamily: {
      display: ["sofia-pro", "sans-serif"],
      body: ["proxima-nova", "sans-serif"],
      mono: ["Fira Code", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "12rem",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
