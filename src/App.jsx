import { useEffect } from "react";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useState,Suspense } from "react";
import { LoadingScreen } from "./LoadingScreen.jsx";

const audio=new Audio("./audio/BLEACH-OST.mp3")

function App() {
  const [start,setStarted]=useState(false)

  useEffect(()=>{
    if(start){
        audio.play()
    }
  },[start])

  return (
    <>
    <KeyboardControls
  map={[
    { name: "forward", keys: ["ArrowUp"] },
    { name: "backward", keys: ["ArrowDown"] },
    { name: "leftward", keys: ["ArrowLeft"] },
    { name: "rightward", keys: ["ArrowRight"] },
  ]}
>
    <Canvas
      shadows
      camera={{ fov: 75, near: 0.01, far: 200, position: [0, 1, 3] }}
    >
      <Suspense fallback={null}>
      <Experience  started={start}/>
      </Suspense>
    </Canvas>
    </KeyboardControls>
    <LoadingScreen started={start} onStarted={()=>setStarted(true)}/>
    </>
  );
}

export default App;
