import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

export default function Blogs() {
  //consume the data (use the  centeralized data )
  const { posts, loading } = useContext(AppContext);
  console.log("inside Blogs")
  console.log(posts)
  console.log(posts.length)

 

  return (
    <div className=" mt-20 w-11/12 max-w-[630px] flex flex-col gap-y-8 border  shadow-md p-5 rounded-md mb-[5rem] ">
      {
            loading ? (<Spinner></Spinner>) :
            ( 
                posts.length === 0 ? (<div>No Post Found </div>) : 
                (
                    posts.map((post) => (
                        <div key={post.id}>
                        <p className=" font-bold text-lg">{post.title}</p> 
                        <p className=" text-sm">
                            By <span className=" italic">{post.author}</span> on <span className=" underline font-bold text-blue-700 ">{post.category}</span>
                        </p>
                        <p className=" text-sm mt-[1px]">Posted on {post.date} </p>
                        <p className=" text-md mt-[14px]">{post.content} </p>

                        <div className=" flex flex-row gap-x-3">
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                            })}
                        </div>
                        </div>
                    ))
                    
                )
            )
      }
    
    </div>
  );
}
