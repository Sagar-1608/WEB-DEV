import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Support() {
    const navigate = useNavigate()

    function toAbout(){
        navigate("/about")
    }
    function toHaome()
    {
        navigate("/")
    }
    function toBack()
    {
        navigate(-1)
    }
  return (
    <div>
    <div>On Support Page</div>
  <button onClick={toAbout}>Go to  About</button>
  <button onClick={toHaome}>Go to  Home</button>
  <button onClick={toBack}>Back</button>

  

    </div>
    
  )
}
