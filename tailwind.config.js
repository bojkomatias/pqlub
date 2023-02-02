/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'navy': '#00425A',
        'teal': '#1F8A70',
        'green': '#BFDB38',
        'orange': '#FC7300',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-handwritten)'],
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
        'slide': 'slide 20s linear infinite'
      }
    },
  },
  plugins: [],
}
