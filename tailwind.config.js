/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alatsi: ['Alatsi', 'serif'], // Add Roboto for general use
      },
      boxShadow: {
        custom: '0 1px 1px 6px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
