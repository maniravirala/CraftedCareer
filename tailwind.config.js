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
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: {
        DEFAULT: '#405ff3', // Define your primary color here
      },
      secondary: {
        DEFAULT: '#BDC3C7', // Define your secondary color here
      },
      background: {
        DEFAULT: '#0c3760', // Define your background color here
      },
      main: {
        DEFAULT: '#c4a079', // Define your main color here
      },
    }
  },
  },
  plugins: [],
});