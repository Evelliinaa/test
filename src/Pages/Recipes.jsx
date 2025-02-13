import React, { useState, useEffect } from "react";
import RecipeModal from "../Components/RecipeModal";
import "./Recipes.css";

// Import images
import foodImg1 from "../assets/images/food2.jpg";
import foodImg2 from "../assets/images/food3.jpg";

// Default recipes used if none are found in localStorage
const defaultRecipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: foodImg1,
    prepTime: "15 mins",
    cookTime: "45 mins",
    totalTime: "1 hr",
    difficulty: "Medium",
    ingredients: [
      "200g spaghetti",
      "100g minced beef",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "400g canned tomatoes",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Boil spaghetti until al dente.",
      "Cook minced beef with chopped onion and garlic until browned.",
      "Add canned tomatoes, season, and simmer.",
      "Combine with spaghetti and serve.",
    ],
  },
  {
    id: 2,
    title: "Chicken Alfredo Pasta",
    image: foodImg2,
    prepTime: "20 mins",
    cookTime: "30 mins",
    totalTime: "50 mins",
    difficulty: "Easy",
    ingredients: [
      "200g fettuccine pasta",
      "150g chicken breast, sliced",
      "1 cup heavy cream",
      "50g parmesan cheese, grated",
      "2 garlic cloves, minced",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Sauté chicken until cooked through.",
      "Add garlic, heavy cream, and parmesan; simmer.",
      "Mix pasta with sauce and serve.",
    ],
  },
];

function Recipes() {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : defaultRecipes;
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filterDifficulty, setFilterDifficulty] = useState("All");

  // Save recipes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  // Update a recipe and persist changes
  const updateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    setRecipes(updatedRecipes);
    setSelectedRecipe(updatedRecipe);
  };

  // Filter recipes based on selected difficulty
  const filteredRecipes = recipes.filter((recipe) => {
    if (filterDifficulty === "All") return true;
    return recipe.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
  });

  return (
    <main className="recipes-container">
      {/* Search & Filters Section */}
      <section className="search-filters">
        <input type="text" placeholder="Search recipes..." />
        <input type="number" placeholder="Max cook time" />
        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button className="reset-button">Reset Filters</button>
      </section>

      {/* Recipe Cards Grid */}
      <section className="recipes-list">
        {filteredRecipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            onClick={() => openModal(recipe)}
          >
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </section>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={closeModal}
          onUpdate={updateRecipe}
        />
      )}
    </main>
  );
}

export default Recipes;
