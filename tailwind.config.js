/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: { 'myshadow': '0 4px 15px rgba(0, 0, 0, 0.4)' },
      maxWidth: { '1/2': '50%' },
      screens: {
        'celu-s': { min: '320px', max: '425px' },  // Para el rango entre 320px y 425px
        'celu': { min: '426px', max: '639px'},
        /*
        sm	640px	
        md	768px	
        lg	1024px	
        xl	1280px	
        2xl	1536px 
        */
      },
    },
  },
  plugins: [],

};
