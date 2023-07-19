import { useEffect,useState } from "react";

const KEY = "3bc9544d";

export function useMovies(query)
{
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]= useState(false);
    const [error,setError]=useState("");


    useEffect(
        function (){
          const controller = new AbortController();
        async function fetchMovies()
        {
          try{
            setIsLoading(true);
            setError("");
    
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,{signal:controller.signal});
    
            if(!res.ok) 
              throw new Error("something went wrong with fetching movies");
    
    
            const data = await res.json();
            if(data.Response === "False") throw new Error("Movie not found");
            setMovies(data.Search);
            setError("");
          }
          catch (err){
            console.log(err.message);
            if(err.name!=="AbortError"){
              setError(err.message);
            }
    
          }
          finally{
            setIsLoading(false);
          }
        }
        if(query.length<3)
        {
          setMovies([]);
          setError("");
          return;
        }
       
        fetchMovies();
        return function()
        {
          controller.abort();
        }
      },[query]);
      return {movies,isLoading,error}
}