import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Our Amazing Website</h1>
        <p className="hero-description">
          Discover a world of possibilities and knowledge on our impressive
          platform.
        </p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="featured-content">
        <div className="content-card">
          <h2>Featured Article</h2>
          <p>Learn about the latest trends in technology and innovation.</p>
          <button className="btn btn-primary">Read More</button>
        </div>

        <div className="content-card">
          <h2>Video Showcase</h2>
          <p>Watch our captivating videos on a wide range of topics.</p>
          <button className="btn btn-primary"> Watch Now</button>
        </div>

        <div className="content-card">
          <h2>Upcoming Events</h2>
          <p>Don't miss out on our exciting upcoming events and webinars.</p>

          <button className="btn btn-primary"> View Events</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
