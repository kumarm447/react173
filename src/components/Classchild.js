import React, { Component } from 'react'

class Classchild extends Component {

    constructor(props)
    {
            super();
            //console.log(props)
    }

    render() {

        const {id,n,e,p,addr }=this.props
        
        return (
            <div>
                <h3>CHILD_COMPONENT</h3>

                {/*
                        {this.props.n}-{this.props.e}-{this.props.p}
                */}
                 {id}-{n}-{e}-{p}-{addr}

            </div>
        )
    }
}


export default Classchild