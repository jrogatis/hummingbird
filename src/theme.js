import { createMuiTheme } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#white',
      main: '#white',
      dark: '#white',
      contrastText: 'white',
    },
    secondary: {
      light: '#2d7ebb',
      main: '#2d7ebb',
      dark: '#2d7ebb',
      contrastText: 'white',
    },
    error: red,
    background: {
      appBar: 'trasparent',
    },
  },
  typography: {
    fontFamily: 'Heebo',
    fontWeightRegular: '100',
  },
});

export default theme;
