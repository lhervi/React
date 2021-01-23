
import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {     
    connectionStatus: '',                   //Information (text) about the connection result and the timestamp when it occurred
    userLogged: false,                      // true is the connection was stablished / false any other case
    userInfo: {      
      lastname:'',
      name:'',
      email:'',       
      role:'guess'
    },    
  },
  reducers: {
    setLoginTries: (state, action) => {      
      state.loginTries = [...state.loginTries, action.payload];          
    },
    ResetLoginTries: (state) => {      
      state.loginTries = state.loginTries=[{tryResult:'', time:''}];          
    },
    setConnectionStatus: (state, action) => {      
      state.connectionStatus = action.payload;
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },    
  },
});

const {actions, reducer} = statusSlice; 

export const { setLoginTries, ResetLoginTries, setConnectionStatus, setUserLogged, setUserInfo } = actions;

export const selectLoginTries = state => state.status.loginTries;
export const selectConnectionStatus = state => state.status.connectionStatus;
export const selectUserLogged = state => state.status.userLogged;
export const selectUserInfo = state => state.status.userInfo;

export default reducer;