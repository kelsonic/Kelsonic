// Dependencies
import 'aframe';
import React from 'react';
// Images
const man = require('../assets/images/man.dae');
const fall = require('../assets/images/fall.png');
const goggles = require('../assets/images/goggles.png');
const mozvr = require('../assets/images/mozvr.png');
const price = require('../assets/images/price.png');
const radialShadow = require('../assets/images/radial-shadow-2.png');
const shoes = require('../assets/images/shoes.png');


const Assets = () => (
  <a-assets>
    <a-asset-item id="why-male-models" src={man} ></a-asset-item>
    <img alt="fall" id="fall" src={fall} />
    <img alt="goggles" id="goggles" src={goggles} />
    <img alt="mozvr" id="mozvr" src={mozvr} />
    <img alt="price" id="price" src={price} />
    <img alt="shadow2" id="shadow2" src={radialShadow} />
    <img alt="shoes" id="shoes" src={shoes} />
  </a-assets>
);

export default Assets;
