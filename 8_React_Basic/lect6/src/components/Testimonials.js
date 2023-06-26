import React from 'react'
import Card from './Card'
// import React, { useState } from "react"
import {useState} from 'react'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'


export default function Testimonials(props) {
    let data = props.data;
    const n = data.length;

    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
        if(index -1 <0)
        {
            setIndex(n-1);
        }
        else
        {
            setIndex(index-1);
        }

    }

    function rightShiftHandler(){
        if(index +1 >=n)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
        
    }

    function surpriseShiftHandler(){
        let randIndex = Math.floor(Math.random()*n);
        setIndex(randIndex);
        
    }

    // console.log(index)
    // console.log(data.lenght)

  return (
    <div className='w-[50vw] h-[450px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <Card oneCard={data[index]}/>

        <div  className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button  onClick={leftShiftHandler} className=' cursor-pointer hover:text-violet-500'> 
            {<FiChevronLeft/>} </button>
            <button  onClick={rightShiftHandler} className=' cursor-pointer hover:text-violet-500'> 
            {<FiChevronRight/>} </button>   
        </div>

        <div className='mt-6'>
          <button onClick={surpriseShiftHandler}
        className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 
         cursor-pointer px-10 py-2  rounded-md font-bold  text-lg '
        >Surprise Me</button>
        </div>
        
    
    </div>
    
  )
}
