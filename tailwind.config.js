/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF385C",
        secondaryColor: "#FF385C",
        ternaryColor: "#3A4256",
        baseColor: "#FFFFFF",
        dangerColor: "#FF385C",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
