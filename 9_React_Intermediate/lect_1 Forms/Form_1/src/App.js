import React, { useState } from "react";

export default function App() {
  // single element tarcker
  // function changeFirstHandler(event)
  // {
  //   console.log("printing first name")
  //   console.log(event.target.value);
  // }

  // function changeLastHandler(event)
  // {
  //   console.log("printing last name")
  //   console.log(event.target.value);
  // }

  // multiple element tarck in one object


  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    comment: "",
    isvisible:true,
    mode:"Online-mode",
    favCar:"Thar"
  });


  
  function changeHandler(event) {
    const {name, value, checked, type } =event.target;
    // store the data of vareable 
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type==="checkbox"? checked:value
      };
    });
  }

 function submitHandler(event){
  event.preventDefault();
  console.log("final data is below ......")
  console.log(formData)


  }

  return (
    <div className="app flex flex-row justify-center items-center w-[100vw] h-[100vh] bg-slate-200 ">
      <form className=" border-2  border-slate-400 p-10" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          value={formData.first}
          name="first"
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.last}
          name="last"
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="enter your mail"
          onChange={changeHandler}
          value={formData.email}
          name="email"
        />
        <br/>
        <br/>
        <textarea
          placeholder="Enter comment"
          onChange={changeHandler}
          value={formData.comment}
          name="comment"
        />
        <br/>
        <br/>
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={formData.isvisible}
          name="isvisible"
          id="isvisible"
        />

        {/* attach this label to above chack box using  htmlFor */}
        <label htmlFor="isvisible">Am I visible ?</label>




       <br/>
       <br/>
      
       <fieldset>
        <legend className=" text-center">Mode</legend>
        <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Online-mode"
        id="Online-mode"
        checked={formData.mode==="Online-mode"}
       />
       <label htmlFor="Online-mode"> Online Mode </label>
       
      
       <input
        type="radio"
        onChange={changeHandler}
        name="mode"
        value="Ofline-mode"
        id="Ofline-mode"
        checked={formData.mode==="Ofline-mode"}
       />
       <label htmlFor="Ofline-mode"> Ofline Mode</label>
       

       </fieldset>

       <br/>
       <br/>


      <label htmlFor="favCar">Select Your favourite Car : </label>
       <select
       name="favCar"
       id="favCar"
       value={formData.favCar}
       onChange={changeHandler}
       >
       <option value="Scarpio">Scarpio</option>
       <option value="Thar">Thar</option>
       <option value="Fartuner">Fartuner</option>
       <option value="Legender">Legender</option>
       <option value="Defender">Defender</option>

       </select>
       <br></br>
       <div className=" text-center">
       <button className="bg-slate-600 rounded-sm p-2 m-5 hover:bg-slate-500" >Submit</button>
       </div>
       
       


       





      </form>
    </div>
  );
}
