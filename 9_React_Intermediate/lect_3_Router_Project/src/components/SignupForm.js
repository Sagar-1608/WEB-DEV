import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    cnfpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [cnfPassword, setcnfPassword] = useState(false);

  const [accountType,setAccountType] = useState("student")
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));

    // function submitHandler(event)
    // {
    //     event.preventDefault();
    //     if(formData.cnfpassword!=formData.password)
    //     {

    //         toast.error("Password do not match")
    //         return;
    //     }
    //     setIsLoggedIn(true)
    //     toast.success("Acount Create")
    //     const accountData={
    //         ...formData
    //     }
    //     console.log(accountData)
    //     navigate("/dashboard")

    // }
  }
  return (
    <div>
      {/* student and instructur  */}

      <div className=" flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border border-b-richblack-100
           border-t-0 border-r-0 border-l-0">
        <button onClick={()=>setAccountType("student")}
        className={`${accountType==="student"?"bg-richblack-900 text-richblack-5":" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} >Student</button>

        <button onClick={()=>setAccountType("instructor")} 
        className={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5":" bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} >Instructor</button>
      </div>

      <form className="flex flex-col gap-4"
        onSubmit={(event) => {
          // here submitHandler not working so thats why we use arrow function
          event.preventDefault();
          if (formData.cnfpassword != formData.password) {
            toast.error("Password do not match");
            return;
          }
          setIsLoggedIn(true);
          toast.success("Acount Created");
          const accountData = {
            ...formData,accountType
          };
          console.log(accountData);
          navigate("/dashboard");
        }}
      >
      {/* first last name */}
        <div className="flex  justify-between">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              First Name<sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.first}
              name="first"
              onChange={changeHandler}
              placeholder="Enter First Name"
            className=" bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-richblack-100
           border-t-0 border-r-0 border-l-0 focus:outline-none"/>
          </label>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Last Name<sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.last}
              name="last"
              onChange={changeHandler}
              placeholder="Enter Last Name"
            className=" bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-richblack-100
           border-t-0 border-r-0 border-l-0 focus:outline-none"/>
          </label>
        </div>

        {/* email  */}

        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]" >
            Email Address<sup className=" text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email id"
          className=" bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-richblack-100
           border-t-0 border-r-0 border-l-0 focus:outline-none"/>
        </label>

        {/* create password and confirm password  */}

        <div className="flex  justify-between">
          <label className="  relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Create Password <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
            className=" bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-richblack-100
           border-t-0 border-r-0 border-l-0 focus:outline-none"/>
            <span className=" absolute right-3 top-[38px]  cursor-pointer " onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFb2BF"  /> : <AiOutlineEye fontSize={24} fill="#AFb2BF"/>}
            </span>
          </label>

          <label className=" relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
              Confirm Password<sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={cnfPassword ? "text" : "password"}
              value={formData.cnfpassword}
              name="cnfpassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
            className=" bg-richblack-800  rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-richblack-100
           border-t-0 border-r-0 border-l-0 focus:outline-none"/>
            <span className=" absolute right-3 top-[38px]  cursor-pointer " onClick={() => setcnfPassword((prev) => !prev)}>
              {cnfPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFb2BF" /> : <AiOutlineEye fontSize={24} fill="#AFb2BF"/>}
            </span>
          </label>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
}
