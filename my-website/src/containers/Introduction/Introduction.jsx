import React from 'react'
import "./introduction.css"
import Feature from '../../components/feature/Feature';

const Introduction = () => {
  return(
    <div className="gpt3__whatgpt3 section__margin" id="introduction">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is Dragonbricks?" text="A catalogue comprising of over 90,000 pieces of data, to satisfy your search results of any minifigure, set or part." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Something a LEGO fan has never experienced before.</h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title= "Chat" text="Powered by ChatGPT. Uses firebase to login using your Google account, and allows you to ask any LEGO-related queries to GPT3." />
        <Feature title="Catalogue" text="Search for anything and everything LEGO, ranging from minifigures, sets and even parts." />
        <Feature title="Register" text="Sign up now for free! Login anytime to use our Catalogue." />
      </div>
    </div>
  )
}

export default 
Introduction