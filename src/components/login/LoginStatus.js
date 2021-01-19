import { useSelector } from 'react-redux';
import { selectUserLogged } from '../../reducers/statusSlice';
import RecoverSession from './RecoverSession';

const IsLogin = ()=>{

    const logged = useSelector (selectUserLogged);

    if (!sessionStorage.getItem('token')) {
        return false;
    }else{
        if (!logged) {
            RecoverSession();
        }
        return true;
    }
} 

export default IsLogin;