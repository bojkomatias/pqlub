/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'navy': '#001c26',
        'teal': '#1F8A70',
        'green': '#BFDB38',
        'orange': '#FC7300',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-handwritten)'],
      },
      boxShadow: {},
      backgroundImage: {
        '1': "url('/hero-bg.jpg')",
        '2': "url('/hero-bg-dark.jpg')",
      },
      transitionDuration: { DEFAULT: '300ms' },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0, 0, 0, 1.5)",
      },
      keyframes: {
        slide: {
          '100%': { transform: 'translateX(-50%)' },
        },
        rot3d: {
          '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
          '100%': { transform: 'rotate3d(0, 1, 0, 360deg)' }
        }

      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'slide': 'slide 20s linear infinite',
        '3d': 'rot3d 5s linear infinite'
      }
    },
  },
  plugins: [],
}
