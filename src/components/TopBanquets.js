import React from "react";

import BanquetGridItem from "./BanquetGridItem";
import "./CSS/topBanquets.css";

import Banquet_1 from "../assets/Banquet-1.png";
import Banquet_2 from "../assets/Banquet-2.png";
import Banquet_3 from "../assets/Banquet-3.png";
import Banquet_4 from "../assets/Banquet-4.png";
import Banquet_5 from "../assets/Banquet-5.png";
import Banquet_6 from "../assets/Banquet-6.png";

const TopBanquets = () => {
  const banquet_list = [
    Banquet_1,
    Banquet_2,
    Banquet_3,
    Banquet_4,
    Banquet_5,
    Banquet_6,
  ];

  return (
    <section className="topBanquets max-w-85">
      <div className="heading">
        <h2>Out Top Banquets</h2>
        <p>Make your function more impressive with BanquetBooking</p>
      </div>
      <div className="citiesGrid ">
        {banquet_list.map((currBanq, index) => (
          <BanquetGridItem key={index} banquet={currBanq} />
        ))}
      </div>
      <button>Find out More</button>
    </section>
  );
};

export default TopBanquets;
