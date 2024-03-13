export default function RecipeEntry() {
  const handleSubmit = (e) => {
    alert("hello");
  };

  return (
    <div>
      <h1>Recipe Entry</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Recipe Name:</label>
        <input type="text" id="title" placeholder="Enter recipe name" />

        <label htmlFor="ingredients">Recipe:</label>
        <textarea placeholder="Enter your recipe here"></textarea>
        <button type="submit">save </button>
      </form>
    </div>
  );
}
