
// ---------- Function validateAcces ----------
// This is a function to process the email and password recevied from Login.js
// This function set up the Logins's statusState


import axios from 'axios';


async function ValidateAccess(email, password){  
   
  var statusLogin = false;

  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: email, password: password};  
  const userData = {id:'', middle:'', lastname:'', name:'', username:'', email:'', password:'', role:''};
  const connectionResult = {result: '', connectionStatusNumber: 0, jwt:{}};   // result: text describing the status  
                                                                              // connectionStatus:it's a HTML numeric code

  

  try{  
    const resp = await axios.get(urlApi, {params: userInfo});
    
    connectionResult.connectionStatusNumber = resp.request.status;  
            
      if (resp.request.status===200 && resp.data.length>0){
        
        statusLogin = true;                                                      // Login process ok   
        
        const {id, middle, lastname ,name, username, email, password, role} = resp.data[0]; 
        connectionResult.result= 'Access granted. You are now logged in';
        connectionResult.jwt = {token: "header.payload.sign"}

        console.log(connectionResult.result);   
        
        userData.id= id;
        userData.middle= middle;
        userData.lastname= lastname;
        userData.name= name;
        userData.username= username;
        userData.email= email;
        userData.password= password;      
        userData.role= role;

        sessionStorage.setItem("token", connectionResult.jwt.token);
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("name", name);      
        sessionStorage.setItem("lastname", lastname);
        sessionStorage.setItem("email", email);      
            
      } else if (resp.request.status===200 && resp.data.length===0) {
        
        connectionResult.result= 'Email or password not registered';      
        console.log(connectionResult.result);   // email/user no founded
      
      } 

      return new Promise (function (status){     
        status({status: statusLogin, userData, connectionResult});
      })      

  }catch(e){
    connectionResult.result= `Something wrong happened. There is not connection with the Login DB. ${e}` ;
    console.log(connectionResult.result);
    return new Promise (function (status){     
        status({status: statusLogin, userData, connectionResult});
    })
  }
}
export default ValidateAccess