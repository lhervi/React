const activeRole = ()=> (sessionStorage.getItem('role')) ? sessionStorage.getItem('role') : 'guess';

export default activeRole;