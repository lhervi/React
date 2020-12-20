
import { createSlice } from '@reduxjs/toolkit';

const loginStatus = {
    "loginOk": '',
    "welcome": "Welcome",
    "loginFailed": 'The combination of username and password you have entered is incorrect',
    "connectionProblem": "WEB Connection failed... ",
    "loginInProcess": "Please wait, login in process",
}

export const slice = createSlice({
  name: 'status',
  initialState: {
    "login": '',
    "waiting": false,
    "connectionStatus": '',
    "userLogged":false,
  },
  reducers: {
    setLoginOk: (state, action) => {      
        state.login = loginStatus.welcome + action.payload;          
      },
      setLoginInProcess: (state) => {      
        state.login = loginStatus.loginIn;
      },
    setLoginFailed: (state) => {      
      state.login = loginStatus.loginFailed;
    },    
    setWaitingTrue: (state) => {      
      state.waiting = true;     
    },
    setWaitingFalse: (state) => {      
        state.waiting = false;     
      },
    setUserLogged: (state) => {
        state.userLogged = 'true';
    },
  },
});

export const {setLoginOk, setLoginInProcess, setLoginFailed, setWaitingTrue, setWaitingFalse, setUserLogged} = slice.actions;
const st = state.status;
export const selectLogin = state => st.login;
export const selectWaiting = state => st.password;
export const selectConnectionStatus = state => st.connectionStatus;
export const selectUserLogged = state => st.userLogged;

export default slice.reducer;
