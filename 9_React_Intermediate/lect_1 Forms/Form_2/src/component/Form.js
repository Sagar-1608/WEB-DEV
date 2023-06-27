import React, { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";

export default function Form({getData}) {
  
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: true,
    candidate: true,
    offers: true,
    notification: "Everything",
  });

  function changeHandler(event) {
    const { value, name, checked, type } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    let allFild =0;
    
    Object.values(formData).map((fild)=>{
     if(fild==="")
     {
      allFild++;
     }
    })
     
    if(allFild===0)
    {
      getData(formData);
     toast.success("Information Saved Successfully");
    }
    else{
      toast.error("Please fill in all fields")
    }

    setFormData({
    first: "",
    last: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    zip: "",
    comments: true,
    candidate: true,
    offers: true,
    notification: "Everything",
    });

    
  }
  
  return (
    <div className=" m-5">
      <form onSubmit={submitHandler} className=" flex flex-col gap-1 text-sm ">
        <label>First name</label>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          value={formData.first}
          name="first"
        ></input>

        <label>Last name</label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          value={formData.last}
          name="last"
        ></input>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="sjadhav@gmail.com"
          onChange={changeHandler}
          value={formData.email}
          name="email"
        ></input>

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className=" border-[1px] bg-transparent border-[#AEACAC]  rounded-[0.2rem] h-[25px]   optional:pl-[7px] text-slate-500 "
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Chaina">Chaina</option>
          <option value="Russia">Russia</option>
        </select>

        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
          value={formData.address}
          name="address"
          id="address"
        ></input>

        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Naldurg"
          onChange={changeHandler}
          value={formData.city}
          name="city"
          id="city"
        ></input>

        <label htmlFor="state">State/Province</label>
        <input
          type="text"
          placeholder="Maharashtra"
          onChange={changeHandler}
          value={formData.state}
          name="state"
          id="state"
        ></input>

        <label htmlFor="zip">Zip/Postal Code</label>
        <input
          type="text"
          placeholder="413602"
          onChange={changeHandler}
          value={formData.zip}
          name="zip"
          id="zip"
        ></input>

        <label className="mt-3">By Email</label>
        <div className=" flex flex-col mt-1 gap-1">
          <div className="">
            <input
              type="checkbox"
              onChange={changeHandler}
              checked={formData.comments}
              name="comments"
              id="comments"
            />
            <label className="ml-2" htmlFor="comments">
              Comments
            </label>
            <h3 className="ml-5 text-[13px]  text-slate-500 ">
              Get notified when someone posts comment on posting.
            </h3>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={changeHandler}
              checked={formData.candidate}
              name="candidate"
              id="candidate"
            />
            <label className="ml-2" htmlFor="candidate">
              Candidate
            </label>
            <h3 className="ml-5 text-[13px]  text-slate-500 ">
              Get notified when a candiadte applies for job.{" "}
            </h3>
          </div>

          <div>
            <input
              type="checkbox"
              onChange={changeHandler}
              checked={formData.offers}
              name="offers"
              id="offers"
            />
            <label className="ml-2" htmlFor="offers">
              Offers
            </label>
            <h3 className="ml-5 text-[13px]  text-slate-500 ">
              {" "}
              Get notified when a candidate accepts or rejects an offer.
            </h3>
          </div>
        </div>

        <label className="mt-3">Push Notifications </label>
        <h3 className="  mt-[-5px] text-[13px]  text-slate-500 ">
          There are delivered via SMS to your mobile phone.
        </h3>

        <div className="flex flex-col mt-1">
          <div>
            <input
            className=" bg-slate-500"
              type="radio"
              onChange={changeHandler}
              name="notification"
              value="Everything"
              id="everything"
              checked={formData.notification === "Everything"}
            />
            <label htmlFor="everything"> Everything </label>
          </div>
        
         <div>
         <input
         className="bg-slate-500 text-[#c6c8cacb]  "
            type="radio"
            onChange={changeHandler}
            name="notification"
            value="Same as Email"
            id="asEmail"
            checked={formData.notification === "Same as Email"}
          />
          <label htmlFor="asEmail"> Same as Email </label>

         </div>
          
          <div>
          <input
            type="radio"
            onChange={changeHandler}
            name="notification"
            value="No Notification"
            id="no"
            checked={formData.notification === "No Notification"}
          />
          <label htmlFor="no"> No push notification </label>

          </div>
          
        </div>

        <button className=" bg-[#1c408e] p-[0.4rem] m-1 mt-3 text-white font-medium w-[5rem] rounded-md    hover:bg-[#1f3ed8] hover:translate-y-1  hover:duration-75">Save</button>
      </form>
    </div>
  );
}
