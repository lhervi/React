
const activeRole = ()=> (sessionStorage.getItem('role')) ? sessionStorage.getItem('role') : 'guess'; 

/* import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../reducers/statusSlice';

function ActiveRole () { 

    const role = useSelector(selectUserInfo);

    return <div>{role}</div>
}

*/

export default activeRole; 