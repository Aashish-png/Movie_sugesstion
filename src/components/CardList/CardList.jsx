import React, { useEffect, useState } from "react";
import "./CardList.css";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import Videoback from "../VideoBack/Videoback";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { options } from "../../utils/constants";
import useNowPlaying from "../../hooks/useNowPlaying";
import usePopular from "../../hooks/usePopular";
import useUpcoming from "../../hooks/useUpcoming.js";
import useTopRated from "../../hooks/useTopRated";

export const CardList = () => {
  // let [movieData, setMovieData] = useState(null);
  let [variable, setVariable] = useState("nowPlaying");
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const [id, setId] = useState(null);
  const [trilaerId, setTralierId] = useState(null);
  const movies = useSelector((store) => store.movies);
  // console.log("movies", movies )
  const serachData = useSelector((store) => store.movies.searchedMovie);
  useEffect(() => {
    if (serachData) {
      setVariable("searchedMovie");
    }
  }, [serachData]);
if(variable =='nowPlaying'){

  var { nextPage, prevPage } = useNowPlaying();
}else if(variable =='popularVideos'){

  var { nextPage, prevPage } = usePopular()
}else if(variable =='topRatedMovies'){
  var { nextPage, prevPage } = useTopRated()
}else{

  var { nextPage, prevPage } = useUpcoming()
}

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
      const data = movies?.[`${str}`]?.results[0];
      dispatch(addFrontVideoData(data));
    }
    if (str == "upComingMovies") {
      setVariable("upComingMovies");
    }
  }
  const watchTrailer = (value) => {
    setopen(true);
    setId(value);
    getTheVideoBackground(value);
  };
  const trailer = useSelector((store) => store.movies?.TrailerVideo);
  // useMovieTrailer(id);
  const close = () => {
    setopen(false);
  };

  const getTheVideoBackground = async (id) => {
    //fetching the video data related to that movie id
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    data = await data.json();
    console.log("data", data, "id", id);
    if (data) {
      let filterTrailer = data.results.filter(
        (video) => video.type == "Trailer"
      );
      const trailer = filterTrailer.length ? filterTrailer[0] : filterTrailer;

      console.log("trialer ===>>?>", trailer);
      setTralierId(trailer.key);
      dispatch(addTrailerVideo(trailer));
    }
  };
  // const nexPage= ()=>{

  //   useNowPlaying({ pageNum: 2 });

  // }

  return (
    <div className="parentOfcardList">
      <div className="btns">
        <span
          style={{
            background: variable === "nowPlaying" ? " #ff000052" : "#a2828252",
          }}
          onClick={() => handleGenre("nowPlaying")}
        >
          Now Playing{" "}
        </span>{" "}
        <span
          style={{
            background:
              variable === "popularVideos" ? " #ff000052" : "#a2828252",
          }}
          onClick={() => handleGenre("popular")}
        >
          Popular{" "}
        </span>{" "}
        <span
          style={{
            background:
              variable === "topRatedMovies" ? " #ff000052" : "#a2828252",
          }}
          onClick={() => handleGenre("topRatedMovies")}
        >
          Top Rated{" "}
        </span>{" "}
        <span
          style={{
            background:
              variable === "upComingMovies" ? " #ff000052" : "#a2828252",
          }}
          onClick={() => handleGenre("upComingMovies")}
        >
          Up Coming Movies{" "}
        </span>{" "}
      </div>

      <div className="cardListMain">
        {movies?.[`${variable}`]?.results?.map((videoData) => (
          <Cards
            showTrailer={(value) => watchTrailer(value)}
            key={videoData.id}
            imgUrl={videoData?.poster_path}
            rating={videoData.vote_average}
            title={videoData.original_title}
            date={videoData?.release_date}
            id={videoData.id}
          />
        ))}

       
      </div>
      {/* next and prev Button */}
      <div className="NextAndPrev">
        <div className="childBtn">
          {" "}
          <button type="button" onClick={prevPage}>
            {" "}
            ◀ PREV 
          </button>
          <button type="button" onClick={nextPage}>
            {" "}
            NEXT ▶
          </button>
          </div>
        </div>
      {/* watch trailer  */}
      {open && (
        <div className="watchTrialerMain">
          <div className="middleDiv">
            <div className="topBand">
              {" "}
              <span>Watch Trailer</span> <span onClick={close}>❌</span>{" "}
            </div>
            <div className="videoContainer">
              <iframe
                className="iframeVideo1"
                src={`https://www.youtube.com/embed/${trilaerId}?&autoplay=1&loop=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                muted
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
