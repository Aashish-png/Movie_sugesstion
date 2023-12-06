import React, { useEffect, useRef, useState } from "react";
import "./HomeScreen.css";
import { BELLICON } from "../../utltils/contants";
import { CARDS } from "../../utltils/contants";
import { DASHIMG } from "../../utltils/contants";
import { EYE } from "../../utltils/contants";
import { LOGO } from "../../utltils/contants";
import { TESTIMONIALS } from "../../utltils/contants";

const HomeScreen = () => {
  



  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Perform additional actions on mouse down if needed
  };

  const handleMouseMove = (i) => {
    if (isDragging) {
      // Perform your function while the mouse is moved
    //   console.log('Mouse is being moved while dragging',e);
    //   let $cursors= document.querySelectorAll('.items')
    //   console.log("cursor",$cursors)
    //   $cursors.forEach(($cursor) => {
    //       $cursor.style.transform = `translate(${e.clientX}px)`
    //       //  ${e.clientY}px)`
    //     // })
    // })

    const flavoursContainer = document.getElementById(i+'abc');
     const flavoursScrollWidth = flavoursContainer.scrollWidth;
    //  if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    // }
  };
  }
  const handleMouseUp = () => {
    setIsDragging(false);
    // Perform additional actions on mouse up if needed
  };

 const handleMouseMove1 = (e) => {
    console.log("e==>",e)
    // if (e.type === 'mousemove') {
      // $cursors.forEach(($cursor) => {
      //   $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      // })
      // console.log(e)
    // }
  }
  useEffect(()=>{

    handleMouseMove1() 

  },[isDragging==true])


  return (
    <div className="MainClass">
      <div className="leftBox">
        <img className="logo" src={LOGO} alt="Logo" />
        <div className="firstLeft">
          <div className="firstLeftChild justify">
            <div className="flexCol">
              <span className="span1">
                {" "}
                <img src={BELLICON} alt="bell" />{" "}
              </span>
              <span className="span2">
                Get notified when a highly correlated whale makes a move
              </span>
              <span className="span3">
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </span>
            </div>
          </div>
          <div className="firstLeftChild">
            <div className="notificationDiv scrolling-wrap">
              {CARDS.map((url, i) => (
                <div
                  className="imgdiv comm "
                  style={{ background: `url(${url})`, backgroundSize: "cover" }}
                >
                  {i === 1 && (
                    <span>Notify me when any wallets move more than</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="secondleft">
          <div className="centerBox">
            <div className="firstOfMiddle">
              <img src={DASHIMG} alt="homeImage" />
            </div>
            <div className="secondOfMiddle flexColRight">
              <span className="span1">
                <img src={EYE} alt="eye" />
              </span>
              <span className="span2">Watch what the whales are doing</span>
              <span className="span3">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </span>
            </div>
          </div>
        </div>
        <div className="thirdLeft">
          <div className="titleTestiMonial">
            <span> Testimonials</span>
          </div>
          <div className="testiMonials scrollable-container ">
            {TESTIMONIALS.map((url,i) => (
              <div  
              id={i+"abc"}
              className="items testimonialsDarg"
              onTouchMove={handleMouseMove1}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove(i)}
              onMouseUp={handleMouseUp}
             draggable="true">
                <img src={url} alt="testimonials" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rightBox"></div>
    </div>
  );
};

export default HomeScreen;
