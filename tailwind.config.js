module.exports = {
  purge: {
    content: ['./src/**/*.ejs']
  },
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
    borderWidth: {
      '10': '10px',
    },
    extend: {
        backgroundImage: theme => ({
         'home': "url('/img/bg.jpg')",
         'histoire': "url('/img/histoire.jpg')",
         'valeurs': "url('/img/valeurs.jpg')",
         'events': "url('/img/events.jpg')",
         //riders
         'pa': "url('/img/riders/pa.jpg')",
        })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
