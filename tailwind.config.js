/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 20px 40px 5px',
      },
      fontFamily: {
        sans: ['var(--font-lexend)'],
        serif: ['var(--font-lobster)'],
      },
      backgroundImage: {
        '1': "url('/sape.jpg')",
        '2': "url('/sape2.jpg')",
      },
      keyframes: {
        slide: {
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'slide': 'slide 30s linear infinite'
      }

    },
  },
  plugins: [],
}
