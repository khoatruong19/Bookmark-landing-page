import React, { useState } from 'react';
import "./question.scss"
import ArrowDown from "../images/down-chevron.png"

const Question = () => {
    const [opennings, setOpennings] = useState([])


    const handleClick = (number) => {
        console.log(number)
        if(!opennings.find(item => item == number)) setOpennings(prev => [...prev, number])
        else setOpennings(opennings.filter(item => item !== number))
    }

    const setActive = (number) => {
        return opennings.find(item => item == number)
    }

  return <div className='container'>
    <div className="info">
        <p className='title'>Frequently Asked Questions</p>
        <p className="desc">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
    </div>
    <div className="questions">
        <div className="item">
            <div className="question">
                    <span className="questionTitle">What is Bookmark? </span>
                    <img onClick={() =>handleClick(10)} src={ArrowDown} alt="" width={20} height={20} />
            </div>
            <div className={`answer ${setActive(10) && "active"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores et optio voluptatibus harum aut nisi hic ea fugit eligendi necessitatibus sequi blanditiis quam quia omnis. Hic aut alias ipsa.
            </div>
        </div>
        <div className="item">
            <div className="question">
                    <span className='questionTitle'>How can I request a new browser? </span>
                    <img onClick={() => handleClick(1)}  src={ArrowDown} alt="" width={20} height={20} />
            </div>
            <div className={`answer ${setActive(1) && "active"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores et optio voluptatibus harum aut nisi hic ea fugit eligendi necessitatibus sequi blanditiis quam quia omnis. Hic aut alias ipsa.
            </div>
        </div>
        <div className="item">
            <div className="question">
                    <span className="questionTitle">Is there a mobile app? </span>
                    <img onClick={() => handleClick(2)}  src={ArrowDown} alt="" width={20} height={20} />
            </div>
            <div className={`answer ${setActive(2) && "active"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores et optio voluptatibus harum aut nisi hic ea fugit eligendi necessitatibus sequi blanditiis quam quia omnis. Hic aut alias ipsa.
            </div>
        </div>
        <div className="item">
            <div className="question">
                    <span className="questionTitle">What about other Chromium browsers? </span>
                    <img onClick={() => handleClick(3)}  src={ArrowDown} alt="" width={20} height={20} />
            </div>
            <div className={`answer ${setActive(3) && "active"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolores et optio voluptatibus harum aut nisi hic ea fugit eligendi necessitatibus sequi blanditiis quam quia omnis. Hic aut alias ipsa.
            </div>
        </div>
    </div>
    <button>More Info</button>
  </div>;
};

export default Question;
