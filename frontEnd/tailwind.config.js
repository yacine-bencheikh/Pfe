/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkBg": "#080b12",
        "darkInput": "#10151b",
        "blueButton": "#0630F4",
        "textColor": "#b1b2b8",
        "modalColor": "#1a1f2b",
      }
    },
  },
  plugins: [],
}

