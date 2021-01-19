
import { useDispatch } from 'react-redux';
import { setUserInfo, setUserLogged } from '../../reducers/statusSlice';
import { setMenuActiveLinks } from '../../reducers/menuSlice';
import { activeLinks } from '../menu/activeLinks';

const RecoverSession = ()=> {

    const dispatch = useDispatch();

    const userInfo = {
    id:'', middle:'', 
    lastname: sessionStorage.getItem('lastname'),
    name: sessionStorage.getItem('name'), 
    username:'', 
    email: sessionStorage.getItem('email'), 
    password: '',    
    role:sessionStorage.getItem('role'),
    };

    dispatch(setUserInfo(userInfo));   
    dispatch(setUserLogged(true));
    dispatch(setMenuActiveLinks(activeLinks()));
    
  }

  export default RecoverSession;
