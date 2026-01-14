import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BackgroundParticles() {
  const ref = useRef();
  // Create 2000 random points
  const [positions] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000 * 3; i++) pos[i] = (Math.random() - 0.5) * 25;
    return [pos];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = t * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// function FloatingShape() {
//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={1}>
//       <Sphere args={[1, 64, 64]} position={[2, 0, 0]}>
//         <MeshDistortMaterial
//           color="#3b82f6"
//           attach="material"
//           distort={0.4}
//           speed={2}
//           roughness={0}
//         />
//       </Sphere>
//     </Float>
//   );
// }

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <BackgroundParticles />
        {/* <FloatingShape /> */}
      </Canvas>
    </div>
  );
};

export default Scene3D;
