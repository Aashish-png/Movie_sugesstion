import React, { useEffect, useState } from "react";
import "./CardList.css";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";

export const CardList = () => {
  // let [movieData, setMovieData] = useState(null);
  let [variable, setVariable] = useState("nowPlaying");
  const dispatch= useDispatch()

  const movies = useSelector((store) => store.movies);
  // console.log("movies", movies )
  const serachData= useSelector((store)=>store.movies.searchedMovie)
  useEffect(()=>{
    if(serachData){
      setVariable("searchedMovie");
    }

  },[serachData])

  // }
  function handleGenre(str) {
    if (str == "nowPlaying") {
      setVariable("nowPlaying");
  
    }
    if (str == "popular") {
      setVariable("popularVideos");
  
    }
    if (str == "topRatedMovies") {
      setVariable("topRatedMovies");
      const data= movies?.[`${str}`]?.results[0]
        dispatch(addFrontVideoData(data))
   
    }
    if (str == "upComingMovies") {
      setVariable("upComingMovies");
  
    }
  }

  // useEffect(() => {
  //   handleGenre('nowPlaying');
  //   // setMovieData()
  // }, []);

  return (
    <div className="parentOfcardList">
      <div className="btns">
        <span   style={{ background: variable === "nowPlaying" ? " #ff000052" : "#a2828252" }}
         onClick={() => handleGenre("nowPlaying")}>Now Playing </span>{" "}

        <span   style={{ background: variable === "popularVideos" ? " #ff000052" : "#a2828252" }}
        onClick={() => handleGenre("popular")}>Popular </span>{" "}

      <span   style={{ background: variable === "topRatedMovies" ? " #ff000052" : "#a2828252" }}
        onClick={() => handleGenre("topRatedMovies")}>Top Rated </span>{" "}

         <span   style={{ background: variable === "upComingMovies" ? " #ff000052" : "#a2828252" }}
        onClick={() => handleGenre("upComingMovies")}>Up Coming Movies </span>{" "}
      </div>

      <div className="cardListMain">
        {movies?.[`${variable}`]?.results?.map((videoData) => (
          <Cards
            key={videoData.id}
            imgUrl={videoData?.poster_path}
            rating={videoData.vote_average}
            title={videoData.original_title}
            date={videoData?.release_date}
          />
        ))}

        {/* <Cards/> */}
      </div>
    </div>
  );
};
