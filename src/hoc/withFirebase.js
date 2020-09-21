import React, { Component } from 'react';
import base from '../base'
import recettes from '../recettes'

const withFirebase = (WrappedComponent) => {
  return (
    class HOC extends Component {
      state = {
        pseudo: this.props.match.params.pseudo,
        recettes: {}
      }

      ajouterRecette = (recette) => {
        const recettes = { ...this.state.recettes }
        recettes[`recette-${Date.now()}`] = recette
        this.setState({ recettes })
      }
    
      majRecette = (key, newRecette) => {
        const recettes = { ...this.state.recettes }
        recettes[key] = newRecette
        this.setState({ recettes })
      }
    
      deleteRecette = (key) => {
        const recettes = { ...this.state.recettes }
        recettes[key] = null
        this.setState({ recettes })
      }
    
      componentDidMount() {
        this.ref = base.syncState(`/${this.props.match.params.pseudo}/recettes/`, {
          context: this,
          state: 'recettes'
        })
      }
    
      componentWillUnmount() {
        base.removeBinding(this.ref)
      }  
    
      chargeRecette = () => {
        this.setState({ recettes: recettes })
      }

      render() {
        return (
          <WrappedComponent
            ajouterRecette = {this.ajouterRecette}
            majRecette = {this.majRecette}
            deleteRecette = {this.deleteRecette}
            chargeRecette = {this.chargeRecette}
            recettes = {this.state.recettes}
            pseudo = { this.state.pseudo }
          />
        );
      }
    }
  )
}
export default withFirebase;