
import React from "react";
import mainImg from "../assets/images/mainImg.jpg"; 
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      {/* Left column (text) */}
      <div className="content">
        <h1>Welcome to DishDelights!</h1>
        <h3> Taste the Flavor, One Recipe at a Time </h3>
        <p>
         Love to explore different cuisines? Learn to love Italian charm. All it takes is egg, flour and some water. Some pasta water will take you to flavor town.
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
