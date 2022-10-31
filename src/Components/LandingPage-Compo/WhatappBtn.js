import React, { useState } from "react";
import whatsapp_icon from "../../assets/img/Home_page/whatsapp_icon.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from 'react-reveal/Zoom';

export const WhatappBtn = () => {
  return (
    <>
      <Zoom top  delay={500}  duration={1000} > 
      <div className="hero_wp_icon">
        <a href="https://www.whatsapp.com/" target="/">
          <img src={whatsapp_icon} alt="whatapp" />
        </a>
      </div>
      </Zoom>
    </>
  );
};


export const BacktoTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Zoom top  delay={500}  duration={1000} > 
      <div
        className="backtotop"
        onClick={scrollToTop}
        style={{ display: visible ? "block" : "none" }}
      >
        <button id="btn-x" className="backtotop-btn">
          <KeyboardArrowUpIcon />
        </button>
      </div>
      </Zoom>
    </>
  );
};




export const Loader = () => {
  return (
    <>
      <div className="loader_block">
        <div className="loader_cover">
          <div className="preloader">
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
            <div className="preloader__square"></div>
          </div>
          <div className="status">
            Loading<span className="status__dot">.</span>
            <span className="status__dot">.</span>
            <span className="status__dot">.</span>
          </div>
        </div>
      </div>
    </>
  );

};
