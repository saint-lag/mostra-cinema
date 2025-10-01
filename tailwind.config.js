module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': 'var(--light-green)',
        'musk-green': 'var(--musk-green)'
      },
      fontFamily: {
        sans: ["Futura PT","Arial","sans-serif"],
      }
    },
  },
  plugins: [],
}