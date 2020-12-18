import axios from 'axios';
//import Cookies from 'universal-cookies';
//import md5 from 'md5';

function validateAccess(e, email, password){

  e.preventDefault();
  console.log(`Bienvenido a valida Access..  vamos a comprobar si el email: ${email} y el password ${password} están registrados`);

  //const cookies = new cookies();
  const url = "http://localhost:3001/users";
  const userInfo = {username: email, password: password};
  console.log(`Información del user: ${JSON.stringify(userInfo)}`);

  const prueba = async ()=> {
    await axios.get(url)
      .then(response => console.log(response.data))};

  //fetch (url, userInfo )
  const req = new Request(url, method:('GET', body: userInfo));
  fetch (req)
   .then(res =>res.json())
     .then(data => console.log(data));  

  const startSesion = async () => {
    await axios.get(url, {params: userInfo})  
      .then (response => {
        console.log(response.data);
      })
    .catch(error => {        
        console.log(error);
    })
  } 

  console.log(JSON.stringify(startSesion));
  return startSesion
}
export default validateAccess;

/*{"users":[
    {
        "id": 1,
        "Middle": "García",
        "Lastname": "Ramirez",
        "name": "Guillermo",
        "username": "cgarcia",
        "email": "cgarcia@test.com",
        "password": "827ccb0eea8a706c4c34a16891f84e7b"
    },
    {
        "id": 2,
        "Middle": "Ferandez",
        "Lastname": "Flores",
        "name": "Roberto",
        "username": "rflores",
        "email": "rflores@test.com",
        "password": "01cfcd4f6b8770febfb40cb906715822"
    },
    {
        "id": 3,
        "Middle": "Serrano",
        "Lastname": "Carrera",
        "name": "Mirian",
        "username": "mcarrera",
        "email": "mcarrera@test.com",
        "password": "e10adc3949ba59abbe56e057f20f883e"
    }
]}*/  