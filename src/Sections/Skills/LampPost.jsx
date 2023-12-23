import React, { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {clone} from 'three/examples/jsm/utils/SkeletonUtils'

const LampModel = ({position}) => {
    const lamp=useGLTF("./models/lampPost.gltf")

    const fenceInstance=useMemo(()=>clone(lamp.scene),[lamp.scene])

    useEffect(() => {
        if (fenceInstance) {
            fenceInstance.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
        }
    }, [fenceInstance]);

  return (
    <primitive object={fenceInstance} scale={0.5} position={position}/>
  )
}

export default LampModel