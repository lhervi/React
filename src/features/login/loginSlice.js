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

/*

export const userStatus = status => dispatch => {
  axios.get(urlApi, {params: userInfo})
   .then(resp=>{  
      if (resp.data.length>0){            
        console.log("Encontrado!!!");
        console.log(resp.data);
        const {id, middle, lastname ,name, username, email} = resp.data[0];
        console.log(id, middle, lastname ,name, username, email);
        status= true                 
      }else{
        console.log("El email o el password no coinciden");
      };
    }, error => {      
      console.log(error);
    }).catch(error =>{
        console.log(`Something unexpected happened...: ${error}`);
      });
};

*/

export default slice.reducer;


/*

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

*/