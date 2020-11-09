import React, { Component } from 'react'

class Search extends Component {

    constructor(props)
    {
        super();

        this.state={ 
                       req:''
                   }
    }

    HandleReqInput=(e)=>
    {
        this.setState({ req:e.target.value  })     
        
        this.props.searchRequest(e.target.value);  //IMP

    }


    render() {
        
        return (<>

                    <div className="container py-5">

            <form>

                     <div className="form-group">
                        <label>Search With Name/Email/City </label>
                        <input 
                        type="search" 
                        className="form-control" 
                        value={this.state.req}
                        onChange={this.HandleReqInput.bind(this) } />
                        <small>{this.state.req.toLocaleUpperCase() }</small>
                    </div>

            </form>
                    </div>


              </>)

    }
}


export default Search
