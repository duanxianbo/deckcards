import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import {createMuiTheme} from '@material-ui/core/styles';


const custumedTheme = {
  palette: {
    primary: blue,
    secondary: green
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        '&:hover': {
          backgroundColor: null
        }
      }
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: [
      'Roboto',
      'Arial'
    ].join(',')
  },
  status: {
    danger: 'orange'
  }
};

export default createMuiTheme(custumedTheme);
