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

const Navbar = (props)=>{   

  const activeLinks = props.activeLinks;  

  return(

  <nav>
    <ListItem button disable={!activeLinks.has('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to={activeLinks.has('/dashboard') ? "/dashboard":'#'}   underline='over'>
        <ListItemText primary="Dashboard"/> 
      </Link>       
    </ListItem>    

    <ListItem button disable={!activeLinks.has('/orders')}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
        <Link to={activeLinks.has('/orders') ? "/orders" : '#'} underline='over'>
          <ListItemText primary="Orders"/>
        </Link>     
    </ListItem>

    <ListItem button disable={!activeLinks.has('/customers')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>    
      <Link to={activeLinks.has('/customers') ? "/customers" : '#'} underline='over'>
        <ListItemText primary="Customers"/>
      </Link>
    </ListItem>

    <ListItem button disable={!activeLinks.has('/reports')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>     
      <Link to={activeLinks.has('/reports') ? "/reports" : '#'} underline='over'>
        <ListItemText primary="reports"/>
      </Link>
    </ListItem>    
    
    <ListItem button disable={!activeLinks.has('/integration')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>      
      <Link to={activeLinks.has('/integration') ? "/integration" : '#'} underline='over'>
        <ListItemText primary="Integration"/>
      </Link>
    </ListItem> 
  </nav>
  );
}

export default Navbar;