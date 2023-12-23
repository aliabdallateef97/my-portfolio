import React, { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {clone} from 'three/examples/jsm/utils/SkeletonUtils'

const FenceModel = ({position}) => {
    const fence=useGLTF("./models/fence.gltf")

    const fenceInstance=useMemo(()=>clone(fence.scene),[fence.scene])

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
    <primitive object={fenceInstance} scale={[0.5,1,0.8]} position={position}/>
  )
}

export default FenceModel