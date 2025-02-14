import React, { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites() {

  const [recipes, setRecipes] = useState([]);


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("myRecipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("myRecipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (editId !== null) {
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === editId
          ? {
              ...recipe,
              title,
              description,
              prepTime,
              cookTime,
            }
          : recipe
      );
      setRecipes(updatedRecipes);
      setEditId(null); 
    } else {
    
      const newRecipe = {
        id: Date.now(),
        title,
        description,
        prepTime,
        cookTime,
      };
      setRecipes([...recipes, newRecipe]);
    }

  
    setTitle("");
    setDescription("");
    setPrepTime("");
    setCookTime("");
  };

 
  const handleEdit = (id) => {
    const recipeToEdit = recipes.find((r) => r.id === id);
    if (recipeToEdit) {
      setEditId(recipeToEdit.id);
      setTitle(recipeToEdit.title);
      setDescription(recipeToEdit.description);
      setPrepTime(recipeToEdit.prepTime);
      setCookTime(recipeToEdit.cookTime);
    }
  };


  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter((r) => r.id !== id);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="favorites-container">
      <h1>Your Personal Recipes</h1>
      <p className="favorites-tagline">
        Have a secret family recipe or a new culinary experiment with some delicious pasta? 
        Add it below and keep track of all your tasty creations!
      </p>
      
      <form onSubmit={handleSubmit} className="recipe-form">
        <h2>{editId ? "Edit Recipe" : "Add a New Recipe"}</h2>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Grandma's Apple Pie"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Tell us what makes this recipe special..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="prepTime">Prep Time:</label>
            <input
              id="prepTime"
              type="text"
              placeholder="e.g. 20 mins"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cookTime">Cook Time:</label>
            <input
              id="cookTime"
              type="text"
              placeholder="e.g. 45 mins"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="primary-button">
          {editId ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>

      
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p className="no-recipes-message">No recipes yet. Let's get cooking!</p>
        ) : (
          recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p className="description">{recipe.description}</p>

              
              {recipe.prepTime && (
                <p className="time-info">
                  <strong>Prep:</strong> {recipe.prepTime}
                </p>
              )}
              {recipe.cookTime && (
                <p className="time-info">
                  <strong>Cook:</strong> {recipe.cookTime}
                </p>
              )}

              <div className="recipe-card-buttons">
                <button onClick={() => handleEdit(recipe.id)}>Edit</button>
                <button onClick={() => handleDelete(recipe.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
