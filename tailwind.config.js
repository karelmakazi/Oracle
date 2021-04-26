module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Barlow Condensed'],
      },
      width: {
        cardW: '350px',
        cardInnerW: '329px',
      },
      height: {
        cardH: '518px',
        cardInnerH: '497px',
      },
      colors: {
        blueMid: '#326280',
        redLight: '#FFDFC8',
        redMid: '#EBACA2',
        redDark: '#CE6A6B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
