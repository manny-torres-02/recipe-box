import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function RecipeEntry() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const ingredients = formData.get("ingredients");

    // console.log(title, ingredients);

    setRecipe((prevRecipes) => [
      ...prevRecipes,
      { id: nanoid(), title, ingredients },
    ]);

    setTitle("");
    setIngredients("");
  };

  return (
    <div>
      <h1>Recipe Entry</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Recipe Name">Recipe Name:</label>
        <input
          id="title"
          value={title}
          type="text"
          name="title"
          placeholder="Enter recipe name"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="ingredients">Recipe:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          name="ingredients"
          placeholder="Enter your recipe here"
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <button type="submit">save </button>
      </form>
      {recipe?.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
}
