import { useState } from "react";
import "./App.css";
import Form from "./component/Form"
import Information from "./component/Information";
import { Data } from "./component/Data";

function App() {
  
  function getData(formData){
    //  console.log(formData);
     Data.push(formData)
  }
  const [form , setForm] = useState(true)

  function viewHandler(){
    setForm(!form) 
  }
 


  return (
   <div className="   flex items-center justify-center ">
   <div className=" w-[800px] m-10 border-2 border-[#c6c8cacb] relative rounded-md ">
   {
    form ? ( 
      <div>
      <Form getData={getData}></Form>
           
           <button onClick={viewHandler}
           className=" absolute bg-[#1c408e] p-[0.4rem]  bottom-[1.47rem] right-[2rem] 
            text-white font-medium w-[5rem] rounded-md
             hover:bg-[#1f3ed8] hover:translate-y-1  hover:duration-75 text-sm ">View
            </button>

    </div>
    ):(
      <div>
      <Information Data={Data}></Information>
      
      <button onClick={viewHandler}
           className=" absolute bg-[#1c408e] p-[0.4rem] bottom-[-1rem] right-[-10rem] 
            text-white font-medium w-[5rem] rounded-md
             hover:bg-[#1f3ed8] hover:translate-y-1  hover:duration-75 text-sm ">Back
            </button>

      </div>
     
      )
   }
    

   </div>
   </div>
  );
}

export default App;
