import React,{ useState } from 'react'

const Hooks1=()=> {

//HOOKS_INBUILT_METHODS..
const [stateName,setName]=useState('')  //this.state={ name:"kumar" }

//Handling_State_Changes....
const handleState=()=>
{
    setName("kumar1234")//state_Name_Changes by using setName Destructor...
}

    return (
        <div className="container py-5">
                <h3 className="py-2">REACT_HOOKS</h3>

                { stateName }   <br /> <br /> <br />

                <button onClick={handleState}>State_Changes</button>

        </div>
    )
}


export default Hooks1
