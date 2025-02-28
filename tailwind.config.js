/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          400: '#818cf8',
          600: '#4f46e5',
        },
      },
    },
  },
  plugins: [],
}
