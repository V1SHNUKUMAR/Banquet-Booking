import React from "react";

import Logo from "../assets/BanquetBooking-Logo.png";
import Download from "../assets/Download.png";

import "./CSS/footer.css";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="companyDets">
          <img src={Logo} alt="" />
          <p className="companyDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            non necessitatibus unde recusandae cumque quas soluta asperiores
            atque neque aut.
          </p>

          <div className="downloadBtns">
            <img src={Download} alt="" />
          </div>
        </div>
        <div className="linksNothers">
          <div className="col">
            <h5 className="heading top">USEFUL LINKS</h5>
            <a href="/">About Us</a>
            <a href="/">Team / Careers</a>
            <a href="/">News Blog</a>
            <a href="/">Support</a>
            <a href="/">Frames</a>
            <a href="/">Circle</a>
            <a href="/">Press Kit</a>
          </div>
          <div className="col">
            <a className="top" href="/">
              Terms & Conditions
            </a>
            <a href="/">Privacy & Policy</a>
            <a href="/">Guest Policy</a>
            <a href="/">Responsible Disclosure</a>
          </div>
          <div className="col">
            <h5 className="heading top">NEWS LETTER</h5>
            <div className="subscribe">
              <p>Subscribe To Our Newsletter</p>
              <form action="#">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom-line">
        <p>
          Copyright &#169; 2020 BanquetBooking. All rights reserved. Designed by
          GreenusysTechnology
        </p>
      </div>
    </footer>
  );
};

export default Footer;
