import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const SynapticField = React.memo(() => {
    const ref = useRef<THREE.Points>(null);
    const mouse = useRef(new THREE.Vector2(0, 0));
    
    const sphere = useMemo(() => {
        const count = 4000;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const color = new THREE.Color();
        
        for (let i = 0; i < count; i++) {
            const r = 15 + Math.random() * 55; 
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
            
            const choice = Math.random();
            // Category-inspired colors
            if (choice > 0.98) color.set("#DC2626"); // Crimson
            else if (choice > 0.96) color.set("#2563EB"); // Blue
            else if (choice > 0.94) color.set("#EA580C"); // Orange
            else if (choice > 0.85) color.set("#333333"); // Grey
            else color.set("#111111"); // Faint
            
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            sizes[i] = Math.random();
        }
        return { positions, colors, sizes };
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Subtle constant rotation
            ref.current.rotation.y -= delta / 50;
            ref.current.rotation.x += delta / 100;

            // Mouse interaction (Parallax)
            const targetX = state.mouse.x * 2;
            const targetY = state.mouse.y * 2;
            ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.05);
            ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);

            // Breathing scale effect
            const s = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
            ref.current.scale.set(s, s, s);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 8]}>
            <Points ref={ref} positions={sphere.positions} colors={sphere.colors} stride={3} frustumCulled={true}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
});

const GridFloor = () => {
    const gridRef = useRef<THREE.Mesh>(null);
    const lineRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (gridRef.current) {
            // Move grid towards the viewer for a forward-motion effect
            gridRef.current.position.z = (state.clock.elapsedTime * 2) % 4;
        }
        if (lineRef.current) {
            // Moving scan line
            lineRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 40;
        }
    });

    return (
        <group position={[0, -15, 0]}>
            <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 100, 40, 40]} />
                <meshBasicMaterial 
                    color="#DC2626" 
                    wireframe 
                    transparent 
                    opacity={0.02} 
                />
            </mesh>
            
            {/* The "Scan" Line */}
            <mesh ref={lineRef} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 0.2]} />
                <meshBasicMaterial color="#DC2626" transparent opacity={0.1} />
            </mesh>

            {/* Depth Fade */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -20]}>
                <planeGeometry args={[120, 120]} />
                <meshBasicMaterial color="#050505" transparent opacity={0.5} />
            </mesh>
        </group>
    );
};

const ScrollObserver = () => {
    useFrame(({ camera, mouse }) => {
        const scrollY = window.scrollY;
        // Camera height follows scroll
        const targetY = (scrollY * 0.012) - 5; 
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
        
        // Dynamic look-at adjustment based on mouse
        camera.lookAt(mouse.x * 5, -5, -20);
    });
    return null;
}

export const NeuralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <Canvas 
        camera={{ position: [0, 0, 35], fov: 55 }} 
        gl={{ 
            antialias: false, 
            powerPreference: "high-performance",
            alpha: false 
        }} 
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
            <ScrollObserver />
            <color attach="background" args={['#050505']} />
            <SynapticField />
            <Stars radius={150} depth={60} count={2500} factor={4} saturation={0} fade speed={0.8} />
            <GridFloor />
            <fog attach="fog" args={['#050505', 15, 100]} />
            
            {/* Ambient subtle lighting to catch particle colors */}
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 20, 10]} intensity={0.5} color="#DC2626" />
        </Suspense>
      </Canvas>
      
      {/* Vignette & Grain Overlay for cinematic feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};