import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Player = () => {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const model = useGLTF("./models/car.gltf");
  const car = useRef();

  const [smothedCameraPosition] = useState(() => new THREE.Vector3(0, 6, 10));
  const [smothedCameraTarget] = useState(() => new THREE.Vector3());

  useFrame((state, delta) => {
    /**
     * Car Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const torque = { x: 0, y: 0, z: 0 };

    const impulesStrength = 8 * delta;
    const torqueStrength = 2 * delta;

    const carRotation = car.current.rotation();
    const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
      carRotation
    );
    let velocity = new THREE.Vector3();

    if (forward) {
      velocity.addScaledVector(forwardDirection, -impulesStrength);
    }

    if (backward) {
      velocity.addScaledVector(forwardDirection, impulesStrength);
    }

    // Rotation logic
    if (leftward) {
      torque.y += torqueStrength;
    }

    if (rightward) {
      torque.y -= torqueStrength;
    }

    car.current.applyImpulse({ x: velocity.x, y: velocity.y, z: velocity.z });
    car.current.applyTorqueImpulse(torque);

    /**
     * Camera
     */
    const carPosition = car.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(carPosition);
    cameraPosition.z += 1.5;
    cameraPosition.y += 1.5;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(carPosition);
    cameraTarget.y += 0.25;

    //to move the camera smoothly
    smothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smothedCameraPosition);
    state.camera.lookAt(smothedCameraTarget);
  });

  useEffect(() => {
    if (model.scene) {
      model.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
    }
  }, [model.scene]);

  return (
    <RigidBody
      ref={car}
      position={[0, 2, 0.5]}
      rotation={[0, Math.PI, 0]}
      colliders="cuboid"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      canSleep={false}
    >
      <primitive object={model.scene} scale={0.5} />
    </RigidBody>
  );
};

export default Player;
