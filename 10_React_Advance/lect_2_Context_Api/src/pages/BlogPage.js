import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../BaseUrl";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";
import Header from "../components/Header";

export default function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const newUrl = "https://codehelp-apis.vercel.app/api/";

  //data fron centeral data storage
  const { loading, setLoading } = useContext(AppContext);

  //blogId
  const blogId = location.pathname.split("/").at(-1);

  // featching the in formation for related blogs
  async function fetchRelatedBlogs() {
      setLoading(true);
      let url = `${newUrl}get-blog?blogId=${blogId}`;

      try {
        const result = await fetch(url);
        const data = await result.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
      } catch (error) {
        console.log("Error in fetching the data");
        setBlog(null);
        setRelatedBlogs([]);
      }
      setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  // when location pathname is changer that tome thisfunction call

  // console.log("in blogpage")
  // console.log(blog)
  // console.log(relatedBlogs)

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        {loading ? (
          <Spinner />
        ) : blog ? (
          <div>
            <BlogDetails post={blog} />
            <h2> Related Blogs</h2>
            {relatedBlogs.map((post) => (
              <div key={post.id}><BlogDetails post={post} /></div>
            ))}
          </div>
        ) : (
          <div>blog is not avilable </div>
        )}
      </div>
    </div>
  );
}
