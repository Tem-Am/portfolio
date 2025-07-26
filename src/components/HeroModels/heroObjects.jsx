import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./room";

const HeroObjects = () => {
  const isSmallDevice = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={0.2} color="1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* This make objects move able */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isSmallDevice}
        maxDistance={20}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Mesh make possible to create 2,3D objects */}
      <group>
        scale={0.5}
        position={[1, -1, 0.2]}
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroObjects;
