import React from 'react'

export default function Spinner() {
  return ( 
    <div className='  mt-[250%] mb-[250%] flex  flex-col gap-2 items-center justify-center'>
        <div className='custom-loader '></div>
        <div className=' text-xl font-bold text-blue-600'>Loading...</div>
    </div>
  )
}
