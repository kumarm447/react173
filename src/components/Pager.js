import React from 'react'

export default function Pager(props) 
{

const {postsperAction,totalPosts}=props

//Empty_Array--//step-5
var pagination=[];

//Math.ceil(...)//step-8
for(let i=1;i<=Math.ceil(totalPosts/postsperAction);i++)
{
    pagination.push(i)
}

    return (<>
       
    
                        <nav class="my-5">
                                <ul className="pagination">
                                    {
                                        pagination.map( (res,index)=>{
                                            return(<li class="page-item" key={index}>
                                                        <a 
                                                        class="page-link" 
                                                        href="#" 
                                                        onClick={()=>props.paginate(res)}//step-12
                                                        >
                                                            {res}
                                                        </a>
                                                </li>)
                                        })
                                    }
                                </ul>
                        </nav>
       


            </>)
}
