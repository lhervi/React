import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
  },
  reducers: {
    setEmail: (state, action) => {      
      state.email = action.payload;          
    },    
    setPassword: (state, action) => {      
      state.password = action.payload;     
    },  
  },
});

export const {setEmail, setPassword} = slice.actions;
export const selectEmail = state => state.login.email;
export const selectPassword = state => state.login.password;

export default slice.reducer;
