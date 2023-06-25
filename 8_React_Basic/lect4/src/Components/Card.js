import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card({ singleCourse, likedCourses, setLikedCourses }) {
  
  
  
  
    function clickHandler() {
    // pahile se hi  add ha  i
    if (likedCourses.includes(singleCourse.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== singleCourse.id));
      toast.warning("Like removed");
    } else {
      // when list is empty
      if (likedCourses.length === 0) {
        setLikedCourses([singleCourse.id]);
      } else {
        // non empty
        setLikedCourses((prev) => [...prev, singleCourse.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[250px]  bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
      <div className=" relative">
        <img src={singleCourse.image.url}></img>

        <div className=" absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-20px] flex items-center justify-center ">
          <button onClick={clickHandler}>
          {
            likedCourses.includes(singleCourse.id) ? 
            (<FcLike fontSize="2rem" /> ):( <FcLikePlaceholder fontSize="2rem"/>)
          }
            
          </button>
        </div>
      </div>

      <div className=" p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {singleCourse.title}
        </p>
        <p className="mt-2 text-white">{

            singleCourse.description.length>100? (singleCourse.description.substr(0,100)):(singleCourse.description)
        }....</p>
      </div>
    </div>
  );
}
