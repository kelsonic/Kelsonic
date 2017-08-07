// Depencies
import 'aframe';
import 'aframe-animation-component';
import { Entity } from 'aframe-react';
import React, { PropTypes } from 'react';


const BoxRotating = ({ click, color }) => (
  <Entity
    animation__rotate={{
      property: 'rotation',
      dur: 2000,
      loop: true,
      to: '360 360 360',
    }}
    animation__scale={{
      property: 'scale',
      dir: 'alternate',
      dur: 100,
      loop: true,
      to: '1.1 1.1 1.1',
    }}
    events={{ click }}
    geometry={{ primitive: 'box' }}
    id="box"
    material={{
      color,
      opacity: 0.6,
    }}
    position={{
      x: 0,
      y: 1,
      z: -3,
    }}
  >
    <Entity
      animation__scale={{
        property: 'scale',
        dir: 'alternate',
        dur: 100,
        loop: true,
        to: '2 2 2',
      }}
      geometry={{
        primitive: 'box',
        depth: 0.2,
        height: 0.2,
        width: 0.2,
      }}
      material={{ color: '#24CAFF' }}
    />
  </Entity>
);

BoxRotating.propTypes = {
  click: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default BoxRotating;
