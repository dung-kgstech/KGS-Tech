/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'beVietnam': ['Be Vietnam', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'notoSansJP': ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'bgcolor': '#F3F4F6',
      },
      colors: {
        primary: '#0313fc',     
        secondary: '#001137',   
        third: 'linear-gradient(-45deg, #00B1FF, #05E8C2)',
        accent: '#0b67ff',  
      },
    },
  },
  plugins: [],
}