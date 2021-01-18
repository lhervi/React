import isLogin from '../login/loginStatus';
import { activeLinksSet } from './activeLinks';

const login = '/login';
const home = '/';
const pageNotFound = '/pagenotfound' 

const filterPath = routeElements => {

    const {path, restricted} = routeElements;
    const roleLinkSet = activeLinksSet();   

    if (roleLinkSet.has(path)) {
        if (!isLogin() && restricted) {
            return      
        }else if ((!isLogin() && !restricted) || (isLogin() && path!==login)) {         
            return  path    
        }else if (isLogin() && path===login){
            return home;
        }       
    }else{
        return pageNotFound;
    }

}

export default filterPath;