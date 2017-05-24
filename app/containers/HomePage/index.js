/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

// Libraries
import React, { PureComponent } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';


class HomePage extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(0, 0, 150);
    this.state = {
      earthRotation: new THREE.Euler(),
    };
    this.onAnimate = this.onAnimate.bind(this);
  }

  onAnimate() {
    this.setState({
      earthRotation: new THREE.Euler(
        0,
        this.state.earthRotation.y + 0.001,
        // Tilt of the Earth is 23.5/360
        0.0653
      ),
    });
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return (
      <React3
        height={height}
        mainCamera="camera"
        onAnimate={this.onAnimate}
        width={width}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={this.cameraPosition}
          />
          <mesh rotation={this.state.earthRotation} >
            <sphereGeometry
              radius={50}
              widthSegments={50}
              heightSegments={50}
            />
            <meshBasicMaterial>
              <texture url="earth-diffuse.jpg" />
            </meshBasicMaterial>
          </mesh>
        </scene>
      </React3>
    );
  }
}

export default HomePage;
