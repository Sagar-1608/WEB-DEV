import React from "react";
import Navbar from "./components/Navbar"
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"




const App = () => {
  return <div className="">
  <div className=" bg-slate-900">
  <Navbar></Navbar>
  </div>
  <div className="flex items-center justify-center bg-gray-100 w-[100vw]  ">
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/cart"  element={<Cart/>}/>
  </Routes>
  </div>
       
  </div>;
};

export default App;
