/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagram: '#E4405F',
        twitter: '#1DA1F2',
        linkedin: '#0A66C2',
        whatsapp: '#25d366',
      }
    }
  },
  plugins: [],
  darkMode: "class",
};
