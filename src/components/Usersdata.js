import React from 'react'

export default function Usersdata(props) {
    return (<>
        <div className="container">
                    
                   <table className="table table-dark mx-auto my-2">
                       <thead className="thead-light">
                           <tr>
                               <th>SNO</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>CITY</th>
                               <th>PHONE</th>
                             
                           </tr>
                       </thead>

                      <tbody>   
                            {
                                props.users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{res.name}</td>
                                                    <td>{res.email}</td>
                                                    <td>{res.location}</td>
                                                    <td>{res.phone}</td>
                                                  
                                            </tr>)
                                })
                            }
                    </tbody>
                   </table>
                    
                
                </div>
    </>)
}
