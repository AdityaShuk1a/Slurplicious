import React, { useState } from 'react';

const RecipeCard = ({ data, previousColor }) => {
  // Array of bright colors
  const brightColors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-pink-500'];

  const filteredColors = brightColors.filter((color) => color !== previousColor);

  const randomColor = filteredColors[Math.floor(Math.random() * filteredColors.length)];

  return (
    <div 
    className={` ${randomColor} rounded-lg  p-4 flex items-center justify-center`}
    style={{height : "300px", width : "300px"}}>
      <img
        src={data.image}
        alt={data.name}
        className=" w-auto rounded-md"
        style={{height: "200px", width : "200px"}}
      />
    </div>
  );
};

export default RecipeCard;
