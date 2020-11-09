import React from 'react'
import Mernstack from './courses/Mernstack'

const Conditionalrenderings=()=> {


//JS_DATE_OBJECT
const today=new Date().getDay();
let result="";

switch(today)
{
    case 0:  result=<h1>Today is Sunday</h1>; break;
    case 1:  result=<h1>Today is Monday</h1>; break;
    case 2:  result=<h1>Today is Tuesday</h1>; break;
    case 3:  result=<h1>Today is Wednesday</h1>; break;
    case 4:  result=<h1>Today is Thursday</h1>; break;
    case 5:  result=<h1>Today is Friday</h1>; break;
    case 6:  result=<h1>Today is Saturday</h1>; break;
    default: result=<h1>Invalid Number </h1>
}
   
    return(<>

        <div className="container p-5">
            <h3> Switch Conditional Rendering.... </h3> <br /><br />


            {  result }
           

        </div>

        </>)


}

export default Conditionalrenderings
