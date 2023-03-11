/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/util/**/*.{js,jsx,ts,tsx}",
    "./src/App.js",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        EMPTY: "#121213",
        CORRECT: "#86efac",
        PRESENT: "#fef08a",
        ABSENT: "#a1a1aa"
      },

      fontFamily:{
        ATW: "American Typewriter",
        TMS: "Trebuchet MS"
      },

      keyframes: {
        Pop: {
          '0%': {transform : 'scale(.75)'},
          '50%': {transform : 'scale(1.1)'},
        },

        Shake: {
          '0%': {transform : 'translateX(-2px)'},
          '40%': {transform : 'translateX(4px)'},
        },

        Flip: {
          "100%" : {transform : 'scaleY(-1)'}
        }
      },

      animation: {
        pop: 'Pop 100ms ease-in-out 1',
        shake: 'Shake 150ms ease-in-out 2',
        flip: 'Flip 300ms ease-in-out 1'
      },
    },

    

  }, 
  plugins: [
    plugin(function({ matchUtilities, addComponents, theme }) {
      //Animation delay utility Class
      matchUtilities(
        {
          'animation-delay': (value) => ({
            'animation-delay' : value
          }),
        },
        { values: theme('animationDelay') }
      )

      //Component plugin for standard flexbox
      addComponents({
          '.centerStage' : {

          }

        }
      )
    },
    //End of utility
    
    //Default values of plugins
    {
      theme : {
        animationDelay : {
          100: '100ms',
          150: '150ms',
          200: '200ms',
          2000: '2s',
        },
      }
    })
    //End of Plugin
  ],
}