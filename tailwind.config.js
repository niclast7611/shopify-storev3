/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#fff",
        "secondary-color": "#000",
        "background-color": "#f9f0eb",
        "accent-color": "#554034",
      },
    },
    fontFamily: {
      "fancy-font": [
        "Garamond",
        "Baskerville",
        "Baskerville Old Face",
        "Hoefler Text",
        "Times New Roman",
        "serif",
      ],
    },
  },
  plugins: [],
};
