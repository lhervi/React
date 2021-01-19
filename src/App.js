import React from 'react';
import Login from './pages/Login';
import Menu from './pages/menu/MenuJwt';
import PageNotFound from './pages/PageNotFound';
import IsLogin from './components/login/LoginStatus';
import validPath from './components/menu/validPath';
  
function App() {     

    if (!IsLogin()) {
        return <Login/>
    }else if (validPath()) {
       return  <Menu />
    }else{
        return <PageNotFound />
    } 
}

export default App;