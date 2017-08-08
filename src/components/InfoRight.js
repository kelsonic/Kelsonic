// Dependencies
import 'aframe';
import React from 'react';


const InfoRight = () => (
  <a-curvedimage
    src="#shoes"
    radius="5.7"
    theta-length="18"
    height=".8"
    position="0 0.9 0"
    scale=".4 .4 .4"
  >
    <a-animation
      attribute="rotation"
      from="0 180 0"
      to="0 130 0"
      delay="750"
      dur="1000"
    />
  </a-curvedimage>
);

export default InfoRight;
