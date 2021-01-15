import React from 'react';
import { Redirect, BrowserRouter, Switch  } from 'react-router-dom';

import Navbar from './Navigator';

import Login from '../../pages/Login';
import Dashboard from '../../pages/dashboard/Dashboard.js';
import Orders from '../../pages/dashboard/Orders';
import Customers from '../../pages/dashboard/Customers.js';
import Reports from '../../pages/dashboard/Reports.js';
import Integration from '../../pages/dashboard/Integration.js';
import PageNotFound from '../../pages/PageNotFound.js';
import Logout from '../../pages/Logout.js';


export default function Menu() {

const TOKEN_KEY = localStorage.getItem('token');
const role = localStorage.getItem('role');

const isLogin = ()=> (TOKEN_KEY) ? true : false

const allLinks = ['/', '/login', '/dashboard', '/orders', '/customers', '/reports', '/integration', '/logout','/pagenotfound'];
const allLinksSet = new Set (allLinks);

const home = Dashboard;

const roleSet = {

    guess: ['/login', '/dashboard', '/logout'],
    user1: ['/login', '/dashboard', '/orders', '/logout'], 
    user2: ['/login','/dashboard', '/orders', '/customers', '/logout'], 
    user3: ['/login','/dashboard', '/orders', '/customers', '/reports', '/logout'], 
    admin: ['/login', '/dashboard', '/orders', '/customers', '/reports', '/integration', '/logout']

};

const activeLinks = roleSet[role];

const PublicRoute = ({component: Component, restricted, path, ...rest})=> {     
    
    if (allLinksSet.has(path)) {
        if (!isLogin() && restricted) {
            return <Redirect to='/login' />     
        }else if ((!isLogin() && !restricted) || (isLogin() && path!=='/login')) {         
            return <Component {...rest} />    
        }else if (isLogin() && path==='/login'){
            return <Redirect to= '/' />            
        }
    }else {
        return <Redirect to= '/pagenotfound' />
    }
}

const PrivateRoute = ({component: Component, path, ...rest}) => {   

    if (allLinksSet.has(path)) {
        if (!isLogin()) {
            return <Redirect to='/login' /> 
        }else if (isLogin() && path!=='/login') {
            return <Component {...rest} />
        }else if (isLogin() && path==='/login'){
            return <Redirect to= '/' />
        }
    }else{
    return <Redirect to= '/pagenotfound' />
    }
}    

if (allLinksSet.has(window.location.pathname)) {
    return (
        <BrowserRouter>
            <Navbar activeLinks={activeLinks} />
            <Switch>                
                <PublicRoute restricted = {true} exact path="/" component={home}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/login" component={Login}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/pagenotfound" component={PageNotFound}></PublicRoute>                 
                <PublicRoute restricted = {true} exact path="/dashboard" component={Dashboard}></PublicRoute>
                <PrivateRoute exact path="/orders" component={Orders}></PrivateRoute>
                <PrivateRoute exact path="/customers" component={Customers}></PrivateRoute>
                <PrivateRoute  exact path="/reports" component={Reports}></PrivateRoute>
                <PrivateRoute exact path="/integration" component={Integration}></PrivateRoute>    
                <PrivateRoute exact path="/logout" component={Logout}></PrivateRoute>                            
            </Switch>        
        </BrowserRouter>
    )
    }else{
        return (
          <BrowserRouter>
            <PublicRoute restricted = {false} exact path="/pagenotfound" component={PageNotFound}/>         
          </BrowserRouter>
        )
    }    
}