// Dependencies
import { Scene } from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Externals
import BoxRotating from './components/BoxRotating';
import Camera from './components/Camera';
import Environment from './components/Environment';
import Logo from './components/Logo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <Environment />
        <Logo />
        <BoxRotating
          click={this.changeColor}
          color={this.state.color}
        />
        <Camera />
      </Scene>
    );
  }
}

export default App;
