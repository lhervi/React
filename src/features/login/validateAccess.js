import axios from 'axios';
import Cookies from 'universal-cookies';
import md5 from 'md5';

e.preventDefault();

function validateAccess(e, email, password){

  const cookies = new cookies();
  const url = "http://localhost:3001/ususarios";

  let startSesion = async () => {
    await axios.get(url, {params: {username: email, password: md5(password)}})}  
      .then (response => {
        console.log(response.data);
      })
    .catch(error => {
        console.log(error);
    })
}
export default validateAccess