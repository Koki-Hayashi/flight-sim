import {createMuiTheme} from '@material-ui/core/styles';
import {lightBlue} from "@material-ui/core/colors";

export const defaultTheme = {
  main: '#1877F2',
  secondary: lightBlue,
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
    primary: {
      main: defaultTheme.main
    },
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

