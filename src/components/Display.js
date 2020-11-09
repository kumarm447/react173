import React from 'react'

const Display=(props)=> {

    return (<>
            
            <div className="container py-5">

                <h2>USER_DATA</h2>

                    { 
                        
                        props.user.map( (res,index)=>{
                    return(<ul key={index}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                            <li>{res.phone}</li>
                    </ul>)
                    }) 
                }

                
            </div>

        </>)

}


export default Display