// Dependencies
import 'aframe';
import React from 'react';


const CircleSurrounding = () => (
  <a-entity>
    <a-cylinder
      position="0 0.5 0"
      radius="4"
      height="1.6"
      side="back"
      open-ended="true"
      color="#FFF"
    />
  </a-entity>
);

export default CircleSurrounding;
