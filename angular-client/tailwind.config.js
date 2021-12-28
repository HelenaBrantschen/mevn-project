// tailwind.config.js
module.exports = {
  prefix: 'tw-', //prevents variable overlapping from other frameworks like bootstrap
  mode: 'jit',
  purge: {
    enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    colors: {
      'blue': '#BFC9E8',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
       // simplify names of default tw palette
      'gray-light': '#d3dce6',
      'white': '#fff',
      'tahiti': {//different color
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}