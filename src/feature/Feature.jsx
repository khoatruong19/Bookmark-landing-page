import React, { useState, useEffect } from 'react';
import "./feature.scss"
import hero from "../images/illustration-features-tab-1.svg"
import hero2 from "../images/illustration-features-tab-2.svg"
import hero3 from "../images/illustration-features-tab-3.svg"

const data = [
  {
    img: hero,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  {
    img: hero2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
    img: hero3,
    title: "Share your bookmarks ",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
  }
]

const Feature = () => {
  const [choice, setChoice] = useState(0)
  const [item, setItem] = useState(data[0])
  const setActive = (c) => {
    if(choice === c) return "active"
  }

  useEffect(() => {
    setItem(data[choice])
  },[choice])

  return <div className='feature'>
      <p className='title'>Features</p>
      <p className="desc">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      <div className="choices">
        <span className={`choice ${setActive(0)}`} onClick={() => setChoice(0)}>Simple Booking</span>
        <span className={`choice ${setActive(1)}`} onClick={() => setChoice(1)}>Speedy Searching</span>
        <span className={`choice ${setActive(2)}`} onClick={() => setChoice(2)}>Easy Sharing</span>
      </div>
      <div className="wrapper">
        <div className="left">
            <div className="bg"/>
            <img src={item.img} alt="" />
        </div>
        <div className="right">
            <p className="title">{item.title}</p>
            <div className="desc">
           {item.desc}
            </div>
            <div className="buttons">
                <button className="chormeBtn">More Info</button>
            </div>
        </div>
      </div>
  </div>;
};

export default Feature;
