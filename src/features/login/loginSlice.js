import { createSlice } from '@reduxjs/toolkit';

//import axios from 'axios'

//const url="http://localhost:3001/ususarios";

export const slice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setEmail: (state, action) => {      
      state.email = action.payload;
      console.log(state.email, state)      
    },    
    setPassword: (state, action) => {      
      state.password = action.payload;
      console.log(state.password, state);
    },
    /* getState: sate => {
      let obj = new Object;
      obj.email = state.email;
      obj.password = state.password
    } */
  },
});

export const {setEmail, setPassword} = slice.actions;
export const selectEmail = state => state.login.email;
export const selectPassword = state => state.login.password;


export const loginProcess = (e, email, pass) => { 
  e.preventDefault();   
  console.log(`Dentro de Login Process..  el email es ${email} y el password es ${pass}`)
};

export default slice.reducer;
