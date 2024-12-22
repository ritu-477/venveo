/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1366px",
        },
      },

      fontFamily: {
        'testSöhneSchmal': "'testSöhneSchmal', sans-serif",
        'MaisonNeue': "'Maison Neue',sans-serif",
        'maisonLight': "'MaisonNeueLight',sans-serif",
        'maisonMedium': "'MaisonNeueMedium',sans-serif",
        'maisonDemi': "'MaisonNeueDemi',sans-serif",
        'maisonMono': "'MaisonNeueMono',sans-serif",
              },

      colors: {
        'green': "#D2F038",
        'light-gray': "#9DC9CC",
        'dark-green': "#097980",
        'light-green': "#0D99A0",
      },

      fontSize: {
        'custom-sm': "6px",
        'custom-md': "13px",
        'custom-lg': "15px",
        'custom-xl': "22px",
        'custom-2xl': "40px",
        'custom-3xl': "50px",
        'custom-4xl': "80px",
        'custom-5xl': "120px",
      },

      lineHeight: {
        'custom-sm': "7.97px",
        'custom-md': "13px",
        'custom-lg': "15px",
        'custom-xl': "18px",
        'custom-2xl': "19.92px",
        'custom-3xl': "22px",
        'custom-4xl': "22.22px",
        'custom-5xl': "26px",
        'custom-6xl': "30px",
        'custom-7xl': "39.84px",
        'custom-8xl': "44px",
        'custom-9xl': "52px",
        'custom-10xl': "70px",
        'custom-11xl': "104px",
      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg.webp')",
        'blue-card': "url('/public/assets/images/webp/bg-blue-card.webp')",
        'green-card': "url('/public/assets/images/webp/bg-green-card.webp')",
        'yellow-card': "url('/public/assets/images/webp/bg-yellow-card.webp')",
      },

    },
  },
  plugins: [],
}