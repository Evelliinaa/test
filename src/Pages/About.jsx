import React from "react";
import "./About.css";
import heroImg from "../assets/images/heroImg.jpg";

function About() {
  return (
    <section className="about-container">
    
      <div className="hero-image">
        <img src={heroImg} alt="Delicious pasta dish" />
      </div>

    
      <div className="about-content">
        <h1 className="about-heading">Welcome to DishDelights!</h1>
        <p className="about-tagline">
          We’re a passionate Italian cuisine lovers on a mission to unite foodies from every corner 
          of the globe. Our hearts beat for pasta—think twirly spaghetti, creamy alfredo, 
          and zesty penne—and we believe cooking should be simple, flavorful, 
          and full of adventure.
        </p>
      </div>
    </section>
  );
}

export default About;
