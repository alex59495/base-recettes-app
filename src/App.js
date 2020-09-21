import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import withFirebase from './hoc/withFirebase'

const App = (props) => {
  const cards = Object.keys(props.recettes).map((key) => <Card details={props.recettes[key]} key={key} />)
  return(
    <div className='box'>
      <Header pseudo={props.pseudo}/>
      <h1>Bonjour {props.pseudo}</h1>
      <div className='cards'>
        {cards}
      </div>
      <Admin 
        ajouterRecette={props.ajouterRecette} 
        chargeRecette={props.chargeRecette}
        majRecette = {props.majRecette}
        recettes = { props.recettes}
        deleteRecette = {props.deleteRecette}
        pseudo = {props.pseudo}
      />
    </div>
  )
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
