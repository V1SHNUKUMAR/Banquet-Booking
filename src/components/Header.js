import React from "react";

import "./CSS/header.css";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Google_Plus from "../assets/Google-Plus.png";
import Instagram from "../assets/Instagram.png";
import Login from "../assets/Login.png";
import Register from "../assets/Register.png";
import Become_Member from "../assets/Become-Member.png";
import Brand_logo from "../assets/BanquetBooking-Logo.png";
import Phone from "../assets/Phone.png";
import Working_Hours from "../assets/Working-Hours.png";
import Search_Icon from "../assets/Search-Icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="top nav">
        <div className="content">
          <div className="left">
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="/">
              <img src={Twitter} alt="facebook" />
            </a>
            <a href="/">
              <img src={Google_Plus} alt="facebook" />
            </a>
            <a href="/">
              <img src={Instagram} alt="facebook" />
            </a>
          </div>
          <div className="right">
            <a href="/">
              <img src={Login} alt="" />
              <span> Login</span>
            </a>
            <a href="/">
              <img src={Register} alt="" /> <span> Register Now</span>
            </a>
            <a href="/">
              <img src={Become_Member} alt="" /> <span> Become a Member</span>
            </a>
          </div>
        </div>
      </div>
      <div className="middle nav">
        <div className="content">
          <div className="left">
            <img src={Brand_logo} alt="brand-logo" />
          </div>
          <div className="right">
            <div className="midPart-Details">
              <div className="icon">
                <img src={Phone} alt="" />
              </div>
              <div className="label">
                <p>Call us: (+84) 123 456 789</p>
                <p>E-mail : support@Banquetbooking.com</p>
              </div>
            </div>
            <div className="midPart-Details">
              <div className="icon">
                <img src={Working_Hours} alt="" />
              </div>
              <div className="label">
                <p>Working Hours:</p>
                <p>Mon - sun (8:00am - 12:00am)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom nav">
        <div className="content">
          <div className="left">
            <div>
              <li>
                <span>Bangalore</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Chennai</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Delhi</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Gurgaon</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Hyderabad</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Kolkata</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Mumbai</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
              <li>
                <span>Noida</span>
                <i class="ri-arrow-down-s-line"></i>
              </li>
            </div>
          </div>
          <div className="right">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search cities"
            />
            <button>
              <img src={Search_Icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
