// Dependencies
import 'aframe';
import React from 'react';


const InfoLeft = () => (
  <a-curvedimage
    height=".45"
    position="0 0.9 0"
    radius="5.7"
    scale=".4 .4 .4"
    src="#fall"
    theta-length="18"
  >
    <a-animation
      attribute="rotation"
      delay="750"
      dur="1000"
      from="0 180 0"
      to="0 210 0"
    />
  </a-curvedimage>
);

export default InfoLeft;
