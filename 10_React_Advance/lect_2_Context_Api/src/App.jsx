import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams  } from "react-router-dom";

// pages 
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/Category";
import Category from "./pages/Category"





export default function App() {
  const {fechBlogsPosts} = useContext(AppContext);

  //use serach and use location Hooks 

  const [searchParams, setSearchParams]  = useSearchParams();
  const location =useLocation();

  useEffect(() => {

    // finding which url is present in browser 
    const page = searchParams.get("page") ?? 1;
    // if left side of ?? is null or undefind  that time retuen right side value other wise return left side value 
    //is page there then ok if not there then set default 1


    if(location.pathname.includes("tags"))
    {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," "); 
      // (-1) last part of splited obect and replace - by space 
      //fetch data according to above info 
      fechBlogsPosts(Number(page),tag)
    }
    else if(location.pathname.includes("categories"))
    {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ") 
      fechBlogsPosts(Number(page), null, category)
    }
    else{
      // normal call for only page
      fechBlogsPosts(Number(page))
    }


    fechBlogsPosts();
  }, [location.pathname, location.search]); //dependencies of  this function  location.pathname, location.search
  // whenever change happan in this two papameter that times goes call of this function 

 
  return (

  //  <div className=" w-full h-full flex flex-col  items-center  justify-center">
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/blog/:blogId" element={<BlogPage/>} />
   <Route path="/tags/:tag" element={<TagPage/>} />
   <Route path="/categories/:category" element={<Category/>} />
   {/* here : ahead of : is perticular tag search */}
   </Routes>
    
  //  </div>

  );
}
