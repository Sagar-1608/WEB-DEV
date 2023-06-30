import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(false)
  return <div className=" w-[100vw] h-[100vh] bg-richblack-900 flex flex-col">
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  
  <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route  path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>

   
     
    <Route  path="/dashboard" element={
       <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard/>
       </PrivateRoute>
    }/>

   
   
  </Routes>
  
</div>;
}

export default App;
