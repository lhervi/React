
import axios from 'axios';
import Cookies from 'universal-cookies';

function validateAccess(e, email, password){

  e.preventDefault()

  const cookies = new cookies();
  const url="http://localhost:3001/ususarios";

  startSesion = async () =>
    await axios.get(url, {params: { username: email, password: password}}
        .then (response => {console.log(response.data)});
    })
    .catch(erros=>{
        console.log(error);
    })

  
  
   
  
} 

export default validateAccess