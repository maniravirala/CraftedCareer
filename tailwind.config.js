// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {colors: {
//       primary: {
//         DEFAULT: '#405ff3', // Define your primary color here
//       },
//       secondary: {
//         DEFAULT: '#BDC3C7', // Define your secondary color here
//       },
//       background: {
//         DEFAULT: '#eaeef6', // Define your background color here
//       },
//     }
//   },
//   },
//   plugins: [],
// }


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
          DEFAULT: '#58D68D',
          light: '#58D68D',
          dark: '#58D68D',
        },
        danger_mani: {
          DEFAULT: '#EC7063',
          light: '#EC7063',
          dark: '#EC7063',
        },
        warning_mani: {
          DEFAULT: '#F4D03F',
          light: '#F4D03F',
          dark: '#F4D03F',
        },
        info_mani: {
          DEFAULT: '#5DADE2',
          light: '#5DADE2',
          dark: '#5DADE2',
        },

      }, 
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
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