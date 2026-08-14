/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      colors: {
        wedding: {
          bg: "#FFF8F6",
          pink: "#E8C5C7",
          rose: "#D9A9AD",
          brown: "#6B5147",
          dark: "#3E302B",
          cream: "#F5EDE7",
          gold: "#B99A72"
        }
      }
    }
  },
  plugins: []
};
