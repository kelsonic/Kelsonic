// Dependencies
import { Scene } from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Externals
import Assets from './components/Assets';
import Model from './components/Model';
import Logo from './components/Logo';
import SocialMediaLinks from './components/SocialMediaLinks';
import Goggles from './components/Goggles';
import InfoLeft from './components/InfoLeft';
import InfoRight from './components/InfoRight';
import CircleSurrounding from './components/CircleSurrounding';
import Environment from './components/Environment';
import Lighting from './components/Lighting';


class App extends Component {
  render () {
    return (
      <Scene>
        <Assets />
        <Model />
        <Logo />
        <SocialMediaLinks />
        <Goggles />
        <InfoLeft />
        <InfoRight />
        <CircleSurrounding />
        <Environment />
        <Lighting />
      </Scene>
    );
  }
}

export default App;
