import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import ColorProvider from './components/Color'

// Firebase
import withFirebase from './hoc/withFirebase'

const App = (props) => {
  const cards = Object.keys(props.recettes).map((key) => {
  return <Card details={props.recettes[key]} key={key} />
  })

  return(
    <ColorProvider>
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
    </ColorProvider>
  )
}

const WrappedComponent = withFirebase(App)

App.propTypes = {
  ajouterRecette: PropTypes.func.isRequired,
  chargeRecette: PropTypes.func.isRequired,
  majRecette: PropTypes.func.isRequired,
  recettes: PropTypes.object.isRequired,
  deleteRecette: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
}

export default WrappedComponent
