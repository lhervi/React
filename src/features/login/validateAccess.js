
// ---------- Function validateAcces ----------
// This is a function to process the email and password recevied from Login.js
// This function set up the Logins's statusState

import axios from 'axios';
//import Cookies from 'universal-cookies';

async function ValidateAccess(email, password){
  /*
  const loginStatus = {
    "loginOk": '',
    "welcome": "Welcome",
    "loginFailed": 'The combination of username and password you have entered is incorrect',
    "connectionProblem": "WEB Connection failed... ",
    "loginInProcess": "Please wait, login in process",
  } 
  */     
   
  var statusLogin = false;

  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: email, password: password};
    
  function delay() {
    console.log("waiting")
    return new Promise(resolve=> {
      let miliseconds = Math.round(Math.random()*3*1000);      
      setTimeout(() => {
        resolve(0);      
      }, miliseconds);
    })   
  }

  
  async function fakeConnectionTime() {            
      const result = await delay();
      (console.log("Finished"));
  }
  
  
  axios.get(urlApi, {params: userInfo})
   .then(resp=>{  
      if (resp.data.length>0){     
        
        console.log("Found it!!!");        
        const {id, middle, lastname ,name, username, email} = resp.data[0];
        console.log(id, middle, lastname ,name, username, email);
        statusLogin = true;    
           
      }else{        
        
        console.log("Email or password are no registered");
        
      };
    }, error => {    
      console.log(`Something wrong happened... ${error}`);
      
    }).catch(error =>{
        console.log(`Something unexpected happened...: ${error}`);
        
      });

      const statusPromise = new Promise(function(status, fail){
        status(statusLogin);        
        });
      return statusPromise
}

export default ValidateAccess

/* 
  Usuarios de la BD API Fake
  "email": "cgarcia@test.com","password": "12345"
  "email": "rflores@test.com", "password": "54321"
  "email": "mcarrera@test.com","password": "123456"
*/  