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

      <div>
        <button>Student</button>
        <button>Instructur</button>
      </div>

      <form
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
            ...formData,
          };
          console.log(accountData);
          navigate("/dashboard");
        }}
      >
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.first}
              name="first"
              onChange={changeHandler}
              placeholder="Enter First Name"
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.last}
              name="last"
              onChange={changeHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email id"
          />
        </label>

        <div>
          <label>
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.cnfpassword}
              name="cnfpassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Sign Up</button>
      </form>
    </div>
  );
}
