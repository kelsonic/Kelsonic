// Dependencies
import 'aframe';
import React from 'react';


const SocialMediaLinks = () => (
  <a-image
    height="3.5"
    scale="0.2 0.2 0.2"
    src="#price"
    width="7"
  >
    <a-animation
      attribute="position"
      delay="1000"
      dur="1000"
      from="0 2.8 -6"
      to="2.25 2.8 -6"
    />
  </a-image>
);

export default SocialMediaLinks;
