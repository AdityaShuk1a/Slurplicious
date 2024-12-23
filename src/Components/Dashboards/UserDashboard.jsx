import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../RecipeCard';

const UserDashboard = () => {
  const [recipes, setRecipes] = useState([]); // Initialize as an empty array

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes/meal-type/lunch');
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error('Error fetching recipe data:', error);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-5 ">Recipe</h1>
      <div
        className="bg-black mt-10 p-10 flex flex-col flex-wrap overflow-x-auto gap-11"
        style={{ width: "100%", height: "400px" }}
        id='recipeWrapper'
      >
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
              <RecipeCard key={recipe.id} data={recipe} />
            
          ))
        ) : (
          <p className="text-center col-span-full">Loading recipes...</p>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
