import React, { useEffect } from "react";
import "./RecipeModal.css";

function RecipeModal({ recipe, onClose }) {
  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when closed
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button (X) in the top-right corner */}
        <button className="close-button" onClick={onClose}>✖</button>

        <h2>{recipe.title}</h2>
        <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Total Time:</strong> {recipe.totalTime}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>

        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        {/* "Back" button at the bottom */}
        <button className="back-button" onClick={onClose}>Back</button>
      </div>
    </div>
  );
}

export default RecipeModal;
