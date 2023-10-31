/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'neonGreen': 'hsl(150, 100%, 66%)'
    },
    colors: {
      darkGrayishBlue: '#305F8B',
      grayishBlue: 'hsl(217, 19%, 38%)',
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)'
    },
    minHeight: {
      '250': '250px'
    },
    minWidth: {
      '500': '500px',
      '1/4': '25%',
      '1/3': '33.3%'
    },
    maxWidth: {
      '750': '750px',
    },
    textColor: {
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)'
    },
    fontFamily: {
      'manrope': ['"Manrope"']
    },
    letterSpacing: {
      'widest': '0.5em'
    }
  },
  plugins: [],
}

