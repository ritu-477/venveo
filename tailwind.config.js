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
        'space': "'space mono', sans-serif",
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
        'aqua-green': "#00AFB5",
        'light-black': "#a6a6a6",
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
        'custom-xs': "6px",
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
        'outsmart': "url('/public/assets/images/webp/outsmart-bg.webp')",
        'tab-one': "url('/public/assets/images/webp/tab-one-bg.webp')",
        'tab-two': "url('/public/assets/images/webp/tab-two-bg.webp')",
        'tab-three': "url('/public/assets/images/webp/tab-three-bg.webp')",
        'actual': "url('/public/assets/images/webp/actual-bg.webp')",
        'mobile-tab-two': "url('/public/assets/images/webp/mobile-bg-tab-two.webp')",
        'mobile-tab-three': "url('/public/assets/images/webp/mobile-tab-three-bg.webp')",
        'marketing-bg-one': "url('/public/assets/images/webp/marketing-bg-one.webp')",
        'marketing-bg-two': "url('/public/assets/images/webp/marketing-bg-two.webp')",
        'marketing-bg-three': "url('/public/assets/images/webp/marketing-bg-three.webp')",
        'marketing-mobile-one': "url('/public/assets/images/webp/marketing-mobile-one.webp')",
        'marketing-mobile-two': "url('/public/assets/images/webp/marketing-mobile-two.webp')",
        'marketing-mobile-three': "url('/public/assets/images/webp/marketing-mobile-three.webp')",
        'ready': "url('/public/assets/images/webp/ready-bg.webp')",
      },

    },
  },
  plugins: [],
}