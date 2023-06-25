import "./App.css";
import React, { useState } from "react";

// importing the our custom element
import Aset from "./Components/Aset";
import Newproduct from "./Components/Newproduct";
import Data from "./data";

function App() {
  const [data, setData] = useState(Data);
  let count = data.length;

  function addNewproduct(formData) {
    if (formData.date === "" || formData.title === "") {
      setData(data);
    } else {
      const monts = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      // increment count for mentaoin id
      count++;

      // split date in day month and year
      let date = formData.date.split("-");

      // creating the new object
      let temp = {
        id: count,
        name: formData.title,
        day: date[2],
        month: monts[date[1] - 1],
        year: date[0],
      };

      // push and set the newproduct
      setData(Data.push(temp));
    } 
  }

  function removeProduct(id) {
      let nData = Data.filter((data) => data.id !== id);
    setData(nData);
  }
console.log(data)
console.log(Data)
  return (
    // here we need only single parant thats why we create one div
    // and add all code in that div

    <div className="cards">
      <Newproduct onSaveproduct={addNewproduct}></Newproduct>
      <Aset data={Data} removeProduct={removeProduct}></Aset>
    </div>
  );
}

export default App;

// const[tours,setTours] = useState(data);

//   // removing card
//   function removeTour(id){
//     const newTours = tours.filter(tour=>tour.id!==id);
//     setTours(newTours)
//   }

//   // when all cards are removed
//   if(tours.length===0)
//   {

//     return(
//       <div className="refresh">
//         <h2>No Tours Left</h2>

//         {/* when refresh button in cleck thet time all carda are  reset  */}
//         <button className="btn-white" onClick={()=>setTours(data)}>
//           Refresh
//         </button>
//       </div>
//     )

//   }

//   return(

//   <div>

//    {/* here we srend the data of tours and the Remove tour function  */}
//     <Tours tours={tours} removeTour={removeTour} > </Tours>
//   </div>

//   )
// };
