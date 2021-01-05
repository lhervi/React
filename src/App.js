import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserLogged} from './features/login/statusSlice';
import Login from './features/login/Login';
import Menu from './dashboardTemplate/Menu';
  
function App() {
  const userLogged = useSelector(selectUserLogged);
  return userLogged ? <Menu/> : <Login/> 
}

export default App;
