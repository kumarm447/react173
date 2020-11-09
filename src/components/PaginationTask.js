import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Pager from './Pager'//step-4

//const url="https://jsonplaceholder.typicode.com/photos";

const url="https://jsonplaceholder.typicode.com/posts";

const PaginationTask=(props)=> {

    //State management//step-1
    const [Posts,setPosts]=useState([]);


    //Max_posts per Action Into View//step-6
    const [postsperAction,setpostsperAction]=useState(10);

    //By Default Button-1 Activated with 1-record to display First 1-10 posts//step-6
    const [currentpage,setcurrentpage]=useState(1);


    //step-9
    const indexOfLastPost=currentpage*postsperAction// 1*10-> 10-lastINdexPost
    
    //step-9
    const indexOfFirstPost=indexOfLastPost-postsperAction// 10-10->0->FirstIndexPost
    
    //step-9
    const currentPosts=Posts.slice(indexOfFirstPost,indexOfLastPost)//0,10-> -> 0-9


//RESTAPI_CALLS//step-2
useEffect(async ()=>{
    await axios.get(url).then( (apiresult)=> setPosts(apiresult.data) )
},[])


//Change Cuurent_page_button_Activation with Pagination_numbers......
//step-10
const paginate=(no)=>
{
    setcurrentpage(no);//1,2 3,......Number Seriers.....
}

    return(<>
        <div className="container py-5">

            
            <Pager  
            postsperAction={postsperAction} //step-7
            totalPosts={Posts.length} //step-7
            paginate={ (res)=>paginate(res) } //step-11
            />

            <div className="row">

                {
                    //Posts.map( (res,index)=>{//step-3}---

                    currentPosts.map( (res,index)=>{
                        return(
                        <div className="col-lg-4" key={index}>

                                <div className="card my-2">
                                   
                                    {/*<img src={res.thumbnailUrl} className="card-img-top" />*/}
                                   
                                    <div className="card-body">
                                        <h6 className="card-text">
                                                {res.id}.{res.title}
                                        </h6>

                                        <p classname="text-justify">
                                            {res.body}
                                        </p>
                                
                                    </div>
                                </div>
                        </div>
                        )
                    })
                }

            </div>


            
        </div>
    </>)
}

export default PaginationTask