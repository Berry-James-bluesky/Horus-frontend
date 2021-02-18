module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        // 'main': '250px 1fr',
        'main': 'minmax(250px, 250px) minmax(250px, 1fr)'
      }
    },
    color: {
      'secondary': '#e26e5c'
    },
    fontFamily: {
      'serif': ['Rammetto\\ One'],
      'sans': ['Poppins']
    },
    textColor: {
      'primary': '#1f1f1f',
      'secondary': '#e26e5c'
    },

    borderColor: theme => ({
      // ...theme('colors'),
      // 'primary': '#1f1f1f',
      DEFAULT: '#dedede',
      'transparent': 'rgba(0,0,0,0)',
      'secondary': '#e26e5c'
    }),

    backgroundColor: theme => ({
      ...theme('colors'),
      'secondary': '#e26e5c'
    })

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
