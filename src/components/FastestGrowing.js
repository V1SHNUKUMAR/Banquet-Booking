import React from "react";
import Map from "../assets/Map.png";
import Img from "../assets/Img.png";

import "./CSS/fastestGrowing.css";

const FastestGrowing = () => {
  return (
    <div className="fastestGrowing">
      {/* map */}
      <img className="map bgImg" src={Map} alt="map" />
      <div className="content">
        <div className="details">
          <h4 className="heading">World's fastest growing Banquet chain</h4>
          <p className="desc">More Destinations. More Ease. More Affordable.</p>
          <div className="records">
            <div className="first">
              <p className="text-red">800+</p>
              <p>Cities</p>
            </div>
            <div className="first">
              <p className="text-red">43000+</p>
              <p>Exclusive Banquet</p>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={Img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default FastestGrowing;
