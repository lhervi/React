import React from 'react';
import Login from './pages/Login';
import Menu from './pages/menu/MenuJwt';
import PageNotFound from './pages/PageNotFound';
import isLogin from './components/login/loginStatus';
import validPath from './components/menu/validPath';

  
function App() { 

    if (!isLogin()) {
        return <Login/>
    }else if (validPath()) {        
        return  <Menu />
    }else{
        return <PageNotFound />
    }
}

export default App;