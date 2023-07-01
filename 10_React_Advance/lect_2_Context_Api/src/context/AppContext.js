
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../BaseUrl";


//context created 
export const AppContext =createContext();

//provider declartion 

export default function AppContextProvider({children}){

    const [loading ,setLoading] =useState(false)
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    // data filling 
    async function fechBlogsPosts(page=1)
    {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data)
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
        setPage(page);
        fechBlogsPosts(page);

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
    </AppContext.Provider>

}

