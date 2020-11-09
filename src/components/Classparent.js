import React, { Component } from 'react'

import Classchild from './Classchild';

class Classparent extends Component {
    constructor()
    {
        super();

        this.state={ 
            name:'kumar',
            email:'kumar@gmail.com',
            phone:7896541230
            
        }
    }


//HandleStateObjects

handleStateObjects=()=>
{
        this.setState({
            name:'vijaykumar',
            email:'vijaykumar@gmail.com',
            phone:990001110
        })
}

    render() {
        const {name,email,phone}=this.state;

        return (
            <div>
                <h3>PARENT_COMPONENT</h3>
                { name } - { email } - { phone } <br /><br />

                <button onClick={this.handleStateObjects}>Changes_In_Parent</button>
                <br /><br />

                <Classchild id={1001} n={name} e={email} p={phone} addr={"Hyd"} />





            </div>
        )
    }
}


export default Classparent