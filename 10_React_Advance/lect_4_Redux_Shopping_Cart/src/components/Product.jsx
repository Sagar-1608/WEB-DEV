// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deccrement, increment } from "../redux/Slices/CartSlice";




// const Product = () => {
//   // fetch the value of count from slice 
//   const count = useSelector((state)=>state.cart.value);

//   // to fetch the function function from slice
//   const dispatch = useDispatch(); // this return obj to call function
//   return (
//     <div>
//       {/* <button onClick={()=>dispatch(add())}>increment</button>
//       <br />
//       <br />
//       <div>{count}</div>
//       <br />
//       <br />
//       <button onClick={()=>dispatch(remove())}>deccrement</button> */}
//     </div>
//   );
// };

// export default Product;





import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove } from "../redux/Slices/CartSlice"


const Product = ({post}) => {
  const {cart} =useSelector((state)=>state);
  const dispatch =useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item Added to Cart");

  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item Remove from Cart");

  }
  
  return (
    <div
    //  className=" flex flex-col  items-center justify-center  hover:scale-110 hover:bg-white transition duration-300 ease-in gap-3 p-4 ml-5 mt-10 rounded-xl shadow-md"
    className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
    <div>
      <p className=" text-gray-700 font-semibold text-lg text-left  truncate w-40 mt-1"> {post.title}</p>
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+"..."} </p>
    </div>
    <div className="h-[180px]">
      <img src={post.image} className=" h-full w-full object-contain " />
    </div>

    <div className="flex  justify-between gap-12">

    <div>
      <p className=" text-green-600 font-semibold ">${post.price}</p>
    </div>
    {
      cart.some((p)=>p.id==post.id)? //this item present in cart 
      (<button 
      // className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1  px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
      className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
      onClick={removeFromCart}>Remove Item</button>):
      ( <button
      // className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1  px-3 uppercase  hover:bg-gray-700 hover:text-white transition duration-300 ease-in "
      className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
       onClick={addToCart}>Add to Cart</button>)
    }
    </div>

   


      
    </div>
  );
};

export default Product;
