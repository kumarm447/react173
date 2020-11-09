import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const HooksApiSignup=()=> {

   const [Users,setUsers]=useState({
            name:'',
            email:'',
            location:'',
            course:'',
            phone:'',
        });


const history=useHistory();

//Object_destructing
const { name,email,location,course,phone }=Users


//get all formControls values using name and value and asisgn to state using spread Operator...
const HandleFormControlsData=(e)=>
{
    setUsers({ ...Users, [e.target.name]: e.target.value });             
}


//Submit_method
const HandleSubmitForm=async (e)=>
{
    e.preventDefault();

await axios
    .post("http://localhost:3003/react173", Users)
    .then( ()=>history.push('/hooksApi') )
}


 return (<>
            <div className="container p-5">
                        
                    <form onSubmit={ HandleSubmitForm.bind(this) }>
        
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="text" 
                                name="name"
                                className="form-control" 
                                value={name}
                                onChange={ HandleFormControlsData.bind(this) }
                                 />
                            </div>
        
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="email" 
                                name="email"
                                className="form-control" 
                                value={email}
                                onChange={ HandleFormControlsData.bind(this) }
                                />
                            </div>
        
                            <div className="form-group">
                                <label>Location</label>
                                <input 
                                type="text" 
                                name="location"
                                className="form-control" 
                                value={location}
                                onChange={ HandleFormControlsData.bind(this) }
                               />
                            </div>
        
                            <div className="form-group">
                                <label>Course</label>
                                <input 
                                type="text" 
                                name="course"
                                className="form-control" 
                                value={course}
                                onChange={ HandleFormControlsData.bind(this) }
                                 />
                            </div>
        
        
                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                type="number" 
                                name="phone"
                                className="form-control" 
                                value={phone}
                                onChange={ HandleFormControlsData.bind(this) }
                                 />
                            </div>
                    
                            <button 
                            type="submit" 
                            className="btn btn-primary">Submit</button>
        
                    </form>
        
            </div>
                </>)

}

export default HooksApiSignup