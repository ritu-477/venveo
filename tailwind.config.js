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
      },

      colors: {
        'green': "#D2F038",
        'light-gray': "#9DC9CC",
        'dark-green': "#097980",
        'light-green':"#0D99A0",
      },

      fontSize: {
        'custom-sm': "6px",
        'custom-md': "15px",
        'custom-lg': "22px",
        'custom-9xl': "120px",
      },

      lineHeight: {
        'custom-sm': "7.97px",
        'custom-md': "30px",
        'custom-lg': "52px",
        'custom-9xl': "104px",
      },

      backgroundImage: {
        'hero': "url('/public/assets/images/webp/hero-bg.webp')",
      },

    },
  },
  plugins: [],
}

