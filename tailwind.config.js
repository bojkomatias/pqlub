/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lexend)'],
        serif: ['var(--font-lobster)'],
      },
      backgroundImage: {
        '1': "url('/bg1.svg')",
        '2': "url('/bg2.svg')",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'slide': 'wiggle 30s linear infinite'
      }

    },
  },
  plugins: [],
}
