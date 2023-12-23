import { useGLTF } from '@react-three/drei'
import {RigidBody} from '@react-three/rapier'
import { useMemo } from 'react'
import {clone} from 'three/examples/jsm/utils/SkeletonUtils'

const BoardModel = ({texture,position,rotation,positionImg}) => {
    const board =useGLTF('./models/board.glb')
    const boardInstance=useMemo(()=>clone(board.scene,[board.scene]))
    
 
    return (
        <group>
        <RigidBody type='fixed' colliders="hull" position={position} rotation={rotation} >
      <primitive object={boardInstance} scale={0.12} />
      </RigidBody>
      <mesh position={positionImg} rotation={[-0.3,-0.53,-0.18]}>
            <planeGeometry args={[0.4,0.4]} />
            <meshStandardMaterial map={texture}/>
        </mesh>
      </group>
    )
}

export default BoardModel