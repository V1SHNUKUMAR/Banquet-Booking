import React from "react";
import "./CSS/offers.css";
import ProfilePic from "../assets/offers-icon.png";

const Offers = () => {
  return (
    <section className="offers max-w-85">
      <div className="headingSection">
        <h4 className="heading">Offers for you</h4>
      </div>
      <div className="offersBox">
        <div className="box" id="box-1">
          <p className="name">Frank Lampard</p>
          <p className="date">20 Jan, 2020</p>

          <p className="desc">
            Make a better world through digital creative media
          </p>
          <button className="moreBtn">
            <span>More</span>
          </button>
        </div>
        <div className="box" id="box-2">
          <div className="userDet">
            <div className="profilePic">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="nameNDate">
              <p className="name">Paul Scholes</p>
              <p className="date">15 Jan, 2020</p>
            </div>
          </div>
          <hr />
          <div className="userCont">
            <p className="descHeading">
              Creative media helps million businesses grow
            </p>
            <p className="descCont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias excepturi magnam aut at quo nulla.
            </p>
            <a href="/">Real more</a>
          </div>
        </div>
        <div className="box" id="box-3">
          <div className="userDet">
            <div className="profilePic">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="nameNdate">
              <p className="name">Paul Scholes</p>
              <p className="date">15 Jan, 2020</p>
            </div>
          </div>
          <hr />
          <div className="userCont">
            <p className="descHeading">
              Creative media helps million businesses grow
            </p>
            <p className="descCont">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias excepturi magnam aut at quo nulla.
            </p>
            <a href="/">Real more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
