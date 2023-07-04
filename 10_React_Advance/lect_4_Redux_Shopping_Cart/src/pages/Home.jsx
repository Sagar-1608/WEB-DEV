import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";





const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading ,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProducData (){

    setLoading(true);

    try{

      const result = await fetch(API_URL);
      const data = await result.json();
      console.log(data)
      setPosts(data);
    }
    catch(error)
    {
      console.log("Data not fetched")
      setPosts([])

    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProducData();
  },[]);



  return (
    <div className="">
        { 
          loading ? <Spinner/>:
          posts.length>0 ? (
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-100 max-w-6xl p-2 space-y-10  space-x-8 min-h-[80vh]">
            {
              posts.map((post)=>(
                <Product key={post.id} post={post} />
              ))

            }
            </div>
          ):(<div className=" flex items-center justify-center "> <p>No Data Found </p></div>)

        }
    </div>
  )
};

export default Home;
