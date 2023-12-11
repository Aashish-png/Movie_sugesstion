import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import "./Videoback.css";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar.jsx"
import { Videotitle } from "../Videotitle/Videotitle.jsx";

const Videoback = ({ movieId ,title, overview}) => {
  const trailer = useSelector((store) => store.movies?.TrailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="parentIframe">
      <iframe
        className="iframeVideo"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        muted
      ></iframe>
      <SearchBar className="serachBarComponent" />
        <Videotitle  title={title}   overview={overview} />
    </div>
  );
};

export default Videoback;
