// Dependencies
import 'aframe';
import React from 'react';


const InfoRight = () => (
  <a-curvedimage
    height=".8"
    position="0 0.9 0"
    radius="5.7"
    scale=".4 .4 .4"
    src="#shoes"
    theta-length="18"
  >
    <a-animation
      attribute="rotation"
      delay="750"
      dur="1000"
      from="0 180 0"
      to="0 130 0"
    />
  </a-curvedimage>
);

export default InfoRight;
