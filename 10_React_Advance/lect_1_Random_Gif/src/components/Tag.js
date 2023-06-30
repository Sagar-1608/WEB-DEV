import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {

  const [tag , setTag] = useState("CAR");

    // user defined hooks call
    const {gif,lodding,fetchData}=useGif(tag);
  
  
  
  return (
    <div className=" bg-blue-600  w-1/3 h-[450px]  border border-black rounded-lg flex  flex-col items-center gap-4 p-5 ">
      <h1 className="text-center text-3xl underline  uppercase font-semibold">
        A Random {tag} Gif
      </h1>
      {lodding ? <Spinner></Spinner> : <img className=" w-[250px] h-[250px]" src={gif} />}

      <input
      value={tag}
      onChange={(event)=>setTag(event.target.value)}
      className=" w-10/12 rounded-md outline-none text-center  uppercase"

      />

      <button
        className="w-10/12  bg-slate-400 rounded-lg text-lg py-2 "
        onClick={()=>fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
}
