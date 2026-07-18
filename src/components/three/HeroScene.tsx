"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingGeometries() {
  const meshRef = useRef<THREE.Group>(null);
  
  const geometries = useMemo(() => [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TetrahedronGeometry(1, 0),
    new THREE.TorusGeometry(0.8, 0.2, 16, 32),
  ], []);

  const items = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      speed: Math.random() * 0.2 + 0.1
    })), [geometries]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.children.forEach((child, i) => {
      child.rotation.x += 0.005;
      child.rotation.y += 0.005;
      child.position.y += Math.sin(state.clock.elapsedTime * items[i].speed) * 0.005;
    });
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <group ref={meshRef}>
      {items.map((item, i) => (
        <mesh
          key={i}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
          geometry={item.geometry}
        >
          <meshPhongMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full opacity-50">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <FloatingGeometries />
      </Canvas>
    </div>
  );
}