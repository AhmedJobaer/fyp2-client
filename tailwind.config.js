/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        piesTheme: {
          primary: '#98AB3F',
          secondary: '#607241',
          accent: "#3A4256",
          neutral: "#191A3F",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster Two', 'cursive'],
      }
    },
  },

  plugins: [require("daisyui")],
}

