import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Userprofile extends Component {

    constructor(props)
    {
        super();
        this.state={ 
                    users:{}//empty object for single object data...
                    }

        console.log(props);
    }



   
    
    render() {
        
        let {id,name,email,city,phone,course }=this.state.users

        return (<>

            

                <div className="container py-5">
                    <h3 className="py-3 text-center"> 
                    USER PROFILE DETAILS: 

                     </h3>

                   <table className="table table-dark w-50 mx-auto my-2">
                       <tr>
                           <th>ID</th>
                           <td>{id}</td>
                       </tr>
                       
                       <tr>
                           <th>NAME</th>
                           <td>{name}</td>
                       </tr>
                    
                       
                       <tr>
                           <th>EMAIL</th>
                           <td>{email}</td>
                       </tr>

                       <tr>
                           <th>CITY</th>
                           <td>{city}</td>
                       </tr>

                       <tr>
                           <th>PHONE</th>
                           <td>{phone}</td>
                       </tr>

                       <tr>
                           <th>COURSE</th>
                           <td>{course}</td>
                       </tr>                      

                       <tr>
                           <th>
                                <Link className="btn btn-primary" to="/restapi">GOTO BACK</Link>
                           </th>

                           <td>
                                <button onClick={ ()=>window.print() }  className="btn btn-success" >PRINT</button>
                           </td>
                       </tr>
                       
                   </table>
                    
                
                </div>

        </>)
    }


    //step-3
    componentDidMount()
    {
        axios
        .get(`http://localhost:3001/react173/${this.props.match.params.userid}`)
        .then( (apiresult)=> this.setState({  users: apiresult.data }) )
       
    }



}

export default Userprofile



