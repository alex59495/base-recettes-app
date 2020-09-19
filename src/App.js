import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargeRecette = () => {
    this.setState({ recettes: recettes })
  }

  render () {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <h1>Bonjour {this.state.pseudo}</h1>
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin chargeRecette={this.chargeRecette}/>
      </div>
    )
  }
}

export default App
