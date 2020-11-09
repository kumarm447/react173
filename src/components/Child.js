import React from 'react'

const Child=( {id,name,email}  )=> {

    return (<>

           <div className="container py-5">
           
                 <h3>CHILD COMPONENT</h3>

                 { id } - {name} - {email}

           </div>

            </>)
}

export default Child
