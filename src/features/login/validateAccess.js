
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
  const userData = {id:'', middle:'', lastname:'', name:'', username:'', email:'', password:''};
  const connectionResult = {result: '', connectionStatus: 0};
  

 try{  
  const resp = await axios.get(urlApi, {params: userInfo});
  connectionResult.connectionStatus = resp.request.status;
          
    if (resp.request.status===200 && resp.data.length>0){
      
      statusLogin = true;                                // Login process ok   
      
      const {id, middle, lastname ,name, username, email, password} = resp.data[0]; 
      connectionResult.result= 'User found it';
      console.log(connectionResult.result);   
      
      userData.id= id;
      userData.middle= middle;
      userData.lastname= lastname;
      userData.name= name;
      userData.username= username;
      userData.email= email;
      userData.password= password;

      
          
    } else if (resp.request.status===200 && resp.data.length===0) {        
      
      connectionResult.result= 'Email or password not registered';      
      console.log(connectionResult.result);   // email/user no founded
    
    } else {
      connectionResult.result = 'There is a problem to conmunicate with the DB source'
      console.log(connectionResult.result);
    }

    return new Promise (function (status){     
      status({status: statusLogin, userData, connectionResult});
    })      

}catch{
  console.log(Error)
}

}

export default ValidateAccess

/* 
  Usuarios de la BD API Fake
  "email": "cgarcia@test.com","password": "12345"
  "email": "rflores@test.com", "password": "54321"
  "email": "mcarrera@test.com","password": "123456"
*/  