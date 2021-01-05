import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router'; 
import { Link as RouterLink } from 'react-router-dom';
import Login from '../features/login/Login';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Customers from './Customers';
import Reports from './Reports';
import Integration from './Integration';
import SavedReports from './SavedReports';
import { BrowserRouter} from "react-router-dom";



function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>    
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

export default function ListRouter() {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={['/login']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => (
            <Typography gutterBottom>Current route: {location.pathname}</Typography>
          )}
        </Route>
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/login" primary="Login" icon={<LockOutlinedIcon />} />
            <ListItemLink to="/dashboard" primary="Dashboard" icon={<ShoppingCartIcon />} />
            <ListItemLink to="/orders" primary="Orders" icon={<ShoppingCartIcon />} />
            <ListItemLink to="/customers" primary="Customers" icon={<PeopleIcon />} />
            <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
            <ListItemLink to="/integrations" primary="Integrations" icon={<LayersIcon />} />
          </List>
          <Divider />
          <List aria-label="secondary mailbox folders">
          <ListItemLink to="/current" primary="Current" icon={<AssignmentIcon />} />
            <ListItemLink to="/lastquarter" primary="LastQuarter" />
            <ListItemLink to="/yearendsale" primary="YearEndSale" />
          </List>
        </Paper>
      </div>
    </MemoryRouter>
  );
}
