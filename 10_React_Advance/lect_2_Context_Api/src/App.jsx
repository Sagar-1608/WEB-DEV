import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";




export default function App() {
  const {fechBlogsPosts} = useContext(AppContext)
  useEffect(() => {
    fechBlogsPosts();
  }, []);

 
  return (

   <div className=" w-full h-full flex flex-col  items-center  justify-center">
    <Header/>  
    <Blogs/>
    <Pagination/>
   </div>

  );
}
