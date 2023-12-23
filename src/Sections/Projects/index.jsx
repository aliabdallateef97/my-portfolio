import React from 'react'
import BoardModel from '../BoardModel'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import RocksModel from './RocksModel'
import { useTexture } from '@react-three/drei'
import Project from './Project'

const Projects = () => {
  const boardImg=useTexture("./textures/projects.jpg")
  const project1=useTexture("./textures/project1.png")
  const project2=useTexture("./textures/project2.png")
  const project3=useTexture("./textures/project3.png")
  const project4=useTexture("./textures/project4.png")
  const project5=useTexture("./textures/project5.png")
  const project6=useTexture("./textures/project6.png")
  const floor=useTexture("./textures/projects-floor.jpg")
  const wall=useTexture("./textures/projects-wall.jpg")

  wall.repeat.set(12, 2);
  wall.wrapS = THREE.RepeatWrapping;
  wall.wrapT = THREE.RepeatWrapping;

  floor.repeat.set(4, 4);
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;

    const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
    const wallMaterial = new THREE.MeshStandardMaterial({ map:wall });

  return (
    <group position={[0,0,-27]}>
      {/* Board */}
      <BoardModel texture={boardImg} position={[2, -0.4, 2.3]} rotation={[0, -1, 0]} positionImg={[1.15,0.59,1.775]}/>

     {/* Floor */}
     <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 6]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial   map={floor}  />
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

      {/* Rocks Model */}
      <group position={[0,0,10.7]}>
      <RigidBody type='fixed'  >
      <RocksModel position={[-4.2,0,0]}/>
      </RigidBody>
      <RigidBody type='fixed'  >
      <RocksModel position={[-1.2,0,0]}/>
      </RigidBody>
      </group>


      {/* Projects */}
      <Project position={[-1,1,1]} rotation={[0,0.6,0]} texture={project1} url={"https://aliabdallateef97.github.io/MovieClub/#/"}/>
      <Project position={[1,1,1]} rotation={[0,-0.6,0]} texture={project2} url={"https://aliabdallateef97.github.io/crazy-ball/"}/>
      <Project position={[-1,1,-0.5]} rotation={[0,0.6,0]} texture={project3} url={"https://aliabdallateef97.github.io/ghost-house/"}/>
      <Project position={[1,1,-0.5]} rotation={[0,-0.6,0]} texture={project4} url={"https://aliabdallateef97.github.io/3d-movies-app/"}/>
      <Project position={[-1,1,-2]} rotation={[0,0.6,0]} texture={project5} url={"https://aliabdallateef97.github.io/pizza/"}/>
      <Project position={[1,1,-2]} rotation={[0,-0.6,0]} texture={project6} url={"https://aliabdallateef97.github.io/AB-Resturant/"}/>
      </group>
  )
}

export default Projects