/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

 const defaultTheme = require('tailwindcss/defaultTheme')

 module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
    "./components/**/*.{js,jsx}"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens:{
      'xs': '390px',
      ...defaultTheme.screens
    }
  },
};


