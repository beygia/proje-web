/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {

    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      }
    },
    extend: {
      colors : {
        "primary": "#f03D5A"
      },
      
      fontFamily: {
        'body' : ['Gorva-Regular-Demo']
      },
      fontFamily: {
        'brand' : ['fa-thin-100']
      },
      animation: {
        bounce: 'bounce 0.5s'
      },
      keyframes: {
        bounce: {
          '0%': {
             width: '0'
          },
          '100%': {
             width: '54px'
          },
        },
      },
    },
  },
  plugins: [],
}

