import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import Sections from "./Sections/index.jsx";
import { OrbitControls } from "@react-three/drei";
import Player from "./Player.jsx";

function Experience({started}) {
  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      <OrbitControls makeDefault/>

      <Physics >
        <Lights />
        <Sections started={started}/>
        <Player />
      </Physics>
    </>
  );
}

export default Experience;
