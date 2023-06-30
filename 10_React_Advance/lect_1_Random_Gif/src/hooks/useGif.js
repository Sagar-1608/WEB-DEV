import React from 'react'
import axios from "axios";
import { useEffect,useState } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
export default function useGif(tag) {
    const [gif, setGif] = useState("");
    const [lodding, setLodding] = useState(false);

  
    async function fetchData(tag) {
      setLodding(true);
      const { data } = await axios.get(tag?`${url}&tag=${tag}`:url);
      console.log(data);
  
      const imageSrc = data.data.images.downsized_large.url;
      console.log(imageSrc);
      setGif(imageSrc);
      setLodding(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return {gif,lodding,fetchData};
  
}
