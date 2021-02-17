module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkblue: '#1C1B2B',
      middleblue: '#3554A5',
      lightblue: '#48A9A6',
      white: '#E0E6F5',
      black: '08080D', 
    },
    fontFamily: {
      'oswald': ["'Oswald'", 'sans-serif'],
      'lato': ["'Lato'", 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
        backgroundImage: theme => ({
         'home': "url('/img/bg.jpg')",
        })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
