import React, { useState } from "react";
import "./Cards.css";
import { IMG_URL } from "../../utils/constants";
import { dummyImg } from "../../utils/constants";

const Cards = ({ imgUrl, rating, title, date ,showTrailer, id}) => {
  const releaseDate = new Date(date);
  const formattedDate = releaseDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [showTrailerValue, setShowTrailerValue] = useState(false);

  if (!imgUrl) imgUrl = dummyImg;
  else imgUrl = IMG_URL + imgUrl;

  // function showTrailer() {
  //   console.log("called ")
  //   setShowTrailerValue(!showTrailerValue);
  // }
  const handleClick=()=>{
    const value="hi there form card  "+title
    showTrailer(id)

  }

  return (
    <div className="mainsCards" style={{cursor:'pointer'}} onClick={handleClick}>
      <div className="ratingdiv">
        {" "}
        <span>{rating}</span> <span>⭐</span>
      </div>
      <div className="topimg">
        <img src={imgUrl} alt="cover Image" />
      </div>
      <div className="bottom">
        <span>{title} </span>
        <span> {formattedDate}</span>
      </div>


      {/* {showTrailerValue &&
        <div className="showtrailerdiv">





        </div>
      
      
      
      } */}


    </div>
  );
};

export default Cards;
