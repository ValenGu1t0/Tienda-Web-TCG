/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: { 'myshadow': '0 4px 15px rgba(0, 0, 0, 0.4)' },
      maxWidth: { '1/2': '50%' },
      screens: {
        'celu': { min: '425px', /*falta max*/ },  // Para pantallas de hasta 425px
        'celu-s': { min: '320px', max: '425px' },  // Para el rango entre 320px y 425px
      },
    },
  },
  plugins: [],

};
