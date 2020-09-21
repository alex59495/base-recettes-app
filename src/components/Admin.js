import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'

class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.handleAuth({ user })
      }
    })
  }
  

  handleAuth = async authData => {
    const box = await base.fetch(this.props.pseudo, { context: this })
    if(!box.chef) {
      await base.post(`${this.props.pseudo}/chef`, {
        data: authData.user.uid
      })
    }
    this.setState({
      uid: authData.user.uid,
      chef: box.chef || authData.user.uid
    })
  }

  authentificate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.handleAuth)
  }

  logout = async () => {
    console.log("Deconexion");
    await firebase.auth().signOut()
    this.setState({ uid: null })
  }

  render() {
    const { chargeRecette, ajouterRecette, majRecette, recettes, deleteRecette } = this.props

    if (!this.state.uid) {
      return <Login authentificate={this.authentificate } />
    }

    const logout = <button onClick={this.logout}>Déconnexion</button>


    if (this.state.uid !== this.state.chef) {
      return(
        <div>
          <p>Tu n'es pas le chef de cette page</p>
          {logout}
        </div>
      )
    }

    return (
      <div className="cards">
        <footer>
          <button onClick={chargeRecette}>Remplir exemples</button>
          {logout}
        </footer>
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {
          Object.keys(recettes).map((key) => {
            return <AdminForm
              id={key}
              key={key}
              majRecette={majRecette}
              recettes={recettes}
              deleteRecette = {deleteRecette}
            />
          })
        }
      </div>
    );
  }
}

export default Admin;