/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9F9F7', // Основной фон (Жемчужно-серый)
        graphite: '#1A1A1A', // Основной текст и фон кнопок
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Основной шрифт (Body)
        serif: ['Montserrat', 'sans-serif'], // ИЗМЕНЕНО: Акцентный шрифт теперь тоже Montserrat
      },
    },
  },
  plugins: [],
}