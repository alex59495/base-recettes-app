import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <footer>
        <button onClick={this.props.chargeRecette}>Remplir exemples</button>
      </footer>
    );
  }
}

export default Admin;