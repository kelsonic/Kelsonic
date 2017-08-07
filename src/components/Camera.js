// Depencies
import 'aframe';
import 'aframe-environment-component';
import { Entity } from 'aframe-react';
import React from 'react';


const Camera = () => (
  <Entity primitive="a-camera">
    <Entity
      animation__click={{
        property: 'scale',
        startEvents: 'click',
        from: '0.1 0.1 0.1',
        to: '1 1 1',
        dur: 150,
      }}
      primitive="a-cursor"
    />
  </Entity>
);

export default Camera;
