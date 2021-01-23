/* 

import IsLogin from '../login/LoginStatus';
import { activeLinksSet } from './activeLinks';

const login = '/login';
const home = '/';
const pageNotFound = '/pagenotfound' 

const filterPath = routeElements => {

    const {path, restricted} = routeElements;
    const roleLinkSet = activeLinksSet();   

    if (roleLinkSet.has(path)) {
        if (!IsLogin() && restricted) {
            return      
        }else if ((!IsLogin() && !restricted) || (IsLogin() && path!==login)) {         
            return  path    
        }else if (IsLogin() && path===login){
            return home;
        }       
    }else{
        return pageNotFound;
    }

}

export default filterPath; 

*/