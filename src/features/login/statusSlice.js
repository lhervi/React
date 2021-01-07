
import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: { 
    loginTries: [{tryResult:'', time:'', email:''}],  //TryResult: HTTP request status Eg. 200 (means it was ok). time: the timestamp when it occurred
    connectionStatus: '',                   //Information (text) about the connection result and the timestamp when it occurred
    userLogged: false,                      // true is the connection was stablished / false any other case
    userInfo: {
      id:'', 
      middle:'', 
      lastname:'',
      name:'', 
      username:'', 
      email:'', 
      password:''},
    jwt: {token: {}},
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
    setJwt: (state, action) => {
      state.Jwt = action.payload;
    },
  },
});

const {actions, reducer} = statusSlice; 

export const { setLoginTries, ResetLoginTries, setConnectionStatus, setUserLogged, setUserInfo, setJwt } = actions;

//const {loginTries, connectionStatus, userLogged, userInfo} = state.status;

export const selectLoginTries = state => state.status.loginTries;
export const selectConnectionStatus = state => state.status.connectionStatus;
export const selectUserLogged = state => state.status.userLogged;
export const selectUserInfo = state => state.status.userInfo;
export const selectJwt = state => state.status.jwt;

export default reducer;

 
