import React, { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import {clone} from 'three/examples/jsm/utils/SkeletonUtils'

const RocksModel = ({position}) => {
    const rocks=useGLTF("./models/rocks.gltf")

    const rocksInstance=useMemo(()=>clone(rocks.scene),[rocks.scene])

    useEffect(() => {
        if (rocksInstance) {
            rocksInstance.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                }
            });
        }
    }, [rocksInstance]);

  return (
    <primitive object={rocksInstance} scale={0.8} position={position}/>
  )
}

export default RocksModel