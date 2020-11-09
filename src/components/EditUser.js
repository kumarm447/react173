import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


class EditUser extends Component {

    constructor(props) {
        super(props);

        this.state=
        {
            name:'',
            email:'',
            city:'',
            course:'',
            phone:'',
        }
    }


      //name_input
      HandleNameInput=(e)=>
      {
          this.setState({ name:e.target.value  })        
      }
  
  
      //email_input
      HandleEmailInput=(e)=>
      {
          this.setState({ email: e.target.value })
      }
  
      //city_input
      HandleCityInput=(e)=>
      {
          this.setState({ city: e.target.value })
      }
  
      //course_input
      HandleCourseInput=(e)=>
      {
             this.setState({ course: e.target.value })
      }
  
  
      //phone_input
      HandlePhoneInput=(e)=>
      {
          this.setState({ phone: e.target.value })
      }



      //submit_button
HandleSubmitForm=(e)=>
{

    e.preventDefault();
    
    const formsdata={
        'name':this.state.name,
        'email':this.state.email,
        'city':this.state.city,
        'course':this.state.course,
        'phone':this.state.phone
    }

axios
.put(`http://localhost:3001/react173/${this.props.match.params.userid}`, formsdata)
.then( ()=>this.props.history.push('/restapi') )

}

    render() {
        return (<>
            <div className="container p-5">

                    <h2 className="text-center py-2">EDIT USER PROFILE DATA...</h2>
                        
            
                    <form onSubmit={ this.HandleSubmitForm.bind(this) }>
        
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.name}
                                onChange={this.HandleNameInput.bind(this) } />
                            </div>
        
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                value={this.state.email} readonly disabled
                                onChange={this.HandleEmailInput.bind(this) } />
                            </div>
        
                            <div className="form-group">
                                <label>City</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.city}
                                onChange={this.HandleCityInput.bind(this) } />
                            </div>
        
                            <div className="form-group">
                                <label>Course</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.course}
                                onChange={this.HandleCourseInput.bind(this) } />
                            </div>
        
        
                            <div className="form-group">
                                <label>Phone</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                value={this.state.phone}
                                onChange={this.HandlePhoneInput.bind(this) } />
                            </div>
                    
                            <div className="form-group">

                                <button 
                                type="submit" 
                                className="btn btn-primary">Update</button> &nbsp; &nbsp; &nbsp;

                                <Link to='/restapi' className="btn btn-primary">Goto Back</Link>
                                


                            </div>
                         
        
                    </form>
        
            </div>
                </>)
    }


    componentDidMount()
    {
        axios
        .get(`http://localhost:3001/react173/${this.props.match.params.userid}`)
        .then( (apiresult)=> this.setState(apiresult.data) )
       
    }

}




export default EditUser
