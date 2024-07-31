/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
              "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        apercu: ['Apercu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
