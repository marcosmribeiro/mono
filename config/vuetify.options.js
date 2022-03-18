import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  mono: {
    primary: '#58595B', // primary main
    primarylight: '#D1D2D4', // primary light
    primarydark: '#A4A4A4', // primary dark
    secondary: colors.brown.base, // secondary main
    secondarylight: colors.brown.lighten4, // secondary light
    secondarydark: '#58595B', // secondary dark
    anchor: colors.brown.base // link
  },
  grayscale: {
    primary: colors.blueGrey.darken1, // primary main
    primarylight: colors.blueGrey.lighten4, // primary light
    primarydark: colors.blueGrey.darken4, // primary dark
    secondary: colors.brown.base, // secondary main
    secondarylight: colors.brown.lighten4, // secondary light
    secondarydark: colors.brown.darken4, // secondary dark
    anchor: colors.brown.base // link
  }
}

export const theme = {
  ...palette.mono
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
