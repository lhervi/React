const isLogin = ()=> (sessionStorage.getItem('token')) ? true : false; 
export default isLogin;