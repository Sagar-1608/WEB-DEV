import React from "react";
import { NavLink } from "react-router-dom";

export default function BlogDetails({ post }) {
  return (
    <div className="mt-[50px]">
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title} </span>
      </NavLink>

      <p>
        By
        <span> {post.author} </span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category} </span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content} </p>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
            <span>{`#${tag}`} </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

// previous code of blogdetails

{
  /* <div>
  <p className=" font-bold text-lg">{post.title}</p>
  <p className=" text-sm">
    By <span className=" italic">{post.author}</span> on{" "}
    <span className=" underline font-bold text-blue-700 ">{post.category}</span>
  </p>
  <p className=" text-sm mt-[1px]">Posted on {post.date} </p>
  <p className=" text-md mt-[14px]">{post.content} </p>

  <div className=" flex flex-row gap-x-3">
    {post.tags.map((tag, index) => {
      return (
        <span
          key={index}
          className="text-blue-700 underline font-bold text-xs mt-[5px]"
        >{`#${tag}`}</span>
      );
    })}
  </div>
</div>; */
}
