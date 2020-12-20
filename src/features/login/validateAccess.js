
import {useSelector, useDispatch} from 'react-redux';
import { setLoginOk, setLoginInProcess, setLoginFailed, setWaitingTrue, setWaitingFalse, setUserLogged} from './statusSlice';
import axios from 'axios';
//import Cookies from 'universal-cookies';
//import md5 from 'md5';

function validateAccess(e, email, password){

  e.preventDefault();
  //let connectionTime = ()=> ""
 
  //const cookies = new cookies();
  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: email, password: password};
  const errorM = {
    cero:"Reservado"
    1: "The combination of username and password you have entered is incorrect ", 
    2: "Ha ocurrido un problema... "
  };
   
  axios.get(urlApi, {params: userInfo})
    .then(resp=>{      
      if (resp.data.length>0){        
        console.log("Encontrado!!!");
        console.log(resp.data);
        const {id, middle, lastname ,name, username, email} = resp.data[0];
        console.log(id, middle, lastname ,name, username, email);                    
      }else{
        console.log(error);
      };
    }, error => {      
      console.log(error);
    }).catch(error =>{
        console.log(`Something unexpected happened...: ${error}`);
      });
}

export default validateAccess

/* 
  Usuarios de la BD API Fake
  "email": "cgarcia@test.com",
  "password": "12345"
  "email": "rflores@test.com",
  "password": "54321"
  "email": "mcarrera@test.com",
  "password": "123456"
*/  