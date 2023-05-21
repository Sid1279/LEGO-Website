import React, {useEffect} from 'react'
import {Footer, Blog, Possibility, Features, Introduction, Header} from "./containers";
import {CTA, Brand, Navbar} from "./components";
import "./App.css";
import { useLocation } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    document.title = "Dragonbricks"
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/home') {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  }, [location]);
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