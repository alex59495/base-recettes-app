import React, { Component } from 'react';

const ColorContext = React.createContext()

class ColorProvider extends Component {
  state = {
    color: "blue",
    colorText: "white"
  }
  render() {
    return (
      <ColorContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export {ColorContext}

export default ColorProvider;