// Dependencies
import 'aframe';
import React from 'react';


const Logo = () => (
  <a-curvedimage
    src="#mozvr"
    radius="5.7"
    theta-length="36"
    height="1"
    position="0 2.6 -1"
    opacity="0.5"
  >
    <a-animation
      attribute="rotation"
      from="0 10 0"
      to="0 200 0"
      delay="500"
      dur="1000"
    />
  </a-curvedimage>
);

export default Logo;
