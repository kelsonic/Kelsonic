// Dependencies
import React, { Component } from 'react';
// Externals
import Scene from './components/Scene';
import Assets from './components/Assets';
import Model from './components/Model';
import Logo from './components/Logo';
import SocialMediaLinks from './components/SocialMediaLinks';
import Goggles from './components/Goggles';
import InfoLeft from './components/InfoLeft';
import InfoRight from './components/InfoRight';
import CircleSurrounding from './components/CircleSurrounding';
import Environment from './components/Environment';
import LightingAmbient from './components/LightingAmbient';
import LightingDirectional from './components/LightingDirectional';


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
        <LightingAmbient />
        <LightingDirectional />
      </Scene>
    );
  }
}

export default App;
