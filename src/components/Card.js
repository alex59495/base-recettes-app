import React from 'react';

const Card = ({ details }) => {
  const ingredients = details.ingredients
    .split(',')
    .map((ingredient) => {
      return <li key={ingredient}>{ingredient}</li>
  })
  const instructions = details.instructions
    .split('\n')
    .map((instruction) => {
      return <li key={instruction}>{instruction}</li>
  })
  const requireImage = (chemin) => {
    try {
      return require(`../img/${chemin}`);
    } catch(err) {
      return require(`../img/default.jpeg`);
    }
  }
  return (
    <div className='card'>
      <div className="image">
        <img src={requireImage(details.image)} alt={details.nom}/>
      </div>
      <div className="recette">
        <h2>{details.nom}</h2>
        <ul className='liste-ingredients'>{ingredients}</ul>
        <ol className='liste-instructions'>{instructions}</ol>
      </div>
    </div>

  );
};

export default Card;