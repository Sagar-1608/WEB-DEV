import React from "react";
import Testimonials from "./components/Testimonials";
import data from "./data";

const App = () => {

// console.log(Object.keys(data).length)
// console.log(typeof(data))
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     
      <div className=" text-center">
       
        <h1 className=" text-4xl font-bold ">Our Testimonials </h1>
        {/* for dash line */}
        
        <div className=" bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"> </div>
        <Testimonials data ={data}/>

      </div>
    </div>
  );
};

export default App;
