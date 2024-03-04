/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1140px",
    },
    extend: {
      colors: {
        primaryColor: "#FFFFFF",
        secondaryText: "#050038",
        bgSecondary: "#F5F5F7",
        borderColor: "#F0F0F0",
        blue: "#4262FF",
        yellow: "#FFC247",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        footerBg: "#02033B",
        darkColorLight: "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "10px",
        md: "30px",
      },
    },
    fontFamily: {
      helvetica: ["helvetica", "Roboto"],
      inter: ["Inter", "Roboto"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
