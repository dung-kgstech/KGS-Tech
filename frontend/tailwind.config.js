/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'beVietnam': ['Be Vietnam', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'notoSansJP': ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-45deg, #00B1FF, #05E8C2)',
      },
      colors: {
        primary: '#FFF',     
        secondary: '#CE5A67',   
        third: 'linear-gradient(-45deg, #00B1FF, #05E8C2)',
        accent: '#0b67ff',  
      },
    },
  },
  plugins: [],
}