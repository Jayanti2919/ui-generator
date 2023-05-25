/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#162434" ,
        secondary: "#D9D9D9",
        tertiary: "#B0A8A8",
      }
    },
  },
  plugins: [],
}