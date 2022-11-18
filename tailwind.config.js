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
        secondaryColor: "rgba(255, 56, 92, 0.8)",
        ternaryColor: "#3A4256",
        baseColor: "#FFFFFF",
        dangerColor: "#FF385C",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
