// Dependencies
import 'aframe';
import React from 'react';


const Model = () => (
  <a-entity position="0 0 -3">
    <a-animation
      attribute="rotation"
      dur="15000"
      easing="linear"
      from="0 -30 0"
      repeat="indefinite"
      to="0 330 0"
    />
    <a-collada-model
      position="-.35 0 .55"
      rotation="0 -20 0"
      scale="1.5 1.5 1.5"
      src="#why-male-models"
    />
    <a-image
      rotation="-90 0 0"
      scale="0.5 0.5 0.5"
      src="#shadow2"
    />
  </a-entity>
);

export default Model;
