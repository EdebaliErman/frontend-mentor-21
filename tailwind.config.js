/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Purple: " hsl(259, 100%, 65%)",
        Lightred: " hsl(0, 100%, 67%)",
        White: " hsl(0, 0%, 100%)",
        Offwhite: " hsl(0, 0%, 94%)",
        Lightgrey: "hsl(0, 0%, 86%)",
        Smokeygrey: "hsl(0, 1%, 44%)",
        Offblack: " hsl(0, 0%, 8%)"
      },
      fontFamily: {
        "popins": ['Poppins', "sans-serif"]
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }

  },
  plugins: [],
}

