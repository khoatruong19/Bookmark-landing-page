import React from 'react';
import "./footer.scss"
import logo from "../images/logo-bookmark2.svg"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"

const Footer = () => {
  return <div className='footer'>
      <div className="form">
        <p className="member">35,000+ already joined </p>
        <p className="title">Stay up-to-date with what we’re doing </p>
        <div className="inputContainer">
            <input type="text" placeholder='Enter your email address' />
            <button>Contact us</button>
        </div>
      </div>
      <div className="bottom">
            <div className="left">
                <span className="logo">
                    <img src={logo} alt="" />
                </span>
                <span className='link'>Features</span>
                <span className='link'>Pricing</span>
                <span className='link'>Contact</span>
            </div>
            <div className="right">
                <span className="icon">
                    <img src={facebook} alt="" />
                </span>
                <span className="icon">
                    <img src={twitter} alt="" />
                </span>
            </div>
      </div>
  </div>;
};

export default Footer;
