/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#405ff3',
          light: '#405ff3',
          dark: '#405ff3',
        },
        secondary: {
          DEFAULT: '#3451E2',
          light: '#3451E2',
          dark: '#262E44',
        },
        tertiary: {
          DEFAULT: '#D5DDF6',
          light: '#D5DDF6',
          dark: '#374151',
        },
        background: {
          DEFAULT: '#eaeef6',
          light: '#eaeef6',
          dark: '#1e2433',
        },
        main: {
          template1: '#0c3760'
        },
        border: {
          DEFAULT: '#c4a079',
          light: '#c4a079',
          dark: '#c4a079',
        },
        success_mani: {
          DEFAULT: '#81c784',
          light: '#81c784',
          dark: '#388e3c',
        },
        danger_mani: {
          DEFAULT: '#e57373',
          light: '#e57373',
          dark: '#d32f2f',
        },
        warning_mani: {
          DEFAULT: '#ffb74d',
          light: '#ffb74d',
          dark: '#f57c00',
        },
        info_mani: {
          DEFAULT: '#4fc3f7',
          light: '#4fc3f7',
          dark: '#0288d1',
        },

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(0.6)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'breath': 'breath 5s infinite',
      },
    },
  },
  plugins: [],
};



// primary: {
// DEFAULT: '#405ff3', // Define your primary color here
// },
// secondary: {
//   DEFAULT: '#BDC3C7', // Define your secondary color here
// },
// background: {
//   DEFAULT: '#0c3760', // Define your background color here
// },
// main: {
//   DEFAULT: '#c4a079', // Define your main color here
// },
// success_mani: {
//   DEFAULT: '#58D68D', // Define your success color here
// },
// danger_mani: {
//   DEFAULT: '#EC7063', // Define your danger color here
// },