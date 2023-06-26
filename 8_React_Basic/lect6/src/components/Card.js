import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Card({ oneCard }) {
  return (
    <div className=' flex flex-col md:relative'>

      <div className=' absolute top-[-7rem] left-[-1rem] z-[10] mx-auto'>
        <img className=' aspect-square rounded-full w-[140px] h-[140px] z-[25]'
          src={oneCard.image}/>
        {/* for shadow */}
        <div className='rounded-full w-[140px] h-[140px] z-[-10] bg-violet-500 absolute
        top-[-6px] left-[10px]' ></div>
      </div>

      <div className=' text-center mt-7'>
        <p className=' tracking-wider font-bold text-2xl capitalize'> {oneCard.name} </p>
        <p className=' text-violet-300 uppercase text-sm'> {oneCard.job} </p>
      </div>

      <div className=' text-violet-400 mx-auto mt-5'>
        {<FaQuoteLeft></FaQuoteLeft>}
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {oneCard.text}
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        {<FaQuoteRight></FaQuoteRight>}
      </div>

    </div>
  )
}
