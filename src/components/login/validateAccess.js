
// ---------- Function validateAcces ----------
// This is a function to process the email and password recevied from Login.js
// This function set up the Logins's statusState


import axios from 'axios';

async function ValidateAccess(email){  
   
  var statusLogin = false;

  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: "cgarcia@test.com", password: "123c"};  
  const userData = {lastname:'', name:'', email:'', role:''};
  const connectionResult = {result: '', connectionStatusNumber: 0};   // result: text describing the status  
                                                                              // connectionStatus:it's a HTML numeric code

  try{  

    //const resp = await axios.get(urlApi, {params: userInfo});

    (email ==="cgarcia@test.com") ? alert('son iguales') : alert('son diferentes');

    const resp = await axios.get(urlApi, {params: userInfo});
    console.log(resp);   
    
    connectionResult.connectionStatusNumber = resp.request.status;
            
      if (resp.request.status===200 && resp.data.length>0) {
        
        statusLogin = true;                                                      // Login process ok   
        
        const {lastname ,name, email, role} = resp.data[0]; 
        connectionResult.result= 'Access granted. You are now logged in';  
        
        userData.lastname= lastname;
        userData.name= name;        
        userData.email= email;            
        userData.role= role;
            
      } else if (resp.request.status===200 && resp.data.length===0) {
        
        connectionResult.result= 'User not registered';      
        console.log(connectionResult.result);   // email user no founded      
      } 

      return new Promise (function (status){     
        status({status: statusLogin, userData, connectionResult});
      })      

  }catch(e){
    connectionResult.result= `Something wrong happened. There is not connection with the DB. ${e}` ;
    console.log(connectionResult.result);
    return new Promise (function (status){     
        status({status: statusLogin, userData, connectionResult});
    })
  }
}

export default ValidateAccess;