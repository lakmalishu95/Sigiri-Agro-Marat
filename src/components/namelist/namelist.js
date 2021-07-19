import React from 'react';
import Namelistitem from './namelistitem';


function Namelist(){
    return(
        <React.Fragment>
            <h1>Name list</h1><br /><hr />
            <ul>
                <Namelistitem  name='isuru' course ='cs' email="lakmal@gmail.com"/>
                <Namelistitem name='niranga' course ='physical'/>
                <Namelistitem name='naveen' course ='art'/>
                <Namelistitem name='ashen' course ='managment'/>
                <Namelistitem name='kamal' course ='law'/>
            </ul>
        </React.Fragment>       
    );

}

export default Namelist;