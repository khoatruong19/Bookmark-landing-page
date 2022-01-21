import React from 'react';
import "./navbar.scss"
import logo from "../images/logo-bookmark.svg"
import menu from "../images/icon-hamburger.svg"
const Navbar = () => {
  return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <span className='navlink'>FEAUTURES</span>
                    <span className='navlink'>PRICING</span>
                    <span className='navlink'>CONTACT</span>
                    <button className='loginBtn'>LOGIN</button>
                    <div className="burgerMenu" >
                        <img src={menu} alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
};

export default Navbar;
