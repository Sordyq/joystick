/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'min': '330px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min':'1024px'}
      }
    },
  },
  plugins: [],
}