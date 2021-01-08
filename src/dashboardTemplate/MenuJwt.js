import React from 'react';
import { Redirect, BrowserRouter, Switch  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUserLogged, selectJwt, selectUserInfo} from '../features/login/statusSlice';
import Navbar from './Navigator';

import Login from '../features/login/Login';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Customers from './Customers';
import Reports from './Reports';
import Integration from './Integration';
import PageNotFound from './PageNotFound';
import App from '../App';

export default function Menu() {

const TOKEN_KEY = useSelector(selectJwt);
const userInfo = useSelector(selectUserInfo);
const loginStatus = useSelector(selectUserLogged);

const user = {name: userInfo.name , lastname: userInfo.lastname, role: userInfo.role}

const isLogin = ()=> (loginStatus && TOKEN_KEY!=={}) ? true : false

const allLinks = new Set (['/login', '/dashboard', '/orders', '/customers', '/reports', '/integration']);

const roleSet = {

    guess: ['/login', '/dashboard'],
    user1: ['/login', '/dashboard', '/orders'], 
    user2: ['/login','/dashboard', '/orders', '/customers'], 
    user3: ['/login','/dashboard', '/orders', '/customers', '/reports'], 
    admin: ['/login', '/dashboard', '/orders', '/customers', '/reports', '/integration']

};

const activeLinks = new Set (roleSet[userInfo.role]);

const PublicRoute = ({component: Component, restricted, path, ...rest})=> {         
   
    if (!isLogin() && restricted) {
        
        return <Redirect to="/login" />

    } else if (!isLogin() && !restricted) {               
        
        return <Component {...rest} />
    
    } else if (isLogin() && path==='/') {

        return <Redirect to="/dashboard" />
    
    } else if (isLogin() && path!=='/login' && allLinks.has(path)) {

        return <Component {...rest} />

    } else if (isLogin() && !allLinks.has(path) )  {

        return <Redirect to="/PageNotFound" />

    }else{

        return <Redirect to="/PageNotFound" />

    }
};

const PrivateRoute = ({component: Component, path, ...rest}) => {   
    
    if (!isLogin()) {
        
        return <Redirect to="/login" />

    } else if (isLogin() && path==='/') {

            return <Redirect to="/dashboard" />

    } else if (isLogin() && path!=='/login' && allLinks.has(path) )  {

        return <Component {...rest} />
    
    } else if (isLogin() && !allLinks.has(path) )  {

        return <Redirect to="/PageNotFound" />

    }else{

        return <Redirect to="/PageNotFound" />

    }
};

    return (    
      <BrowserRouter>
            <Navbar activeLinks={activeLinks} />
              <Switch>      
                
                <PublicRoute restricted = {false} exact path="/" component={App}></PublicRoute>
                <PublicRoute restricted = {false} exact path="/login" component={Login}></PublicRoute>
                <PublicRoute restricted = {true} exact path="/dashboard" component={Dashboard} user={user}></PublicRoute>                 
                <PublicRoute restricted = {false} exact path="/PageNotFound" component={PageNotFound} ></PublicRoute>
                <PrivateRoute exact path="/orders" component={Orders}></PrivateRoute>
                <PrivateRoute exact path="/customers" component={Customers}></PrivateRoute>
                <PrivateRoute  exact path="/reports" component={Reports}></PrivateRoute>
                <PrivateRoute exact path="/integration" component={Integration}></PrivateRoute> 
                          
              </Switch>        
      </BrowserRouter>
    );
  }