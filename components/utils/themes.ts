import {createMuiTheme} from '@material-ui/core/styles';

export const defaultTheme = {
  background: '#FAFAFA',
  error: '#EB5757',
  black: 'black',
  darkGray: 'darkgray'
}

const primaryFont = 'Noto Sans Japanese';


export const muiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: defaultTheme.background,
    },
    error: {
      main: defaultTheme.error,
    },
  },
  typography: {
    fontFamily: primaryFont,
  },
})

