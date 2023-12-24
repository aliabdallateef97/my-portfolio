import { RigidBody } from "@react-three/rapier";
import React, { useState } from "react";
import BoardModel from "../BoardModel";
import * as THREE from "three";
import { Html ,Sparkles,useTexture} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ContactUsForm } from "./Form";
import ReactLogo from "./ReactLogo";


const ContactUs = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  const boardImg=useTexture("./textures/contactUs.png")
  const floor=useTexture("./textures/contactus-floor.jpg")
  const wall=useTexture("./textures/contactus-wall.jpg")

  wall.repeat.set(2, 2);
  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;

  floor.repeat.set(4, 4);
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;

  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallMaterial = new THREE.MeshStandardMaterial({ map:wall });

  useFrame((state) => {
    if (state.camera.position.z < -28.9) {
      setShowContactUs(true);
    } else {
      setShowContactUs(false);
    }
  });

  return (
    <group position={[0, 0, -32]}>
      {/* Board */}
      <BoardModel texture={boardImg} position={[2, -0.4, 2.3]} rotation={[0, -1, 0]} positionImg={[1.15,0.59,1.775]}/>

      {/* Floor */}
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 4]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={floor} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed">
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4]}
          position={[-2.15, 0.75, 0]}
          castShadow
        />
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4]}
          position={[2.15, 0.75, 0]}
          castShadow
        />
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[4, 1.5, 0.3]}
          position={[0, 0.75, -2.15]}
          castShadow
        />
      </RigidBody>

      {/* HTML Text */}
      {showContactUs && (
        <Html wrapperClass="contact" position={[-1.6, 1, -1]}>
         <ContactUsForm />
        </Html>
      )}

      {/* React Logo */}
      <ReactLogo />

      {/* Sparks */}
      <Sparkles count={1000} speed={0.5} size={2} position={[0, 1, -0.15]} scale={1.5}/>
    </group>
  );
};

export default ContactUs;
