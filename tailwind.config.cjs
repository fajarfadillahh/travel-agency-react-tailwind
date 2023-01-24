/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        green: {
          600: "#14505c",
        },
      },
      lineHeight: {
        title: "150%",
        text: "170%",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
