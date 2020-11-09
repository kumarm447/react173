import React from 'react'

const Child=( {heroName}  )=> {


      if(heroName==="abc")
      {
            throw new Error(heroName+" is a Not A Hero");
      }

    return (<>

           <div className="container py-5">
           
                 <h3>CHILD COMPONENT</h3>

                 {heroName } 

           </div>

            </>)
}

export default Child
