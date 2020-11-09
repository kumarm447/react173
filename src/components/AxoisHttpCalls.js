import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class AxoisHttpCalls extends Component {

    constructor(props)
    {
        super();
        this.state={ 
                    users:[] //empty array-for -multiple details
                    }

        console.log(props);
    }


//get all apidata
HandleReadApidata=async ()=>
{
    await axios.get('http://localhost:3001/react173').then( (apiresult)=> this.setState({  users: apiresult.data }) )
}


//delete Task
HandlingDeleteData=async(id)=>
{
    
    if(window.confirm(` Do You want delete ${id} Record data?` ) )
    {
        //alert("Write the logic of Delete data...")
        await axios.delete(`http://localhost:3001/react173/${id}`)
        
        this.HandleReadApidata();//update left data from API, after the deletethe
    }
  
}


    
    render() {
        
        return (<>

                <div className="container py-5">
                    <h3 className="py-3 text-center"> 
                    AXIOS RESTAPI CALLS.....  

                     </h3>

                   <table className="table table-dark mx-auto my-2">
                       <thead className="thead-light">
                           <tr>
                               <th>SNO</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>CITY</th>
                               <th>PHONE</th>
                               <th colSpan="3">ACTION</th>
                           </tr>
                       </thead>

                      <tbody>   {/*  step-4 */}
                            {
                                this.state.users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{res.name}</td>
                                                    <td>{res.email}</td>
                                                    <td>{res.city}</td>
                                                    <td>{res.phone}</td>
                                                    <td> <Link to={`${this.props.match.path}/view/${res.id}`} className="btn btn-primary text-white">View</Link></td>
                                                    <td> <Link to={`${this.props.match.path}/edit/${res.id}`} className="btn btn-warning text-white">Edit</Link></td>
                                                    <td> <button onClick={ ()=>this.HandlingDeleteData(res.id) } className="btn btn-danger text-white">Delete</button></td>
                                                
                                            </tr>)
                                })
                            }
                    </tbody>
                   </table>
                    
                
                </div>

        </>)
    }


    //step-3
    componentDidMount()
    {
        
        this.HandleReadApidata()
       
    }



}

export default AxoisHttpCalls