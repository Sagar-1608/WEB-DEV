import React, { useState } from "react";
import Card from "./Card";

export const Cards = ({ courses, category }) => {
   
    //this is for course is liked of not
     const [likedCourses, setLikedCourses] = useState([]);



    
    let allCourses = [];
  //combining the all cources info i one array

  const getCourses = () => {
     
    if(category=== "All" )
    {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
              allCourses.push(course);
            })
          })
          return allCourses;
    }
    else{
        return courses[category];

    }
    
  };

  return (
    <div className=" w-10/12 flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((singleCourse) => {
        return <Card key={singleCourse.id} singleCourse={singleCourse}
        likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>;
      })}
    </div>
  );
};

export default Cards;
