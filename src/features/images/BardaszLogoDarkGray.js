
import React from 'react';
import Bardasz1 from './Bardasz_Grey2.png'

function BardaszLogoDG(props){
    
    const w= (props.w >= 0) ? props.w : 0
    const h= (props.h >= 0) ? props.h : 0
    return <img src={Bardasz1} alt="Bardasz Logo" width={props.w} height={props.h}/>;
}

export default BardaszLogoDG