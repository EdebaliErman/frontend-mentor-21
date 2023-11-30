/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Purple: " hsl(259, 100%, 65%)",
        Lightred: " hsl(0, 100 %, 67 %)",
        White: " hsl(0, 0%, 100 %)",
        Offwhite: " hsl(0, 0 %, 94 %)",
        Lightgrey: "hsl(0, 0 %, 86 %)",
        Smokeygrey: "hsl(0, 1 %, 44 %)",
        Offblack: " hsl(0, 0 %, 8 %)"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      "popins": ['Poppins', "sans-serif"]
    }
  },
  plugins: [],
}

