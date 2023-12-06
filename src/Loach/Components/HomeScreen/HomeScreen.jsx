import React, { useEffect, useRef, useState } from "react";
import "./HomeScreen.css";
import { BELLICON } from "../../utltils/contants";
import { CARDS } from "../../utltils/contants";
import { DASHIMG } from "../../utltils/contants";
import { EYE } from "../../utltils/contants";
import { LOGO } from "../../utltils/contants";
import { TESTIMONIALS } from "../../utltils/contants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeScreen = () => {
  const handleDragStart = (e) => e.preventDefault();

  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState("You 'll receive an email with an invite link to join.");

  const handleEmailChange = (input) => {
    setEmail(input);
  };

  const handleSignup = () => {
    if (isValidEmail(email)) {
      setEmailMsg("You 'll receive an email with an invite link to join.");
    } else {
      setEmailMsg('Please enter a valid email.');
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const items = [
    <img
      src={TESTIMONIALS[0]}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={TESTIMONIALS[1]}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={TESTIMONIALS[2]}
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  const items2 = [
    <img
      src={TESTIMONIALS[1]}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={TESTIMONIALS[1]}
      onDragStart={handleDragStart}
      role="presentation"
    />,
    // <img  src={TESTIMONIALS[2]}  onDragStart={handleDragStart} role="presentation" />,
  ];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="MainClass">
      {!isMobile&&
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
        <div className="testiMonials  ">
          <AliceCarousel  mouseTracking items={items} />
        </div>
      </div>
    </div>
      }
      

      <div  className={`rightBox ${isMobile ? 'mobileClass' : ''}`} >
        {isMobile&&  <div className="logoMobile"> <img  src={LOGO} alt="Logo" />
                                                  <h2>LOACH</h2>        
        </div>}
  <div className="centre">
    <div className="firstRight">Sign up for exclusive access.</div>
    <div className="middleRight">
      <input
        type="email"
        placeholder="Your Email Address"
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <button onClick={handleSignup}>Get Started</button>
    </div>
    <div className="emailMsg">{emailMsg}</div>
  </div>
</div>
    </div>
  );
};

export default HomeScreen;
