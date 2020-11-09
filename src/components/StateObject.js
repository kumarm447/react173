import React,{  setState } from 'react'

import Classparent from './Classparent';



//child CLASSES
class StateObject extends  React.Component 
{

  constructor() 
  {
    super();
  }


  render() {
    
      return(<>  

               <div className="container pb-2">
                    <h5 className="text-center py-3">CLASS_COMPONENT_with_STATE_OBJECT</h5>

                    <Classparent />
                 
                    

               </div>
            </>)
  }

}

export default StateObject