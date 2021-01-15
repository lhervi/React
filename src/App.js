import React from 'react';
import Login from './pages/Login';
import Menu from './pages/menu/MenuJwt';

  
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