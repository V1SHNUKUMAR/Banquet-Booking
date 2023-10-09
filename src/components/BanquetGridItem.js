import React from "react";

import "./CSS/banquetGridItem.css";
import Heart from "../assets/Heart-Icon.png";
import Comment from "../assets/Comment.png";

const BanquetGridItem = (props) => {
  const { banquet } = props;

  return (
    <div className="banquetGridItem">
      <img src={banquet} alt="banquet" />
      <div className="details">
        <div className="like-cmnts">
          <div className="like">
            <img src={Heart} alt="" />
            <p>12</p>
          </div>
          <div className="cmnt">
            <img src={Comment} alt="" />
            <p>5</p>
          </div>
        </div>
        <div className="info">
          <div className="content">
            <p className="postedBy">Posted by Catelyn stark</p>
            <div>
              <h3>Indian Banquet</h3>
              <p className="lightMeal">Light Meal</p>
              <p className="desc">
                Spicy combination of beef, beans and tomato sauce.
              </p>
              <a href="/">
                View Detail<i class="ri-arrow-right-double-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanquetGridItem;
