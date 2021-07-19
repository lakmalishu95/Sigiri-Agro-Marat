import React from 'react';


function Namelistitem(props){
    return(
        <li>{props.name} - course :- {props.course} Email :- {props.email}</li>

    )
}

export default Namelistitem;