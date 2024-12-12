import React from "react";
import "../styles/story.css";
import mainImage from "../media/main.webp";
import pizzaStory from "../media/pizza-story.webp";
import userImage from "../media/user.webp";

const StoryPage = () => {
  return (
    <div>
      <section className="hero">
        <img src={mainImage} alt="Pizza Restaurant" className="hero-img" />
        <div className="hero-text">We Offer The Most Crusty Pizza Ever</div>
      </section>
      {/* Story Section */}
      <section id="story" className="story">
        <h2>Discover Our Story</h2>
        <p>
          After more than two decades of fine-tuning, we have what you see
          today!
        </p>
        <div className="story-columns">
          <div className="column">
            <p>
              At CRUSTY PIZZA, our story is baked into every slice. Founded with
              a passion for bringing people together over exceptional flavors,
              we pride ourselves on crafting artisanal pizzas using the finest
              ingredients. From hand-stretched crust to bold, globally inspired
              toppings, every pie shines. Nestled in the heart of the community,
              CRUSTY PIZZA is where moments are made.
            </p>
          </div>
          <div className="column">
            <p>
              Whether it's a classic Margherita or a gourmet fusion creation,
              there's something for everyone. Our cozy and vibrant space is
              perfect for sharing laughter and great food. We believe a perfect
              pizza is more than just a meal—it's a tradition. Come explore our
              exciting menu and taste the difference in every slice. At CRUSTY
              PIZZA, every bite is part of our delicious journey!
            </p>
          </div>
        </div>
      </section>
      {/* Pizza Section */}
      <section className="pizza-section">
        <img src={pizzaStory} alt="Pizza" className="pizza-img" />
        <div className="pizza-overlay">
          <p>
            Every slice tells a story. 🍕 Taste the CRUSTY PIZZA difference!
          </p>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
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
      </section>
      {/* Footer */}
      <footer className="footer">
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
      </footer>
    </div>
  );
};

export default StoryPage;
