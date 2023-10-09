import React from "react";

import "./CSS/container.css";
import "../App.css";

import Search_Icon from "../assets/Search-Icon.png";
import Bangalore from "../assets/Banglore.png";
import Chennai from "../assets/Chennai.png";
import Delhi from "../assets/Delhi.png";
import Gurgaon from "../assets/Gurgaon.png";
import Hyderabad from "../assets/Hyderabad.png";
import TopBanquets from "./TopBanquets";
import SimpleSteps from "./SimpleSteps";
import FastestGrowing from "./FastestGrowing";
import Offers from "./Offers";

const Container = () => {
  return (
    <section className="container">
      {/* search bar */}
      <section className="max-w-85">
        <form action="#" className="search-bar">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Badarpur New Delhi"
            required
          />
          <input type="date" name="date" id="date" required />
          <input
            type="number"
            name="people"
            id="people"
            placeholder="People 500"
            required
          />
          <button type="submit">
            <img src={Search_Icon} alt="search" />
            <span>Search</span>
          </button>
        </form>
        <div className="cities">
          <img src={Bangalore} alt="" />
          <img src={Chennai} alt="" />
          <img src={Delhi} alt="" />
          <img src={Gurgaon} alt="" />
          <img src={Hyderabad} alt="" />
        </div>
      </section>
      {/* top banquets */}
      <TopBanquets />
      {/* Simple steps */}
      <SimpleSteps />
      {/* Fastest growing */}
      <FastestGrowing />
      <Offers />
    </section>
    // Simple Steps
  );
};

export default Container;
