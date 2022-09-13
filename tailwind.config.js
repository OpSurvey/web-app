/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */

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
  },
};


