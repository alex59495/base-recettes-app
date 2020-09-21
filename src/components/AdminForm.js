import React from 'react';

const AdminForm = ({id: key, majRecette, recettes, deleteRecette}) => {
  const recette = recettes[key]
  
  const handleChange = (event, id) => {
    const { name, value } = event.target
    const recette = recettes[id]
    recette[name] = value
    majRecette(id, recette)
  }
  
  return (
    <div className="card">
      <form className="admin-form">
      <input value={recette.nom} type="text" name="nom" placeholder="Nom" onChange={e => handleChange(e, key)}/>
      <input value={recette.image} type="text" name="image" placeholder="Image" onChange={e => handleChange(e, key)}/>
      <textarea value={recette.ingredients} name="ingredients" rows="3" placeholder="Ingrédients" onChange={e => handleChange(e, key)}/>
      <textarea value={recette.instructions} name="instructions" rows="10" placeholder="Instructions" onChange={e => handleChange(e, key)}/>
      <button onClick={() => deleteRecette(key)}>Supprimer</button>
      </form>
    </div>
  );
}

export default AdminForm;