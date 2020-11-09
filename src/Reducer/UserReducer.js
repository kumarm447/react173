let initialstate=[]

export default function(state=initialstate,action)
{
    switch(action.type)//  action/index.js-> return{type:'users',..}
    {   
        
    case 'users':
            return(action.payload); break;
    default: 
            return state;
       
    }       

}
