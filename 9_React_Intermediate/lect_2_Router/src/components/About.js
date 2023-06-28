import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()

    function toLab(){
        navigate("/labs")
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
    <div>On About Page</div>
  <button onClick={toLab}>Go to  Lab</button>
  <button onClick={toHaome}>Go to  Home</button>
  <button onClick={toBack}>Back</button>

  

    </div>
    
  )
}
