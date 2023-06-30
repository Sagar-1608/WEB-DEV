import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {

  // user defined hooks call
  const {gif,lodding,fetchData}=useGif();
  
  return (
    <div className=" bg-green-600  w-1/3 h-[450px]  border border-black rounded-lg flex  flex-col items-center gap-4 p-5 ">
      <h1 className="text-center text-3xl underline  font-semibold">
        A Random Gif
      </h1>
      {lodding ? <Spinner></Spinner> : <img className=" w-[250px] h-[250px]" src={gif} />}

      <button
        className="w-10/12  bg-slate-400 rounded-lg text-lg py-2 "
        onClick={()=>fetchData()}
      >
        Generate
      </button>
    </div>
  );
}
