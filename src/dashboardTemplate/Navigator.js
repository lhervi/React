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

  const guess= ['/login', '/dashboard']

  const allLinks = {    
   
    '/dashboard': {name: 'Dashboard', iconObj: <DashboardIcon/>},
    '/orders': {name: 'Orders', iconObj: <ShoppingCartIcon/>}, 
    '/customers': {name: 'Customers', iconObj: <PeopleIcon/>},
    '/reports': {name: 'Reports', iconObj: <BarChartIcon/>},
    '/integration': {name: 'Integration', iconObj: <LayersIcon/>},
  };

  const activeLinks = (props.activeLinks) ? props.activeLinks : guess;         //array links to be created 
  //const activeLinks = props.activeLinks;

  

  const linksToInterface = activeLinks.map(li => 
                        
     allLinks[li] &&
     <ListItem button>
        <ListItemIcon>{allLinks[li].iconObj}</ListItemIcon>
        <Link to={li} style={{"text-decoration":''}}>
          <ListItemText primary={allLinks[li].name}/> 
        </Link>       
      </ListItem>    

  );  
  
  return(
  <nav>
    
    {linksToInterface}

  </nav>
  );
}

export default Navbar;













/*

<ListItem button disable={!activeLinks.has('/dashboard')}>
      <ListItemIcon>
        <{allLinks[li]icon} />
      </ListItemIcon>
      <Link to={activeLinks.has('/dashboard') ? "/dashboard":'#'}   underline='over' style={"text-decoration:''"}>
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
      <Link to={activeLinks.has('/integration') ? "/integration" : '#'} underline='over' style={"text-decoration:''"}>
        <ListItemText primary="Integration"/>
      </Link>
    </ListItem> 

*/