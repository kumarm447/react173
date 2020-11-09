import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';

const url = "http://localhost:3003/react173"

const HooksApiEdit = () => {

    //State management
    const [Users, setUsers] = useState({
        id: '',
        name: '',
        email: '',
        location: '',
        course: '',
        phone: ''
    });

    const { idname } = useParams();
    const history = useHistory();

    //Object_destructing
    const { name, email, location, course, phone } = Users


    //RESTAPI_CALLS for SELECTED PARAMETER DATA
    useEffect(() => {
        axios
            .get(`${url}/${idname}`)
            .then((apiresult) => setUsers(apiresult.data))
    }, [])


    //get all formControls values using name and value and asisgn to state using spread Operator...s
    const HandleFormControlsData = (e) => {
        setUsers({ ...Users, [e.target.name]: e.target.value });
    }




    //Submit_form_Data_for_updates using put method..
    const HandleSubmitForm = async (e) => {
        e.preventDefault();

        await axios.put(`${url}/${idname}`, Users)
            .then(() => history.push('/hooksApi'))
    }


    return (<>
        <div className="container p-5">

            <form onSubmit={HandleSubmitForm.bind(this)}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        value={location}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>

                <div className="form-group">
                    <label>Course</label>
                    <input
                        type="text"
                        name="course"
                        className="form-control"
                        value={course}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>


                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="number"
                        name="phone"
                        className="form-control"
                        value={phone}
                        onChange={HandleFormControlsData.bind(this)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">Update</button>

                &nbsp;&nbsp;&nbsp;
                
                <Link 
                to="/HooksApi" 
                className="btn btn-info">GOTO BACK</Link>

            </form>

        </div>
    </>)

}


export default HooksApiEdit
