import React from "react";
import "../styles/story.css";
import steamingpizza from "../media/steamingpizza.jpg";
import pizzaStory from "../media/pizza-story.webp";
import cheesy from "../media/cheesy.png";

const StoryPage = () => {
  return (
    <div className="story-container">
      <section className="hero">
        <img src={steamingpizza} alt="Pizza Restaurant" className="hero-img" />
        {/* <div className="hero-text">A slice you can't refuse.</div> */}
      </section>
      {/* Story Section */}
      <section id="story" className="story">
        <img src={cheesy} alt="Cheese Wheel" className="cheese-wheel" />

        <h2>It's a Cheesy Tale</h2>

        <div className="story-columns">
          <div className="column">
            <p>
              At CRUSTI, we didn't set out to make the world's best pizza...good
              thing, too, because we didn't. But hey, it's good enough to make
              your taste buds sing and your wallet smile. Born in the back room
              of a "legit business" (don't ask), our pies are hand-crafted with
              just enough love to keep the health inspector off our backs. We're
              all about big flavors, bold toppings, and crust that'll make you
              say, “Yeah, this'll do.”
            </p>
          </div>
          <div className="column">
            <p>
              Whether you're a sucker for the classics or want to
              "fuggedaboutit" with something wild, we've got a pie for you. Our
              joint is cozy enough to make you feel at home at Ma's. At CRUSTI,
              it's not just about the pizza (okay, it is), but also the laughs,
              the stories, and the occasional undercooked slice. Welcome to our
              family.
            </p>
          </div>
        </div>
      </section>
      {/* Pizza Section */}
      <section className="pizza-section">
        <img src={pizzaStory} alt="Pizza" className="pizza-img" />
        <div className="pizza-overlay"></div>
      </section>
      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <i className="fas fa-comments testimonial-icon"></i>
        <h2 className="testimonials-title">Testimonials</h2>
        <h2>What Our Clients Think About Us</h2>
        <div className="testimonial">
          <img src={userImage} alt="Client" />
          <p>
            "Yo, CRUSTY PIZZA is legit my fave spot! The crust is sooo crispy,
            and the toppings? Ugh, soooo fresh and delish. It’s perfect for
            hanging out with my girls or grabbing a chill dinner. The vibe is
            cozy, and everyone there is super sweet. Honestly, if you haven’t
            been, what are you even doing?!"
          </p>
          <p>
            <strong>- Jennifer Smith</strong>
          </p>
        </div>
      </section> */}
      {/* Footer */}
      {/* <footer className="footer">
        <p> Back to Top</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default StoryPage;
