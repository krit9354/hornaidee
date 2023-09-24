/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "brown":"rgba(160, 133, 91, 1)",
        "old_green":"rgba(56, 71, 11, 1)",
        "cream": "rgba(249, 246, 242, 1)"
      }
    },
  },
  plugins: [],
}

