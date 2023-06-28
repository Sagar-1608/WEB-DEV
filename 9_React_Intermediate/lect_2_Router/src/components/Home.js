import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  function toAbout(){
      navigate("/about")
  }
  function toSupport(){
    navigate("/support")
}
  function toLab()
  {
      navigate("/labs")
  }

return (
  <div>
  <div>On Home Page</div>
<button onClick={toSupport}>Go to  Support</button>
<button onClick={toAbout}>Go to  About</button>
<button onClick={toLab}>Go to  Labs</button>



  </div>
  
)
}
