import React from 'react';
import Login from './features/login/Login';
import Menu from './dashboardTemplate/MenuJwt';

  
function App() {
    
    const userLogged = localStorage.getItem('token') ? true: false

    console.log(userLogged)   
    
    if (!userLogged) {
        return <Login/>
    }else{
       return  <Menu />
    } 
}

export default App;