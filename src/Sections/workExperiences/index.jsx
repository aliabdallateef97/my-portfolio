import React, { useState } from "react";
import FenceModel from "./FenceModel";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import BoardModel from "../BoardModel";
import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const WorkExperiences = () => {
  const [showExperience1, setShowExperience1] = useState(false);
  const [showExperience2, setShowExperience2] = useState(false);
  const [showExperience3, setShowExperience3] = useState(false);
  const boardImg = useTexture("./textures/workExperience.png");
  const floor = useTexture("./textures/work-floor.jpg");
  const wall = useTexture("./textures/work-wall.jpg");

  wall.repeat.set(12, 2);
  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;

  floor.repeat.set(2, 2);
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;

  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallMaterial = new THREE.MeshStandardMaterial({ map: wall });

  useFrame((state) => {
    if (state.camera.position.z < -7.5) {
        setShowExperience1(true);
    } else {
        setShowExperience1(false);
    }
    if (state.camera.position.z < -9.5) {
        setShowExperience2(true);
    } else {
        setShowExperience2(false);
    }
    if (state.camera.position.z < -10.5) {
        setShowExperience3(true);
    } else {
        setShowExperience3(false);
    }
  });

  return (
    <group position={[0, 0, -11]}>
      {/* Board */}
      <BoardModel texture={boardImg} position={[2, -0.4, 1.8]} rotation={[0, -1, 0]} positionImg={[1.15,0.59,1.28]}/>

      {/* Floor */}
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 6]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={floor} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed">
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 6]}
          position={[-2.15, 0.75, 0]}
          castShadow
        />
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 6]}
          position={[2.15, 0.75, 0]}
          castShadow
        />
      </RigidBody>

      {/* Fence Model */}
      <group position={[0, 0, 3]}>
        <RigidBody type="fixed">
          <FenceModel position={[-1.35, 0, -0.15]} />
        </RigidBody>
        <RigidBody type="fixed">
          <FenceModel position={[1.35, 0, -0.15]} />
        </RigidBody>
      </group>

      {/* HTML Text */}
      {showExperience1 && (
          <Html wrapperClass="experience" position={[-1.8, 1, 0]}>
            <h2>Front end web developer</h2>
            <p>HDR Agency / Damascus</p>
            <p>10/2023 - present</p>
            <h4>
             - Creating 3D websites with Three js and React js.
            </h4>
            <h4>- write ,debug, and implement code to meet user requirements.</h4>
            <h4>- work with most useful hooks in React.</h4>
            <h4>
              - work with libraries like : React Three Fiber , React Three Rapier ,React Three Drie .
            </h4>
          </Html>
          )}

      {showExperience2 && (
          <Html wrapperClass="experience" position={[0, 1.5, 0]}>
            <h2>Front end web developer</h2>
            <p>PerlaTech Company / Damascus</p>
            <p>01/2023 - 09/2023</p>
            <h4>
              - responsible for the design and implementation of user interfaces
              (UIs) and UI components using React a front-end javaScript
              library.
            </h4>
            <h4>- write ,debug, and implement code to meet user requirements.</h4>
            <h4>- work with most useful hooks in React.</h4>
            <h4>
              - work with libraries like : Redux toolkit , React router ,React
              quiery ,axios ,formik.
            </h4>
            <h4>- style components with libraries like : MUI.</h4>
          </Html>
          )}

          {showExperience3 && (
          <Html wrapperClass="experience" position={[-1.8, 1, -2]}>
            <h2>Freelancer</h2>
            <p>09/2020 - 12/2022</p>
            <h4>- Designing and implementing 5+ projects.</h4>
            <h4>- on-time delivery</h4>
            <h4>- stack : html - css - bootstarp - javascript - react.js</h4>
          </Html>
          )}
      
    </group>
  );
};

export default WorkExperiences;
