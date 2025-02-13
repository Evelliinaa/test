// src/pages/Home.jsx
import React from "react";
import mainImg from "../assets/images/mainImg.jpg"; // Import the image
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      {/* Left column (text) */}
      <div className="content">
        <h1>Welcome to DishDelights!</h1>
        <h3> Savor the Flavor, One Recipe at a Time </h3>
        <p>
          Looking for mouthwatering recipes that inspire your inner chef? 
          You've come to the right place! Explore a world of delicious dishes, 
          save your favorites, and cook with confidence.
        </p>
        <p> <strong>Discover. Cook. Enjoy.</strong> </p>
      </div>

      {/* Right column (image) */}
      <div className="image-box">
        <img src={mainImg} alt="Delicious Food" />
      </div>
    </main>
  );
}

export default Home;
