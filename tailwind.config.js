/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fourteen':'14px'
      },
      maxHeight: {
        'card':'500px'
      }
    },
  },
  plugins: [],
}

