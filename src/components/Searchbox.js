import React, { Component } from 'react'
import userinfo from './../posts.json';

//child_components
import Search from './Search'
import Usersdata from './Usersdata'

class Searchbox extends Component {

    constructor(props)
    {
        super();

        this.state={ 
                        users:userinfo,//display all the record into Component
                        filterdata:userinfo//check with filter Logic using Search Request...
                   }
    }

    //Filter data with search Request
    filterwithSearchRequest=(requet)=>
    {
    
    const matchdata=this.state.filterdata.filter( (data)=> {
        //return statements...
        return( 
            data.name.toLowerCase().indexOf(requet.toLowerCase() )>-1 || 
            data.email.toLowerCase().indexOf(requet.toLowerCase() )>-1 ||
            data.location.toLowerCase().indexOf(requet.toLowerCase() )>-1
            //(typeof data.phone!=="string")?false:true
            ) 

    });

    this.setState({ users:matchdata  })


    }

    render() {
        return (<> 

            <Search  searchRequest={ (result)=>this.filterwithSearchRequest(result)  } />
            <Usersdata users={this.state.users}  />

        </>)

    }

}


export default Searchbox