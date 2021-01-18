
import React from 'react';
import { Redirect } from 'react-router-dom';
import validPath from '../../../components/menu/validPath';
import filterPath from '../../../components/menu/filterPath';


const PrivateRoute = (!validPath()) ? <Redirect to={'/pagenotfound'}/> :

({component: Component, restricted, path, ...rest})=> {      

    const validPathResult = filterPath({path: path, restricted: true});
   
    if (path===validPathResult) {

        return <Component {...rest} /> 

    }else{

        return <Redirect to={validPathResult} />

    }
    
}  

export default PrivateRoute;