import React from 'react'
import "./possibility.css"
import possibilityImage from '../../assets/possibility.png';

const 
Possibility = () => {
  return(
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Get Started today</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>Catalogue with over tens of thousands of datapoints. Chat with latest GPT3 model. And much more!</p>
        <h4>Register now</h4>
      </div>
    </div>
  )
}

export default 
Possibility