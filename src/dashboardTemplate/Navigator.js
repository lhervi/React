import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';


 const Navbar = ()=>{ 
  return(
  <nav>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard">
        <ListItemText primary="Dashboard"/> 
      </Link>       
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
        <Link to="/orders">
          <ListItemText primary="Orders"/>
        </Link>     
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>    
      <Link to="/customers">
        <ListItemText primary="Customers"/>
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>     
      <Link to="/reports">
        <ListItemText primary="Reports"/>
      </Link>
    </ListItem>    
    
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>      
      <Link to="/integration">
        <ListItemText primary="Integration"/>
      </Link>
    </ListItem>     
  </nav>
  );
}

export default Navbar;

