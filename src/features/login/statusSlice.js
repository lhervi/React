
import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    "loginTime": [],    
    "connectionStatus": '',
    "userLogged": false,
  },
  reducers: {
    setLoginOk: (state, action) => {      
        state.login = action.payload;          
      },
      setLoginInProcess: (state, action) => {      
        state.login = action.payload;
      },
    setLoginFailed: (state, action) => {      
      state.login = action.payload;
    },    
    setWaitingTrue: (state, action) => {      
      state.waiting = action.payload;     
    },
    setWaitingFalse: (state, action) => {      
        state.waiting = action.payload;     
      },
    setUserLogged: (state, action) => {
        state.userLogged = action.payload;
    },
  },
});

const {actions, reducer} = statusSlice; 

export const {setLoginOk, setLoginInProcess, setLoginFailed, setWaitingTrue, setWaitingFalse, setUserLogged} = actions;

export const selectLogin = state => state.status.login;
export const selectWaiting = state => state.status.waiting;
export const selectConnectionStatus = state => state.status.connectionStatus;
export const selectUserLogged = state => state.status.userLogged;

export default reducer;
