import React, { useState } from "react";
import data from './data'
import Tours from "./Components/Tours";


const App = () => {

  // resiving data from the data.js

  const[tours,setTours] = useState(data);

  // removing card
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id!==id);
    setTours(newTours)
  }

  // when all cards are removed 
  if(tours.length===0)
  {

    return(
      <div className="refresh">
        <h2>No Tours Left</h2>


        {/* when refresh button in cleck thet time all carda are  reset  */}
        <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
        </button>
      </div>
    )

  }


  return(

  <div>

   {/* here we srend the data of tours and the Remove tour function  */}
    <Tours tours={tours} removeTour={removeTour} > </Tours>
  </div>

  )
};

export default App;
