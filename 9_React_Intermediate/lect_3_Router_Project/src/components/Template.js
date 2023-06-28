import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Template({title, des1, des2, image, formType , setIsLoggedIn }) {
  return (
    <div>
      <div>
      <h1>{title}</h1>

      <p>
        <span>{des1}</span>
        <span>{des2}</span>
      </p>

      {
        formType==="signup"?
        (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn ={setIsLoggedIn}/>)
      }

      <div>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>

      <button>
        <p>Sign Up With Google</p>
      </button>
      </div>

      <div>
    <img
      src={frameImage}
      alt='Pattren'
      width={558}
      height={504}
      loading='lazy'
    />
    <img
      src={image}
      alt='Pattren'
      width={558}
      height={490}
      loading='lazy'
    />


      </div>
    </div>
  )
}
