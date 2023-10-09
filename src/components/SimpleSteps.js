import React from "react";

import "./CSS/simpleSteps.css";

import img1 from "../assets/Find-Banquet-1.png";
import img2 from "../assets/Booking-Your-Space-2.png";
import img3 from "../assets/Enjoy-Your-Moment-1.png";
import FindBanquete from "../assets/Find-Banquet-Icon.png";
import BookingSpace from "../assets/Bookiing-Your-Space-icon.png";
import EnjoyMoment from "../assets/Enjoy-your-moments-icon.png";

const SimpleSteps = () => {
  return (
    <div className="simpleSteps max-w-85">
      <h3 className="heading">Simple Steps</h3>
      <section className="steps">
        <div className="box" id="box-1">
          <div className="imgBox">
            <img src={img1} alt="" />
          </div>
          <div className="boxDetails">
            <img src={FindBanquete} alt="" />
            <h4>Find Banquet</h4>
            <p>
              Discover custom for your home or batch formulas for restaurants
              and commercial.
            </p>
          </div>
        </div>

        <div className="box" id="box-2">
          <div className="imgBox">
            <img src={img2} alt="" />
          </div>
          <div className="boxDetails">
            <img src={BookingSpace} alt="" />
            <h4>Booking Your Space</h4>
            <p>
              Discover custom for your home or batch formulas for restaurants
              and commercial.
            </p>
          </div>
        </div>
        <div className="box" id="box-3">
          <div className="imgBox">
            <img src={img3} alt="" />
          </div>
          <div className="boxDetails">
            <img src={EnjoyMoment} alt="" />
            <h4>Enjoy Your Moments</h4>
            <p>
              Discover custom for your home or batch formulas for restaurants
              and commercial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleSteps;
