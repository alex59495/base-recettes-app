import React, { Component } from 'react';

class AjouterRecette extends Component {
  state = {
    nom: "",
    image: "",
    ingredients: "",
    instructions: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState( { [name]: value } )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const recette = { ...this.state };
    this.props.ajouterRecette(recette);
    // Reset
    Object.keys(recette).forEach((char) => {
      recette[char] = "";
    })
    this.setState( {...recette} )
  }

  render() {
    return (
      <div className="card">
        <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
          <input name="nom" type="text" value={this.state.nom} onChange={this.handleChange} placeholder="Nom de la recette"/>
          <input name="image" type="text" value={this.state.image} onChange={this.handleChange} placeholder="Nom de l'image"/>
          <textarea name="ingredients" rows="3" value={this.state.ingredients} onChange={this.handleChange} placeholder="Ingrédients"/>
          <textarea name="instructions" rows="10" value={this.state.instructions} onChange={this.handleChange} placeholder="Instructions"/>
          <button type="submit">+ Ajouter une recette</button>
        </form>
      </div>
    );
  }
}

export default AjouterRecette;