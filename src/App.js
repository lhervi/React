import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserLogged} from './features/login/statusSlice';
import Login from './features/login/Login';
import Menu2 from './dashboardTemplate/Menu2';
  
function App() {
  const userLogged = useSelector(selectUserLogged);
  return userLogged ? <Menu2/> : <Login/> 
}

export default App;
