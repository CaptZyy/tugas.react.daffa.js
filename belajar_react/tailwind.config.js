// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jaggedIce: {
          100: "#EEF7FF",
        },
        aliceBlue:{
          100: "#EEF7FF"
        },
        gulfStream:{
          100: "#7AB2B2"
        },
        hippieBlue:{
          100:"#4D869C"
        },
        deepSea:{
          100:"#134B70 "
        },
        sanMarino:{
          100:"#508C9B  "
        },
      },
    },
  },
  plugins: [],
};
