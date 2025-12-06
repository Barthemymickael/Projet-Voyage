/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.{ts,tsx,js,jsx}",
    "./App.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./hooks/**/*.{ts,tsx,js,jsx}",
    "./data/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
