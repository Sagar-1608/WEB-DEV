
import { createContext,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../BaseUrl";


//context created 
export const AppContext =createContext();

//provider declartion 

export default function AppContextProvider({children}){

    const [loading ,setLoading] =useState(false)
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate =useNavigate()



    // data filling 
    async function fechBlogsPosts(page=1, tag=null, category )
    {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag)
        {
            url += `&tag=${tag}`;
        }
        if (category)
        {
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
                 throw new Error("Something Went Wrong");
            console.log("Api Responce", data)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)

        }
        catch(error)
        {
            console.log("Error in fetching data ")
            //to intial position 
            setPage(1);
            setPosts([]);
            setTotalPages(null)

        }
        setLoading(false)

    }

    // handle pahe number 
    function handlePageChange(page){
        navigate( {search:`?page=${page}`});
        setPage(page);
        

    }

    const valueForSend={
        posts,
        setPosts,
        loading,
        setLoading, 
        page,
        setPage,
        totalPages,
        setTotalPages,
        fechBlogsPosts,
        handlePageChange
    };

   
    return<AppContext.Provider value={valueForSend}>
        {children}
    </AppContext.Provider>;

}

