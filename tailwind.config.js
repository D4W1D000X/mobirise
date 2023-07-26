/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        primary: '#2e6b75',
        secondary: '#6c7577',
        tertiary: '#49858f',
        white: '#ffffff',
        black: '#000000',
        light: '#b9cdd0',
        transparent: 'transparent',

    },
    extend: {},
  },
  plugins: [],
}