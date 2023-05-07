import React, {useEffect} from 'react'

import {Footer, Blog, Possibility, Features, Introduction, Header} from "./containers";
import {CTA, Brand, Navbar} from "./components";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = "GPT3"
  }, []);
  return (
    <div className = "App">
        <div className = "gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Introduction />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App