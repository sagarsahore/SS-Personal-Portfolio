import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FluidSphere = () => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
      const targetRotateX = y * 0.2;
      const targetRotateZ = -x * 0.2;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotateX, 0.05);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotateZ, 0.05);
      
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }

    if (materialRef.current) {
      const mouseDist = Math.sqrt(x * x + y * y);
      const targetDistortion = 0.4 + mouseDist * 0.5;
      const targetDistortionScale = 0.3 + mouseDist * 0.5;
      const targetChromaticAberration = 0.1 + mouseDist * 0.4;

      materialRef.current.distortion = THREE.MathUtils.lerp(materialRef.current.distortion, targetDistortion, 0.05);
      materialRef.current.distortionScale = THREE.MathUtils.lerp(materialRef.current.distortionScale, targetDistortionScale, 0.05);
      materialRef.current.chromaticAberration = THREE.MathUtils.lerp(materialRef.current.chromaticAberration, targetChromaticAberration, 0.05);
    }
  });

  const config = {
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: 10,
    resolution: 1024,
    transmission: 1,
    roughness: 0.1,
    thickness: 1.5,
    ior: 1.5,
    chromaticAberration: 0.1,
    anisotropy: 0.3,
    distortion: 0.4,
    distortionScale: 0.3,
    temporalDistortion: 0.2,
    clearcoat: 1,
    attenuationDistance: 0.5,
    attenuationColor: '#a8b1ff',
    color: '#ffffff',
    background: new THREE.Color('#050505')
  };

  return (
    <Float floatIntensity={2} rotationIntensity={1.5} speed={1.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 128, 128]} />
        <MeshTransmissionMaterial ref={materialRef} {...config} />
      </mesh>
    </Float>
  );
};

const Particles = () => {
    const count = 200;
    const mesh = useRef(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
        const t = Math.random() * 100;
        const factor = 20 + Math.random() * 100;
        const speed = 0.01 + Math.random() / 200;
        const xFactor = -50 + Math.random() * 100;
        const yFactor = -50 + Math.random() * 100;
        const zFactor = -50 + Math.random() * 100;
        temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        
        const { x, y } = state.mouse;
        const mouseDist = Math.sqrt(x * x + y * y);

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
            
            const dynamicSpeed = speed * (1 + mouseDist * 1.5);

            t = particle.t += dynamicSpeed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);
            
            particle.mx += (x * 15 - particle.mx) * 0.05;
            particle.my += (y * 15 - particle.my) * 0.05;
            
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            );
            
            const scaleFactor = s * (1 + mouseDist * 0.3);
            dummy.scale.set(scaleFactor, scaleFactor, scaleFactor);
            
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.05, 0]} />
            <meshBasicMaterial color="#6366f1" transparent opacity={0.4} />
        </instancedMesh>
    );
};

export const NeuralLiquidCore = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="indigo" />
        
        <Suspense fallback={null}>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FluidSphere />
            <Particles />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-6 left-6 text-xs text-white/30 pointer-events-none uppercase tracking-widest">
        Fig 1. Stochastic Latent Manifold Visualization
      </div>
    </div>
  );
};