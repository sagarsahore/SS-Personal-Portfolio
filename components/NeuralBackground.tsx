import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const SynapticField = () => {
    const ref = useRef<THREE.Points>(null);
    
    // Create a field of particles representing neural connections
    const sphere = useMemo(() => {
        const count = 4000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        
        for (let i = 0; i < count; i++) {
            // Randomize radius to create a volumetric cloud rather than a shell
            // Distribution biased towards outer edges for depth but filling the center
            const r = 10 + Math.random() * 50; 
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            
            // Neural colors: Red (firing), Cyan (Active Data), White (Nodes), Grey (Structure)
            const choice = Math.random();
            if (choice > 0.98) color.set("#ef4444"); // Crimson (Spark)
            else if (choice > 0.95) color.set("#22d3ee"); // Cyan (Data)
            else if (choice > 0.85) color.set("#ffffff"); // White (Node)
            else color.set("#404040"); // Lighter Grey (Structure)
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotation to simulate floating
            ref.current.rotation.x -= delta / 50;
            ref.current.rotation.y -= delta / 40;
            
            // Breathing effect
            const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
            ref.current.scale.set(s, s, s);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
};

const GridFloor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
            <planeGeometry args={[100, 100, 40, 40]} />
            <meshBasicMaterial 
                color="#333" 
                wireframe 
                transparent 
                opacity={0.08} 
            />
        </mesh>
    );
};

// Controls the camera movement based on scroll position
const ScrollObserver = () => {
    useFrame(({ camera }) => {
        const scrollY = window.scrollY;
        // Scroll down (scrollY increases) -> Camera moves UP (positive Y)
        // This causes the scene objects (at Y=0) to move DOWN relative to the viewport.
        const targetY = scrollY * 0.015; 
        
        // Also add a slight Z movement to "dive in" as you scroll
        // const targetZ = 25 - scrollY * 0.005;

        // Smoothly interpolate current camera position to target
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.08);
        // camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    });
    return null;
}

export const NeuralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      {/* dpr prop ensures we don't over-render on 4k/Retina screens */}
      <Canvas camera={{ position: [0, 0, 25], fov: 60 }} gl={{ antialias: false, powerPreference: "high-performance" }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
            <ScrollObserver />
            
            <color attach="background" args={['#050505']} />
            
            {/* Ambient Red Glow for Atmosphere */}
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#550000" distance={50} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#002244" distance={50} />
            
            <SynapticField />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            <GridFloor />
            
            {/* Fog to hide the edges and create depth */}
            <fog attach="fog" args={['#050505', 10, 80]} />
        </Suspense>
      </Canvas>
      
      {/* Vignette Overlay for cinematic focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-60 pointer-events-none"></div>
    </div>
  );
};