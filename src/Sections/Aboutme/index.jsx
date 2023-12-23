import { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import BoardModel from "../BoardModel";
import { useTexture, Html } from "@react-three/drei";
import * as THREE from "three";
import BoxWall from "./BoxWall";
import { useFrame } from "@react-three/fiber";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";

const AboutMe = () => {
  const boardImg = useTexture("./textures/aboutMe.png");
  const floor = useTexture("./textures/aboutme-floor.jpg");
  const wall = useTexture("./textures/aboutme-wall.jpg");
  const [showText, setShowText] = useState(false);

  const wallGeometry = new THREE.BoxGeometry(1, 1, 1);
  const wallMaterial = new THREE.MeshStandardMaterial({ map: wall });

  useFrame((state) => {
    if (state.camera.position.z < -1.2) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  });

  return (
    <group position={[0, 0, -5]}>
      {/*Board Model */}
      <BoardModel
        texture={boardImg}
        position={[2, -0.4, 1.8]}
        rotation={[0, -1, 0]}
        positionImg={[1.15, 0.59, 1.28]}
      />

      {/* Floor */}
      <RigidBody type="fixed" restitution={0.2} friction={1}>
        <mesh scale={[4, 0.2, 6]} receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={floor} />
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

      {/* Box Wall */}
      <BoxWall layar={"0.25"} />
      <BoxWall layar={"0.75"} />
      <BoxWall layar={"1.25"} />

      {/* HTML Text */}
      {showText && (
        <Html wrapperClass="aboutme" position={[-1.8, 1, 0]}>
          <h3>
            Hello everyone! My name is Ali Abd Allateef. a Syrian software
            engineer specializing in front-end web development. with two years
            of experience in React.js and front-end web development,
            complemented by a strong knowledge of Next.js and TypeScript.
            Additionally, I have a good experience in creating 3D websites
            using Three.js and React Three Fiber. I am looking forward to
            expanding my experience and improving my skills day by day.
          </h3>
          <div className="sochial">
            <a href="https://www.facebook.com/ali.abohasan.167"
            target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-abd-allateef-605707216/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/aliabdallateef97" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://drive.google.com/file/d/1ZPpBMCxuh9mqD9ZY6BWBl2NmH4PEZwaD/view?usp=drive_link"
              target="_blank"
              download
            >
              <MdDocumentScanner />
            </a>
          </div>
        </Html>
      )}
    </group>
  );
};

export default AboutMe;
