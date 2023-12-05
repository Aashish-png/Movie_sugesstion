import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";



const useMovieTrailer= (movieId)=>{
    
    const dispatch= useDispatch()
    const getTheVideoBackground = async () => {
      //fetching the video data related to that movie id
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      data = await data.json();
  
      console.log("video optuion", data);
  
      let filterTrailer = data.results.filter((video) => video.type == "Trailer");
  
      const trailer = filterTrailer.length ? filterTrailer[0] : filterTrailer;
  
      console.log("result trailer ", trailer);
  
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      getTheVideoBackground();
    }, []);

}


export default useMovieTrailer;