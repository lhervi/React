import React from 'react';
import Navbar from './Navigator';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Login from '../features/login/Login';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Customers from './Customers';
import Reports from './Reports';
import Integration from './Integration';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
drawerPaper: {
  position: 'relative',
  whiteSpace: 'nowrap',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
drawerPaperClose: {
  overflowX: 'hidden',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: theme.spacing(7),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9),
  },
},
}));

const Menu = ()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (   
        
        <BrowserRouter>
        <br/><br/>
          <Navbar/>
            <Switch>              
              <Route exact path="/login" component={Login}></Route> 
              <Route exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/orders" component={Orders}></Route>
              <Route exact path="/customers" component={Customers}></Route>
              <Route exact path="/reports" component={Reports}></Route>
              <Route exact path="/integration" component={Integration}></Route>
            </Switch>
        </BrowserRouter>  
       
  );
}

export default Menu;




