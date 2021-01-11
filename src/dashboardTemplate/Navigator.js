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
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';


const Navbar = (props)=>{   

  const guess= ['/login', '/dashboard']

  const allLinks = {    
   
    '/dashboard': {name: 'Dashboard', iconObj: <DashboardIcon/>},
    '/orders': {name: 'Orders', iconObj: <ShoppingCartIcon/>}, 
    '/customers': {name: 'Customers', iconObj: <PeopleIcon/>},
    '/reports': {name: 'Reports', iconObj: <BarChartIcon/>},
    '/integration': {name: 'Integration', iconObj: <LayersIcon/>},
    '/logout' : {name: 'Logout', iconObj: <ExitToAppRoundedIcon />},
  };

  const activeLinks = (props.activeLinks) ? props.activeLinks : guess;         //array links to be created 
  
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

