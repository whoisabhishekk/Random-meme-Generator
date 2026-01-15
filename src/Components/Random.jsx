import { useEffect, useState } from "react";
import axios from "axios"
import Spinner from "./Spinner";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


function Random() {
   
    const[gif ,  setGif] = useState('')
    const [loading, setLoading] = useState(false);
    
    async function fetchData() {
            
    setLoading(true);

    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.log("API Error:", error.response?.status);
    }

    setLoading(false);
  }


    useEffect( ()=>{
        fetchData();
    },[]) 

    function clickHandler(){
    
        fetchData();   
    }
    return ( 
        <div className="w-full  bg-green-500 rounded-2xl border-black border-4
                        flex flex-col items-center gap-y-5 mt-[15px]"> 
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold"> a Random Gif</h1>
            {loading ? (<Spinner/>) : (<img src={gif} width="450" />)}
            
            <Button clickHandler={clickHandler}></Button>
        </div>
     );
}


function Button({clickHandler}) {
  return (
    <button className="relative z-0 rounded bg-yellow-400 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-yellow-600 after:transition-[all_0.3s_ease]  hover:after:w-full mb-[20px]"
    onClick={clickHandler}>
      Generate
    </button>
  )
}


export default Random;