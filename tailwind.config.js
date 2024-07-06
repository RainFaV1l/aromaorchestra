/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue, js}', './public/index.html', 
    './src/**/**/*.{vue, js}',
  ],
  theme: {
    extend: {
      'sans': ['Geologica', 'Calibri', 'sans-serif']
    },
  },
  plugins: [],
}

