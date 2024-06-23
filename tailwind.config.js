/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.1)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.2)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.3)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.4)',
        '2xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}


