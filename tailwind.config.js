module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terra': "#bb5b2b",
        'musgo': "#425a12",
        'lima': "#afbd8d",
        'cipo': "#7e8e20",
        'bebe': "#e1ffe2"
      },
      fontFamily: {
        sans: ["var(--font-muro)", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}