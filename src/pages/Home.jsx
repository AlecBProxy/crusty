import React from "react";
import "../styles/home.css";
import logo from "../media/logo.png";
import pizza from "../media/pizza.png";
import farmhillbanner from "../media/farmhillbanner.png";
import face1 from "../media/face1.png";
import face2 from "../media/face2.png";
import face3 from "../media/face3.png";
import { Link } from "react-router-dom";
import badge from "../media/badge.png";
import squiggle from "../media/squig.png";

const Home = () => {
  return (
    <div className="home-container">
      <main className="content">
        <div className="left-column">
          <img src={squiggle} />
          <h2 className="headline">
            We&apos;re not the
            <br />
            best, but at
            <br />
            least we&apos;re
            <br />
            affordable
          </h2>
        </div>
        <Link to="/pizza-listings">
          <button className="order-button">Order Now!</button>
        </Link>
        <div className="banner">
          <div className="banner-text">
            Reasonably Fast
            Delivery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#ee4130" }}>*</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reasonably
            Fast
            Delivery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#ee4130" }}>*</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Reasonably Fast
            Delivery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "#ee4130" }}>*</span>
          </div>
        </div>
        <div className="bottom-banner">
          <div className="bottom-banner-text">
            <h2>-Locally farmed ingredients</h2>
            <h2>-Customized pies</h2>
            <h2>-Passionate bakers</h2>
          </div>

          <img src={farmhillbanner} alt="Farm Hill Banner" />
        </div>
        <img src={badge} alt="Badge" className="badge" />

        <img src={pizza} alt="Pizza" className="pizza-image" />
        <div className="testimonial-group">
          <div className="testimonial">
            <img src={face1} alt="Face 1" />
            <p>
              &quot;The crust? Perfectly crispy. Just like Ma used to
              make.&quot;
            </p>
          </div>
          <div className="testimonial">
            <img src={face2} alt="Face 3" />
            <p>
              &quot;Every other pizza joint will let you down after coming
              here.&quot;
            </p>
          </div>
          <div className="testimonial">
            <img src={face3} alt="Face 3" />
            <p>&quot;Fresh. Bold. No Shortcuts.&quot;</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
