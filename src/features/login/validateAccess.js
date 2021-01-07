
// ---------- Function validateAcces ----------
// This is a function to process the email and password recevied from Login.js
// This function set up the Logins's statusState


import axios from 'axios';


async function ValidateAccess(email, password){  
   
  var statusLogin = false;

  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: email, password: password};  
  const userData = {id:'', middle:'', lastname:'', name:'', username:'', email:'', password:''};
  const connectionResult = {result: '', connectionStatusNumber: 0, jwt:{}};   // result: text describing the status  
                                                                      // connectionStatus:it's a HTML numeric code

  

 try{  
  const resp = await axios.get(urlApi, {params: userInfo});
  
  connectionResult.connectionStatusNumber = resp.request.status;  
          
    if (resp.request.status===200 && resp.data.length>0){
      
      statusLogin = true;                                // Login process ok   
      
      const {id, middle, lastname ,name, username, email, password} = resp.data[0]; 
      connectionResult.result= 'Access granted. You are now logged in';
      connectionResult.jwt = (email==='cgarcia@test.com') ? {token: ''} : {token: "header.payload.sign"}

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

}catch(e){
  connectionResult.result= `Something wrong happened. There is not connection with the Login DB. Error type: ${e}` ;
  console.log(e)
}

}

export default ValidateAccess

/* 
  Usuarios de la BD API Fake
  "email": "cgarcia@test.com","password": "12345"
  "email": "rflores@test.com", "password": "54321"
  "email": "mcarrera@test.com","password": "123456"
*/  