import { useTexture } from '@react-three/drei'
import { InstancedRigidBodies } from '@react-three/rapier';
import React, { useMemo } from 'react'

const BoxWall = ({layar}) => {
    const cubeCounts = 8;
    const box=useTexture("./textures/box.jpg")

    const instances = useMemo(() => {
        const instances = [];
    
        for (let i = 0; i < cubeCounts; i++) {
          instances.push({
            key: "instance_" + Math.random(),
            position: [-1.75 + 0.5 * i, layar, 3],
            rotation: [0, 0, 0],
            scale: [0.5, 0.5, 0.15],
          });
        }
    
        return instances;
      }, []);

  return (
    <InstancedRigidBodies  instances={instances} colliders="cuboid">
        <instancedMesh castShadow args={[null, null, cubeCounts]}>
          <boxGeometry />
          <meshStandardMaterial map={box} />
        </instancedMesh>
      </InstancedRigidBodies>
  )
}

export default BoxWall