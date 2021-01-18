import React from 'react';
import { BrowserRouter, Switch  } from 'react-router-dom';


import Navbar from './components/Navigator';

import Login from '../../pages/Login';
import Dashboard from '../../pages/dashboard/Dashboard.js';
import Orders from '../../pages/dashboard/Orders';
import Customers from '../../pages/dashboard/Customers.js';
import Reports from '../../pages/dashboard/Reports.js';
import Integration from '../../pages/dashboard/Integration.js';
import PageNotFound from '../../pages/PageNotFound.js';
import Logout from '../../pages/Logout.js';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

export default function Menu() {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>                
                <PublicRoute restricted = {true} exact path="/" component={Dashboard}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/login" component={Login}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/pagenotfound" component={PageNotFound}></PublicRoute>                 
                <PublicRoute restricted = {true} exact path="/dashboard" component={Dashboard}></PublicRoute>
                <PrivateRoute exact path="/orders" component={Orders} ></PrivateRoute>
                <PrivateRoute exact path="/customers" component={Customers} ></PrivateRoute>
                <PrivateRoute  exact path="/reports" component={Reports} ></PrivateRoute>
                <PrivateRoute exact path="/integration" component={Integration} ></PrivateRoute>    
                <PrivateRoute exact path="/logout" component={Logout} ></PrivateRoute>                            
            </Switch>        
        </BrowserRouter>
        
    )    
}

           
                
            
      