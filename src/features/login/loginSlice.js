import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    processing: false,    
  },
    
  reducers: {
    setEmail: (state, action) => {      
      state.email = action.payload;          
    },    
    setPassword: (state, action) => {      
      state.password = action.payload;     
    },  
    setProcessing: (state, action) => {
      state.processing = action.payload;      
    },
  },
});

export const {setEmail, setPassword, setProcessing} = slice.actions;
export const selectEmail = state => state.login.email;
export const selectPassword = state => state.login.password;
export const selectProcessing = state => state.login.processing;

export default slice.reducer;

