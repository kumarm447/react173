import React, { Component } from 'react'

//react-redux connection into React Component
import { connect } from 'react-redux'

class Counter extends Component {

    constructor(props)
    {
        super(props);
    }

    increment=()=>
    {
        this.props.dispatch({ type:'increment' })
    }

    decrement=()=>
    {
        this.props.dispatch({ type:'decrement' })
    }

    render() {
        return (
            
            <div className="text-center">
                
                <h4 className="py-5">counter Example</h4>      

                <button onClick={ this.increment }>+</button> &nbsp;&nbsp;
                
                <span>{ this.props.count }</span>  &nbsp;&nbsp;

                <button onClick={ this.decrement }>-</button> 
                
            </div>
        )
    }
}


//Javascript_Function-> Collect State data from Store 
const mapStateToProps=(state)=>
{
   
    return({
        count:state.rc
    })
}

//export default Counter -> In React only 
export default connect(mapStateToProps)(Counter)//React-Redux
