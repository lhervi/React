
const Logout = ()=>{
    
const confirm=window.confirm('Are you sure you want to quit?');
 
if (confirm){
  localStorage.clear();
  window.location.href = '/';
}

}

export default Logout;