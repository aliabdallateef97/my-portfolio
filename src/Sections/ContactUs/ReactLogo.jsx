import React,{useEffect,useRef} from 'react'
import { RigidBody } from '@react-three/rapier'
import { useFrame,useLoader } from '@react-three/fiber'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'

const ReactLogo = () => {
    const reactLogoModel=useLoader(FBXLoader,"./models/react-logo.fbx")
    const logo=useRef()

    useEffect(() => {
        if (reactLogoModel) {
            reactLogoModel.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
        }
    }, [reactLogoModel]);

    useFrame((state)=>{
        const time = state.clock.getElapsedTime();
    
        const rotation = new THREE.Quaternion();
        rotation.setFromEuler(new THREE.Euler(0, time , 0));
        logo.current.setNextKinematicRotation(rotation);
    })

    console.log(reactLogoModel)


  return (
    <RigidBody ref={logo} type='kinematicPosition' colliders="hull" position={[0,0.8,-1]}>
    <primitive object={reactLogoModel} scale={0.0035}/>
    </RigidBody>
  )
}

export default ReactLogo