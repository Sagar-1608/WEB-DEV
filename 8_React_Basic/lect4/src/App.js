//components
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spiner from "./Components/Spinnner";

//API and data
import { apiUrl, filterData } from "./data";

// Toast
import { toast } from "react-toastify";

//Hooks
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loding, setLoding] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async () => {
    //while fetching data from api loding icon show
    setLoding(true);
    try {
      const res = await fetch(apiUrl);
      const apiData = await res.json();
      // savethe data into variable
      // console.log(apiData)
      setCourses(apiData.data);
    } catch (error) {
      // rendaer the toast on secreen if error
      toast.error("Something went worng");
    }
    setLoding(false);
  };

  // here we call Api by using the useEffect Hooks
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col  bg-bgDark2">
      <Navbar />

      <div className="">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loding ? (
            <Spiner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
