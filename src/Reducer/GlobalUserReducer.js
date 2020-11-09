let initialstate=[]

export default function(state=initialstate,action)
{
    switch(action.type)//  action/index.js-> return{type:'users',..}
    {   
        
    case 'globalusers':
            return(action.payload); break;
    default: 
            return state;
       
    }       

}
