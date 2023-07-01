import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

 

export default function Pagination() {

    const {page,totalPages,handlePageChange} = useContext(AppContext)
  return (
    <div className=' w-full flex justify-center items-center pt-3 border mt-3  shadow-md fixed bottom-0 bg-white pb-2'>
    <div className=' w-11/12 max-w-[630px] flex justify-between '>
     <div className='flex gap-x-3'>
     { page > 1 &&
          <button 
          className=' rounded-md border-2 px-3 py-[0.1rem] '
          onClick={()=>handlePageChange(page-1)}> Previous </button>
        }
        { page<totalPages &&
           <button 
            className=' rounded-md border-2 px-3 py-[0.1rem] '
           onClick={()=>handlePageChange(page+1)}>Next</button>

        }

     </div>
       
        <p className=' font-bold text-sm'>
         Page {page} of {totalPages}
        </p>
    </div>

    </div>
  )
}
