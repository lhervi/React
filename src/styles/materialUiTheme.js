import { createMuiTheme } from '@material-ui/core/styles';
//import indigo from '@material-ui/core/colors/purple';
//import orange from '@material-ui/core/colors/green';
//import orange from '@material-ui/core/colors/green';
import { deepPurple, orange, indigo } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
  status:{
      danger: orange[800]
  },
    Link: {
        underline: 'none',
  },  

});

export default theme;