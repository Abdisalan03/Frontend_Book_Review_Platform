/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FB635D",
        secondaryColor: "#FFC300",
        txtColor: "#222",
      }
    },
  },
  plugins: [],
}

