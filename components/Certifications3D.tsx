import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Text, Float, Environment, Edges, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Cert3DProps {
    activeCert: any;
}

// Map categories to hex colors matching the main UI
const categoryColors: Record<string, string> = {
    Salesforce: '#2563EB',
    AWS: '#EA580C',
    AI: '#DC2626',
    Google: '#0284C7',
    Stanford: '#9F1239',
};

const ScannerLines = ({ color }: { color: string }) => {
    const ref = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 1.5;
        }
    });

    return (
        <group ref={ref}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[2, 2.05, 64]} />
                <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0, 2, 64]} />
                <meshBasicMaterial color={color} transparent opacity={0.05} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
};

const SpectralSlate = ({ cert, color }: { cert: any; color: string }) => {
    const mesh = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (mesh.current) {
            // Subtle breathing and tilt
            mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
            mesh.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    const glassConfig = {
        backside: true,
        samples: 8,
        resolution: 512,
        transmission: 1,
        roughness: 0.1,
        thickness: 0.8,
        ior: 1.5,
        chromaticAberration: 0.2,
        anisotropy: 0.3,
        distortion: 0.1,
        distortionScale: 0.1,
        color: '#1a1a1a',
        attenuationDistance: 0.5,
        attenuationColor: color
    };

    return (
        <group>
            <mesh ref={mesh}>
                <boxGeometry args={[3, 2, 0.2]} />
                <MeshTransmissionMaterial {...glassConfig} />
                <Edges threshold={15} color={color} opacity={0.5} transparent />
                
                {/* Content Layer inside glass */}
                <group position={[0, 0, 0.11]}>
                    <Text
                        position={[0, 0.4, 0]}
                        fontSize={0.22}
                        color="white"
                        maxWidth={2.5}
                        textAlign="center"
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    >
                        {cert.title}
                    </Text>
                    <Text
                        position={[0, -0.4, 0]}
                        fontSize={0.12}
                        color={color}
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    >
                        {cert.issuer.toUpperCase()}
                    </Text>
                    <Text
                        position={[0, -0.7, 0]}
                        fontSize={0.08}
                        color={color}
                        fillOpacity={0.6}
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    >
                        {cert.credentialId ? `REF: ${cert.credentialId}` : 'PENDING ENCRYPTION'}
                    </Text>
                </group>
            </mesh>

            {/* Floating Telemetry Tags */}
            <group position={[1.8, 0.8, 0.5]}>
                <Text fontSize={0.06} color={color} position={[0, 0.1, 0]} fillOpacity={0.8}>ID: {cert.id}</Text>
                <Text fontSize={0.06} color={color} position={[0, 0, 0]} fillOpacity={0.8}>VERIFIED: {cert.date}</Text>
                <mesh position={[-0.1, 0.05, 0]}>
                    <planeGeometry args={[0.02, 0.2]} />
                    <meshBasicMaterial color={color} transparent opacity={0.6} />
                </mesh>
            </group>
        </group>
    );
};

export const Certifications3D: React.FC<Cert3DProps> = ({ activeCert }) => {
    const activeColor = categoryColors[activeCert.category] || '#DC2626';

    return (
        <div className="w-full h-full min-h-[500px] md:min-h-[600px] relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#050505]">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={40} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color={activeColor} />
                
                <Suspense fallback={null}>
                    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
                    
                    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                        <group rotation={[0, -Math.PI / 12, 0]}>
                            <SpectralSlate cert={activeCert} color={activeColor} />
                            <ScannerLines color={activeColor} />
                        </group>
                    </Float>
                    
                    {/* Background Grid for Scale */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
                        <gridHelper args={[20, 20, activeColor, '#0a0a0a']} />
                    </mesh>
                </Suspense>
            </Canvas>
            
            {/* Visual HUD Overlay */}
            <div className="absolute top-6 left-6 font-mono text-[9px] uppercase tracking-[0.3em] pointer-events-none" style={{ color: activeColor, opacity: 0.6 }}>
                Data Archive / Spectral Scanner v4.2.0<br/>
                Analyzing: {activeCert.id}<br/>
                Modality: {activeCert.category}
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#10b981' }}></div>
                <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: '#10b981', opacity: 0.8 }}>Secure Link Established</span>
            </div>
        </div>
    );
};