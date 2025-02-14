import React, { useEffect, useState } from "react";
import "./RecipeModal.css";

function RecipeModal({ recipe, onClose, onUpdate }) {
 
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState(recipe);


  useEffect(() => {
    setEditedRecipe(recipe);
  }, [recipe]);

  const handleSave = () => {
    onUpdate(editedRecipe);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
        <button className="close-button" onClick={onClose}>
          ✖
        </button>

        {isEditing ? (
          <>
            <h2>Edit Recipe</h2>
            <div className="modal-form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={editedRecipe.title}
                onChange={handleChange}
              />
            </div>
            <div className="modal-form-group">
              <label>Prep Time:</label>
              <input
                type="text"
                name="prepTime"
                value={editedRecipe.prepTime}
                onChange={handleChange}
              />
            </div>
            <div className="modal-form-group">
              <label>Cook Time:</label>
              <input
                type="text"
                name="cookTime"
                value={editedRecipe.cookTime}
                onChange={handleChange}
              />
            </div>
            <div className="modal-form-group">
              <label>Difficulty:</label>
              <select
                name="difficulty"
                value={editedRecipe.difficulty}
                onChange={handleChange}
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button className="primary-button" onClick={handleSave}>
              Save Changes
            </button>
            <button className="back-button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>{recipe.title}</h2>
            <p>
              <strong>Prep Time:</strong> {recipe.prepTime}
            </p>
            <p>
              <strong>Cook Time:</strong> {recipe.cookTime}
            </p>
            <p>
              <strong>Difficulty:</strong> {recipe.difficulty}
            </p>
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
            <button
              className="primary-button"
              onClick={() => setIsEditing(true)}
            >
              Edit Recipe
            </button>
            <button className="back-button" onClick={onClose}>
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
