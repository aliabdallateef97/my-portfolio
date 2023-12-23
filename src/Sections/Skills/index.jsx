import { RigidBody } from '@react-three/rapier'
import React from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import BoardModel from '../BoardModel'
import LampModel from './LampPost'
import SkillBox from './SkillBox'

const Skills = () => {
    // Textures
    const boardImg=useTexture("./textures/skills.png")
    const floor=useTexture("./textures/skills-floor.jpg")
    const wall=useTexture("./textures/skills-wall.jpg")
    const reactLogo=useTexture("./textures/reactLogo.png")
    const threeLogo=useTexture("./textures/threeLogo.png")
    const tsLogo=useTexture("./textures/tsLogo.png")
    const jsLogo=useTexture("./textures/jsLogo.png")
    const htmlLogo=useTexture("./textures/htmlLogo.png")
    const cssLogo=useTexture("./textures/cssLogo.jpg")
    const reduxLogo=useTexture("./textures/reduxLogo.png")
    const reactQueryLogo=useTexture("./textures/reactQueryLogo.png")
    const muiLogo=useTexture("./textures/muiLogo.png")
    const tailwindLogo=useTexture("./textures/tailwindLogo.jpg")
    const githubLogo=useTexture("./textures/githubLogo.png")
    const nextLogo=useTexture("./textures/nextLogo.jpg")

    wall.repeat.set(12, 2);
    wall.wrapS = THREE.RepeatWrapping;
    wall.wrapT = THREE.RepeatWrapping;
  
    floor.repeat.set(4, 4);
    floor.wrapS = THREE.RepeatWrapping;
    floor.wrapT = THREE.RepeatWrapping;

    const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
    const wallMaterial = new THREE.MeshStandardMaterial({ map: wall });


  return (
   <group position={[0,0,-19]}>
      {/* Board */}
      <BoardModel texture={boardImg} position={[2, -0.4, 4.2]} rotation={[0, -1, 0]} positionImg={[1.15,0.59,3.68]}/>

     {/* Floor */}
     <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 10]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={floor} />
        </mesh>
      </RigidBody>

      {/* Walls */}
      <RigidBody type="fixed">
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 10]}
          position={[-2.15, 0.75, 0]}
          castShadow
        />
        <mesh
          geometry={wallGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 10]}
          position={[2.15, 0.75, 0]}
          castShadow
        />
      </RigidBody>

      {/* Lamp Post Model */}
      <group position={[0,0,5]}>
        <RigidBody type='fixed'>
      <LampModel position={[-1.8,0,-0.1]}/>
      </RigidBody>
        <RigidBody type='fixed'>
      <LampModel position={[1.8,0,-0.1]}/>
      </RigidBody>
      </group>

      {/* Skills Boxes */}
      <SkillBox position={[-1.1,0.4,2.5]} texture={reactLogo}/>
      <SkillBox position={[1.1,0.4,2.5]} texture={threeLogo}/>
      <SkillBox position={[-1.1,0.4,1.5]} texture={jsLogo}/>
      <SkillBox position={[1.1,0.4,1.5]} texture={tsLogo}/>
      <SkillBox position={[-1.1,0.4,0.5]} texture={htmlLogo}/>
      <SkillBox position={[1.1,0.4,0.5]} texture={cssLogo}/>
      <SkillBox position={[-1.1,0.4,-0.5]} texture={reduxLogo}/>
      <SkillBox position={[1.1,0.4,-0.5]} texture={reactQueryLogo}/>
      <SkillBox position={[-1.1,0.4,-1.5]} texture={muiLogo}/>
      <SkillBox position={[1.1,0.4,-1.5]} texture={tailwindLogo}/>
      <SkillBox position={[-1.1,0.4,-2.5]} texture={githubLogo}/>
      <SkillBox position={[1.1,0.4,-2.5]} texture={nextLogo}/>

      
   </group>
  )
}

export default Skills