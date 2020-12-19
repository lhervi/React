import axios from 'axios';
//import Cookies from 'universal-cookies';
//import md5 from 'md5';

function validateAccess(e, email, password){

  e.preventDefault();
 
  //const cookies = new cookies();
  const urlApi = "http://localhost:3001/users";
  const userInfo = {email: email, password: password};  

  axios.get(urlApi, {params: userInfo})
    .then(response=>{
      console.log(response);
      if (response.data.length>0){
        console.log("Encontrado!!!");
        const {id, middle, lastname ,name, username, email} = response.data[0];
        console.log(id, middle, lastname ,name, username, email);
                    
      }else{
        console.log("No se encontró el usuario");
      }
    },(error)=>{
      console.log(error)
    });
  
  
 //fetch (url, {method:'GET', params: userInfo})
/*  fetch (request)
      .then(resp => resp.json())
        .then(r => console.log(r))
      //    .catch(e=>console.log(e)); */ 

  
  //return connect()
}
 
export default validateAccess

/* Archivo JSON para la API Fake
  {
    "users":[
        {
            "id": 1,
            "middle": "García",
            "lastname": "Ramirez",
            "name": "Guillermo",
            "username": "cgarcia",
            "email": "cgarcia@test.com",
            "password": "827ccb0eea8a706c4c34a16891f84e7b"
        },
        {
            "id": 2,
            "middle": "Ferandez",
            "lastname": "Flores",
            "name": "Roberto",
            "username": "rflores",
            "email": "rflores@test.com",
            "password": "01cfcd4f6b8770febfb40cb906715822"
        },
        {
            "id": 3,
            "middle": "Serrano",
            "lastname": "Carrera",
            "name": "Mirian",
            "username": "mcarrera",
            "email": "mcarrera@test.com",
            "password": "e10adc3949ba59abbe56e057f20f883e"
        }
    ]          

}

*/  