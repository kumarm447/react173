import React, { Component } from 'react'

//connection of react-redux
import { connect } from 'react-redux'

//Binding Actions & Reducers
import { bindActionCreators } from 'redux'

//actions
import { EmpActions,UsersAction,GlobalUserAction }  from './../Actions/index.js'


class Blog extends Component
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.EmpActions();
        this.props.UsersAction();
        this.props.GlobalUserAction();
    }


    render()
    {
        return (<>

            <div className="container py-5">

             <h2 className="py-2">EMPDATA</h2>
             {
                        this.props.empdata.map((res,index)=>{
                            return(<ul key={index}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                            </ul>)
                        })
            } 



            <h2 className="py-2">USERDATA</h2>
             {
                        this.props.userdata.map((res,index)=>{
                            return(<ul key={index}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                            </ul>)
                        })
            } 


            <h2 className="py-2">GLOBAL_USERDATA</h2>
             {
                        this.props.globaluserdata.map((res,index)=>{
                            return(<ul key={index}>
                                <li>{res.id}</li>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                            </ul>)
                        })
            } 

            </div>

         </>)

    }
    
}

//Javascript_Function-> Collect State data from Store 
const mapStateToProps=(state)=>
{    
    //console.log(state)
    
    //object-attribute
    return({ 
        empdata: state.EmpReducer,
        userdata: state.UserReducer,
        globaluserdata: state.GlobalUserReducer
        
     })
   
}

const mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators({ EmpActions,UsersAction,GlobalUserAction }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog)