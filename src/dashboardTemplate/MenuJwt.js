import React from 'react';
import { Route, Redirect, BrowserRouter, Switch  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectUserLogged, selectJwt, selectUserInfo} from '../features/login/statusSlice';
import Navbar from './Navigator';

import Login from '../features/login/Login';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Customers from './Customers';
import Reports from './Reports';
import Integration from './Integration';

export default function Menu() {

//const dispatch = useDispatch();
const TOKEN_KEY = useSelector(selectJwt);
const userInfo = useSelector(selectUserInfo);
const loginStatus = useSelector(selectUserLogged);

const user = {name: userInfo.name , lastname: userInfo.lastname}

const isLogin = ()=> (loginStatus && TOKEN_KEY!=={}) ? true : false

const a = isLogin();
console.log(a);
    
const PublicRoute = ({component: Component, restricted, ...rest})=> {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

const PrivateRoute = ({component: Component, ...rest}) => {
    return (        
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

    return (    
      <BrowserRouter>
            <Navbar/>
              <Switch>              
                <PublicRoute restricted = {true} exact path="/dashboard" component={Login}></PublicRoute> 
                <PublicRoute restricted = {false} exact path="/login" component={Dashboard} user={user}></PublicRoute>
                <PrivateRoute exact path="/orders" component={Orders}></PrivateRoute>
                <PrivateRoute exact path="/customers" component={Customers}></PrivateRoute>
                <PrivateRoute  exact path="/reports" component={Reports}></PrivateRoute>
                <PrivateRoute exact path="/integration" component={Integration}></PrivateRoute>
              </Switch>        
      </BrowserRouter>
    );
  }





   
   