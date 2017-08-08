// Dependencies
import 'aframe';
import React from 'react';


const Lighting = () => (
  <div>
    <a-light
      color="#fff"
      intensity="0.2"
      position="-1 2 1"
      type="directional"
    />
    <a-light
      color="#fff"
      type="ambient"
    />
  </div>
);

export default Lighting;
