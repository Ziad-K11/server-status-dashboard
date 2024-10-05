// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Adjust according to your folder structure
    './src/components/**/*.{js,ts,jsx,tsx}', // Adjust according to your folder structure
    './src/pages/**/*.{js,ts,jsx,tsx}', // Include if you're using pages directory
    './public/**/*.{html,js}', // Include any static HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
