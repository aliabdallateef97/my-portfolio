import { Text, Float, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'

const StartBlock = () => {
  const floorTexture = useTexture("./textures/react2.jpg");
  const wallTexture = useTexture("./textures/startWall3.jpg")

  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallMaterial = new THREE.MeshStandardMaterial({map:wallTexture})

  return (
    <group position={[0, 0, 0]}>
      <Float>
        <Text
          font="./bebas-neue-v9-latin-regular.woff"
          scale={0.5}
          lineHeight={0.75}
          textAlign="center"
          position={[0, 0.75, -1]}
          color={"#89CFF0"}
        >
          My Portfolio
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>


      {/* Floor */}
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 4]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={floorTexture} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed">
      <mesh geometry={wallGeometry} material={wallMaterial} scale={[0.3,1.5,4]} position={[-2.15,0.75,0]} castShadow/>
      <mesh geometry={wallGeometry} material={wallMaterial} scale={[0.3,1.5,4]} position={[2.15,0.75,0]} castShadow/>
      <mesh geometry={wallGeometry} material={wallMaterial} scale={[4,1.5,0.3]} position={[0,0.75,2.15]} castShadow/>
      </RigidBody>
    </group>
  );
};

export default StartBlock;
