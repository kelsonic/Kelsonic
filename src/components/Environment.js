// Depencies
import 'aframe';
import 'aframe-environment-component';
import { Entity } from 'aframe-react';
import React from 'react';


const Environment = () => (
  <Entity environment="preset: starry" />
);

export default Environment;
