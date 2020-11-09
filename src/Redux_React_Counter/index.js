import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//Reducer
let initialstate={ rc:10 }
function reducer(state=initialstate,action)
{

    //console.log(action)
    
    switch(action.type)
    {
        case 'increment':
                return({ rc:state.rc+1 }); break;

        case 'decrement':
                    return({ rc:state.rc-1 }); break;

        default:
                return state

    }
}


const store=createStore(reducer);

store.dispatch({ type:'increment' })
store.dispatch({ type:'decrement' })


ReactDOM.render(<Provider store={store}>
<Counter />
</Provider> , document.getElementById('root') ); 
