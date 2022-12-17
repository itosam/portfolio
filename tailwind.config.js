/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'body': "#F0F6F6",
      },
      fontFamily: {
        DMSans: [["'DM Sans'", "sans-serif"]],
      },
    },
  },
  plugins: [],
};
