// Dependencies
import 'aframe';
import React from 'react';


const Goggles = () => (
  <a-cylinder
    color="#101010"
    height="0.02"
    radius="0.8"
  >
    <a-animation
      attribute="rotation"
      delay="1000"
      dur="750"
      fill="both"
      from="-270 0 0"
      to="-90 0 0"
    />
    <a-animation
      attribute="position"
      delay="1000"
      dur="750"
      fill="both"
      from="8 0 -9"
      to="8 3.5 -9"
    />
    <a-image
      height="1"
      position="0 -.05 0"
      rotation="90 0 0"
      scale=".4 .4 .4"
      src="#goggles"
      width="2"
    />
  </a-cylinder>
);

export default Goggles;
