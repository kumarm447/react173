let initialstate=[]

export default function(state=initialstate,action)
{

    switch(action.type)
    {   
    case 'Employee':
            return(action.payload); break;
    default: 
            return state;
       
    }       

}
