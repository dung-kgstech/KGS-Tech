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
        'bgcolor': '#F3F4F6',
      },
      colors: {
        primary: '#6BBF59',     
        secondary: '#303b36',   
        third: 'linear-gradient(-45deg, #00B1FF, #05E8C2)',
        accent: '#0b67ff',  
      },
    },
  },
  plugins: [],
}