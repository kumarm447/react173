import React, { Component } from 'react';

class Lifecycle extends Component {

    constructor(props)
    {
        super();
        console.log("*****Constructor******")
        this.state=
        { 
            email:"" 
        }
    }

    componentWillMount()
    {
        console.log("*****componentWillMount******")
    }


    HandleChanges=()=>
    {
        this.setState({ email:'kumar.m@gmail.com' })
    }

        render() 
        {
        console.log("*****Render******")
        return (<>
            <div className="container p-5">
                <h3> This is LIFE CYCLE METHODS </h3>
                { this.state.email } <br /><br />

                <button onClick={ this.HandleChanges }>Click</button>

            </div>
        </>)
    }


    //--HTTP RESTAPI_CALLS---
    componentDidMount()
    {
        console.log("*****componentDidMount******")
    }

    //this.state.email-currentstate[default state] -> email:''
    //nextState.email-> after setState()-updated...-> kumar.m@gmail.com

    //nextState.email==this.state.email-> ''=="kumar.m@gmail.com"-> 
    //return false-> stop the execution...
    //return true-> continue the execution...



    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("*****shouldComponentUpdate******")

        if(this.state.email==nextState.email)
        {
            return false
        }
        else
        {
            return true
        }
    }



    componentWillUpdate()
    {
        console.log("*****componentWillUpdate for Server-side-updates******")
    }

   componentDidUpdate()
   {
    console.log("***** componentDidUpdate for Server-side-updates******")
   }

   componentWillUnmount()
   {
    console.log("***** componentwillUnmount******")
    alert("Do you want leave from Cuurent Component");
   }

}

export default Lifecycle
