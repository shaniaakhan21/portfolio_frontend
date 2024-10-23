/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}', 
    './src/app/components/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000', // Black for dark theme
        light: '#ffffff', // White for light theme
        pink: '#f9a8d4', // Pink for pink theme
      },
    },
  },
  darkMode: 'class', // Enable dark mode via class
  plugins: [],
};

module.exports = config;


