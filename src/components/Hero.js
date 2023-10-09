import React from "react";

import "./CSS/hero.css";
import Slider_Main from "../assets/Slider-Main.jpg";

const Hero = () => {
  return (
    <main className="hero">
      <div className="bgImg">
        <img src={Slider_Main} alt="" />
      </div>
      <div className="hero-content">
        <h1>
          Find <span>Banquet</span> near by <br /> at best prices
        </h1>
        <button>Get Started!</button>
      </div>
    </main>
  );
};

export default Hero;
