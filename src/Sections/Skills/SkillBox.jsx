import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React,{useRef, useState} from "react";
import * as THREE from 'three'

const SkillBox = ({ texture, position }) => {
    const box=useRef()
    const [speed]=useState(()=> (Math.random() +2) * (Math.random() < 0.5 ? -1 : 1))

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
    
        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time , 0));
        box.current.setNextKinematicRotation(rotation);
      });

  return (
    <RigidBody ref={box} position={position} type="kinematicPosition" restitution={0.2} friction={0}>
      <mesh  castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
};

export default SkillBox;
