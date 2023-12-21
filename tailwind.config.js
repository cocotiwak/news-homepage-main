module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'SoftOrange': 'hsl(35, 77%, 62%)',
        'Soft-red': 'hsl(5, 85%, 63%)',
        'Off-white': 'hsl(36, 100%, 99%)',
        'Grayish-blue': 'hsl(233, 8%, 79%)',
        'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'Very-dark-blue': 'hsl(240, 100%, 5%)',
        'tomato': 'hsl(4, 100%, 67%)',
        'Grayish-blue-trans': 'hsla(233, 8%, 79%,0.5)',
      },
      fontSize: {
        'paragraph': ['15px','24px'],
      },
      fontFamily: {
        'inter' : ['Inter','sans'],
      },
      textColor: {
        'SoftOrange': 'hsl(35, 77%, 62%)',
        'Soft-red': 'hsl(5, 85%, 63%)',
        'Off-white': 'hsl(36, 100%, 99%)',
        'Grayish-blue': 'hsl(233, 8%, 79%)',
        'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'Very-dark-blue': 'hsl(240, 100%, 5%)',
        'tomato': 'hsl(4, 100%, 67%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
