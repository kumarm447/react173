import Axios from "axios";

export function EmpActions() {
        return(
        {
            type:'Employee',
            payload:[
                        { id:1, name:'kumar', email:'kumar@gmail.com', phone:7896541233 },
                        { id:2, name:'madhu', email:'madhu@gmail.com', phone:8896541232 },
                        { id:3, name:'manish', email:'manish@gmail.com', phone:9896541231 },
                        { id:4, name:'ravi', email:'ravi@gmail.com', phone:6896541230 }
                    ]
           
        })

}

export function UsersAction() {
const url="http://localhost:3001/react173";

        return(
        {
            type:'users',
            payload: Axios.get(url).then( (res)=> res.data )
        })

}


export function GlobalUserAction() {
    const url="https://jsonplaceholder.typicode.com/users";
    
            return(
            {
                type:'globalusers',
                payload: Axios.get(url).then( (res)=> res.data )
            })
    
    }