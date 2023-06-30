import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"

export default function Template({title, des1, des2, image, formType , setIsLoggedIn }) {
  return (
    <div className='flex  justify-between w-11/12 max-w-[1180px] py-12 mx-auto gap-x-12 gap-y-0 '>
      <div className='w-11/12 max-w-[450px] -mt-5 '>
      <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.175rem] '>{title}</h1>

      <p className='mt-5'>
        <span className=' text-[1.125rem] leading-[1.625rem]  text-richblack-100'>{des1}</span>
        <br/>
        <span className=' text-blue-100 italic'>{des2}</span>
      </p>

      {
        formType==="signup"?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn ={setIsLoggedIn}/>)
      }

      <div className='flex flex-row w-full items-center my-4 gap-x-2'>
        <div className=' w-full h-[1px] bg-richblack-700'></div>
        <p className=' text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
        <div className= ' w-full h-[1px] bg-richblack-700'></div>
      </div>

      <button className=' w-full flex justify-center  items-center rounded-[8px]  font-medium text-richblack-100  border
       border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6     '>
      <FcGoogle></FcGoogle>
        <p>Sign Up With Google</p>
      </button>
      </div>

      <div className=' relative w-11/12 max-w-[450px] '>
    <img
      src={frameImage}
      alt='Pattren'
      width={558}
      height={504}
      loading='lazy'
      className=''
    />
    <img
      src={image}
      alt='Pattren'
      width={558}
      height={490}
      loading='lazy'
      className=' absolute -top-4  right-4 '
    />


      </div>
    </div>
  )
}
