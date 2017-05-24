/**
*
* SolarSystem
*
*/

// Libraries
import React, { PureComponent } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
// External files
import PointCloud from './PointCloud';
import TrackballControls from './TrackballControls';

const perspectiveCameraName = 'perspectiveCamera';
const orthographicCameraName = 'orthographicCamera';
const mainCameraName = 'mainCamera';
const perspectiveCameraRotation = new THREE.Euler(0, Math.PI, 0);
const orthographicCameraRotation = new THREE.Euler(0, Math.PI, 0);
const spherePosition = new THREE.Vector3(0, 0, 150);


class SolarSystem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    const r = Date.now() * 0.0005;
    this.state = {
      ...this.state,
      earthPosition: new THREE.Vector3(Math.cos(r), Math.sin(r), Math.sin(r)).multiplyScalar(700),
      moonPosition: new THREE.Vector3(70 * Math.cos(2 * r), 150, 70 * Math.sin(r)),
      activeCameraName: perspectiveCameraName,
      paused: false,
      mainCameraPosition: new THREE.Vector3(0, 0, 2500),
    };

    // Bind methods
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onAnimate = this.onAnimate.bind(this);
    this.pause = this.pause.bind(this);
    this.frame = this.frame.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, false);

    const controls = new TrackballControls(this.MAIN_CAMERA,
      this.REACT3.node);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    controls.addEventListener('change', () => {
      this.setState({
        mainCameraPosition: this.MAIN_CAMERA.position,
      });
    });

    this.controls = controls;
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, false);

    this.controls.dispose();
    delete this.controls;
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      default:
        break;
      case 79: // O
        this.setState({
          activeCameraName: orthographicCameraName,
        });
        break;
      case 80: // P
        this.setState({
          activeCameraName: perspectiveCameraName,
        });

        break;
    }
  }

  onAnimate() {
    this.controls.update();

    if (this.state.paused) {
      return;
    }

    const r = Date.now() * 0.0005;

    this.setState({
      r,
      earthPosition: new THREE.Vector3(Math.cos(r), Math.sin(r), Math.sin(r)).multiplyScalar(700),
      moonPosition: new THREE.Vector3(560 * Math.cos(r), Math.sin(r), 560 * Math.sin(r)),
    });
  }

  pause() {
    this.setState({
      paused: !this.state.paused,
    });
  }

  frame() {
    this.setState({
      paused: false,
    }, () => {
      this.onAnimate();
      this.setState({
        paused: true,
      });
    });
  }

  render() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const {
      earthPosition,
      moonPosition,
      r,
    } = this.state;

    const aspectRatio = (0.5 * width) / height;

    return (
      <div>
        <React3
          ref={(ref) => { this.REACT3 = ref; }}
          width={width}
          height={height}
          antialias
          onAnimate={this.onAnimate}
        >
          <viewport
            x={0}
            y={0}
            width={width / 2}
            height={height}
            cameraName={this.state.activeCameraName}
          />
          <viewport
            x={width / 2}
            y={0}
            width={width / 2}
            height={height}
            cameraName={mainCameraName}
          />
          <scene>
            <perspectiveCamera
              ref={(ref) => { this.MAIN_CAMERA = ref; }}
              name={mainCameraName}
              fov={50}
              aspect={aspectRatio}
              near={1}
              far={10000}
              position={this.state.mainCameraPosition}
            />
            <object3D
              lookAt={earthPosition}
            >
              <perspectiveCamera
                name={perspectiveCameraName}
                fov={35 + (30 * Math.sin(0.5 * r))}
                aspect={aspectRatio}
                near={150}
                far={earthPosition.length()}
                rotation={perspectiveCameraRotation}
              />
              <orthographicCamera
                name={orthographicCameraName}
                left={(0.5 * width) / -2}
                right={(0.5 * width) / 2}
                top={height / 2}
                bottom={height / -2}
                near={150}
                far={earthPosition.length()}
                rotation={orthographicCameraRotation}
              />
              <mesh
                position={spherePosition}
              >
                <sphereGeometry
                  radius={5}
                  widthSegments={32}
                  heightSegments={32}
                />
                <meshBasicMaterial
                  color={0x0000ff}
                  wireframe
                />
              </mesh>
            </object3D>
            <cameraHelper
              cameraName={this.state.activeCameraName}
            />
            <object3D
              position={earthPosition}
            >
              <mesh>
                <sphereGeometry
                  radius={100}
                  widthSegments={32}
                  heightSegments={32}
                />
                <meshBasicMaterial>
                  <texture url="earth.jpg" />
                </meshBasicMaterial>
              </mesh>
              <mesh
                position={moonPosition}
              >
                <sphereGeometry
                  radius={50}
                  widthSegments={32}
                  heightSegments={32}
                />
                <meshBasicMaterial>
                  <texture url="moon.jpg" />
                </meshBasicMaterial>
              </mesh>
            </object3D>
            <PointCloud />
          </scene>
        </React3>
      </div>
    );
  }
}

export default SolarSystem;
