import React from 'react';
import "./hero.scss"
import hero from "../images/illustration-hero.svg"
const Hero = () => {
  return <div className='hero'>
      <div className="wrapper">
          <div className="left">
            <p className="title">A Simple Bookmark Manager</p>
            <div className="desc">
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </div>
            <div className="buttons">
                <button className="chormeBtn">Get it on Chrome</button>
                <button className="firefoxBtn">Get it on Firefox</button>
            </div>
          </div>
          <div className="right">
                <div className="bg"/>
                <img src={hero} alt="" />
          </div>
      </div>
  </div>;   
};

export default Hero;
