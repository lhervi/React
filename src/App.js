import React from 'react';
import Menu from './pages/menu/MenuJwt';
import Login from './pages/LoginAuth0';
import { useSelector } from 'react-redux';
import { selectUserLogged } from './reducers/statusSlice';
  
function App() {

    const logged = useSelector(selectUserLogged);

    if (!logged) {
        return <Login />       
    }else{        
        return <Menu />
    }
    
}

export default App;