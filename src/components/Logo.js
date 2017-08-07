// Depencies
import 'aframe';
import { Entity } from 'aframe-react';
import React from 'react';


const Logo = () => (
  <Entity
    position={{
      x: 0,
      y: 2,
      z: -1,
    }}
    text={{
      value: 'Kelsonic | Full-Stack Developer',
      align: 'center',
    }}
  />
);

export default Logo;
