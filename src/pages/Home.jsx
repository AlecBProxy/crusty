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
            We're not the
            <br />
            best, but at
            <br />
            least we're
            <br />
            affordable
          </h2>
        </div>
        <Link to="/order">
          <button className="order-button">Order Now!</button>
        </Link>
        <div className="banner">
          <div className="banner-text">
            Reasonably Fast Delivery * Reasonably Fast Delivery * Reasonably
            Fast Delivery *
          </div>
        </div>
        <div className="bottom-banner">
          <div className="bottom-banner-text">
            <h2>Freshly Baked Dough</h2>
            <h2>Freshly Baked Dough</h2>
            <h2>Freshly Baked Dough</h2>
          </div>

          <img src={farmhillbanner} alt="Farm Hill Banner" />
        </div>
        <img src={badge} alt="Badge" className="badge" />

        <img src={pizza} alt="Pizza" className="pizza-image" />
        <div className="testimonial-group">
          <div className="testimonial">
            <img src={face1} alt="Face 1" />
            <p>"The crust? Perfectly crispy. Just like Ma used to make."</p>
          </div>
          <div className="testimonial">
            <img src={face2} alt="Face 3" />
            <p>
              "Every other pizza joint will let you down after coming here."
            </p>
          </div>
          <div className="testimonial">
            <img src={face3} alt="Face 3" />
            <p>"Fresh. Bold. No Shortcuts."</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
