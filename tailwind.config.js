const { guessProductionMode } = require("@ngneat/tailwind");
const { transform } = require("typescript");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'fuentePrincipal': ['Oswald', 'sans-serif']
      },
      backgroundImage: theme => ({
        'luna': "url('https://res.cloudinary.com/latamarket/image/upload/v1624468505/luna_aghhs8.png')",
        'tierra': "url(/assets/img/PlanetaMejorado.png)",
        'estrellas': "url('https://res.cloudinary.com/latamarket/image/upload/v1624510634/stars_xrkrjt.png')",
        'estrellas-fugaz': "url('https://res.cloudinary.com/latamarket/image/upload/v1624513512/estrellafugaz1_p5efuk.png')",
        'fondo-espacio': "url(/assets/img/FondoEspacial_remspv.png)",
        'nave-espacial': "url('https://res.cloudinary.com/latamarket/image/upload/v1624516120/NaveEspacial_trz1lx.png')",
      }),
      animation: {
        'bg-luna': 'backLuna 50s linear infinite',
        'bg-luna-md': 'backLunaMD 50s linear infinite',
        'bg-estrella-fugaz': 'backEstrellaFugaz 10s linear infinite',
        'bg-fondo-espacio': 'backEspacio 900s linear infinite',
        'bg-nave-espacial': 'backNaveEspacial 40s linear infinite',
        'bg-nave-espacial-xs': 'backNaveEspacialXS 40s linear infinite'
      },
      keyframes: {
        backLuna: {
          '0%': { transform: "translate(400%,250%)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },
        backLunaMD: {
          '0%': { transform: "translate(400%,550%)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },
        backEstrellaFugaz: {
          '0%': { 'background-position': '3300px 1600px' },
          '100%': { 'background-position': '-1000px -800px' },
        },
        backEspacio: {
          '0%': { 'background-position': '0px 0px' },
          '100%': { 'background-position': '-10000px -8000px' },
        },
        backNaveEspacial: {
          '0%': { transform: "translate(4000px,2000px)" },
          '100%': { transform: "translate(-200px,-100px)" },
        },
        backNaveEspacialXS: {
          '0%': { transform: "translate(4000px,5000px)" },
          '100%': { transform: "translate(-200%,-200%)" },
        },

      }
    },
  },
  variants: {
    opcity: ['responsive', 'hover', 'focus', 'disabled'],
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};