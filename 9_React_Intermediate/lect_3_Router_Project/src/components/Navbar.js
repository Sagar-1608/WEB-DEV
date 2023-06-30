import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn =props.setIsLoggedIn;
  return (
    <div className=" flex   justify-around gap-x-40 items-center w-full py-2 mx-auto  bg-[#181f28]  border  border-b-richblack-700 border-t-0 border-l-0 border-r-0 mb-7"  >
      {/* logo  */}
      <Link to="/">
        <img className=" text-richblack-100" src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      {/* nav  */}
      <nav>
        <ul className="flex gap-x-12 text-white text-[1.2rem]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login signup dashbord logout  */}
      <div className=" flex items-center gap-x-4">

      {!isLoggedIn && 
        <Link to="/login">
        <button className=" bg-richblack-800 text-richblack-100 py-[8px]  
        px-[12px] rounded-[8px]  border  border-richblack-700  ">Log in</button>
        </Link>
      }

      {!isLoggedIn&& 
        <Link to="/signup">
        <button  className=" bg-richblack-800 text-richblack-100 py-[8px]  
        px-[12px] rounded-[8px]  border  border-richblack-700  ">Sign up</button>
        </Link>
      }

      {isLoggedIn && 
        <Link to="/">
        <button  className=" bg-richblack-800 text-richblack-100 py-[8px]  
        px-[12px] rounded-[8px]  border  border-richblack-700  "
        onClick={()=>{
          setIsLoggedIn(false)
          toast.success("Loggrd Out")

        }}>Log out</button>
        </Link>
      }

      {isLoggedIn&& <Link to="/dashboard">
        <button  className=" bg-richblack-800 text-richblack-100 py-[8px]  
        px-[12px] rounded-[8px]  border  border-richblack-700  ">Dashboard</button>
        </Link>
      }
      
        
      </div>
    </div>
  );
}
