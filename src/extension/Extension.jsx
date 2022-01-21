import React from 'react';
import "./extension.scss"
import chrome from "../images/logo-chrome.svg"
import firefox from "../images/logo-firefox.svg"
import opera from "../images/logo-opera.svg"

import bgDot from "../images/bg-dots.svg"
const Extension = () => {
  return <div className='extension'>
      <div className="info">
        <p className='title'>Download the extension</p>
        <p className="desc">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize. </p>
      </div>
      <div className="cards">
          <div className="card">
              <div className="wrapper">
                  <div className="top">
                    <img src={chrome} alt="" />
                    <p className="title">Add to Chrome</p>
                    <p className="desc">Minimun version 62</p>
                  </div>
                  <div className="bottom">
                    <img src={bgDot} alt="" />
                    <button className="extensionBtn">
                        Add & Install Extension
                    </button>
                  </div>
              </div>
          </div>

          <div className="card">
              <div className="wrapper">
                  <div className="top">
                    <img src={firefox} alt="" />
                    <p className="title">Add to Firefox</p>
                    <p className="desc">Minimun version 55</p>
                  </div>
                  <div className="bottom">
                    <img src={bgDot} alt="" />
                    <button className="extensionBtn">
                        Add & Install Extension
                    </button>
                  </div>
              </div>
          </div>

          <div className="card">
              <div className="wrapper">
                  <div className="top">
                    <img src={opera} alt="" />
                    <p className="title">Add to Opera</p>
                    <p className="desc">Minimun version 46</p>
                  </div>
                  <div className="bottom">
                    <img src={bgDot} alt="" />
                    <button className="extensionBtn">
                        Add & Install Extension
                    </button>
                  </div>
              </div>
          </div>
      </div>
  </div>;
};

export default Extension;
