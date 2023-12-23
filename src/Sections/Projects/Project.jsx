import React from "react";

const Project = ({ position, rotation, texture,url }) => {
    const clickHandler=()=>{
        window.open(url, "_blank");
    }
    
  return (
    <mesh
      position={position}
      rotation={rotation}
      onPointerEnter={() => (document.body.style.cursor = "pointer")}
      onPointerLeave={()=>(document.body.style.cursor = "default")}
      onClick={clickHandler}
    >
      <planeGeometry args={[1, 0.6]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Project;
