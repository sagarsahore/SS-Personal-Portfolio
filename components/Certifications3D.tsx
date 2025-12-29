import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Text, Float, Environment, Edges, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Cert3DProps {
    certs: any[];
    activeIndex: number;
    onSelect: (index: number) => void;
}

interface CardProps {
    item: any;
    index: number;
    total: number;
    activeIndex: number;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ item, index, total, activeIndex, onClick }) => {
    const mesh = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    // Calculate position in the ring
    const radius = 3.5;
    const angle = (index / total) * Math.PI * 2;
    
    const isActive = index === activeIndex;
    const isPlanned = item.status === 'Planned';

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.position.x = radius * Math.sin(angle);
            mesh.current.position.z = radius * Math.cos(angle);
            mesh.current.rotation.y = angle;

            const targetScale = isActive ? 1.2 : (hovered ? 1.1 : 1);
            mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    // "Fully Blue" Aesthetic
    const primaryBlue = '#3b82f6'; // Bright Blue
    const glassBlue = '#172554';   // Deep Blue

    return (
        <group ref={mesh} onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <Float floatIntensity={isActive ? 2 : 0.5} rotationIntensity={0.5} speed={2}>
                {/* The Glass Slate */}
                <mesh>
                    <boxGeometry args={[1.8, 1.2, 0.1]} />
                    <MeshTransmissionMaterial 
                        backside
                        samples={4}
                        resolution={256}
                        transmission={1}
                        roughness={0.1}
                        thickness={0.2}
                        ior={1.5}
                        chromaticAberration={0.1}
                        anisotropy={0.1}
                        distortion={0.2}
                        distortionScale={0.2}
                        temporalDistortion={0.1}
                        color={glassBlue} // Blue tinted glass
                        attenuationDistance={0.5}
                        attenuationColor={primaryBlue}
                    />
                    {/* Clean Edges - No cross lines */}
                    <Edges 
                        threshold={15} // High threshold removes diagonal lines
                        scale={1.01} 
                        color={primaryBlue} 
                        opacity={isActive ? 0.8 : 0.4}
                        transparent
                    />
                </mesh>

                {/* Content Layer */}
                <group position={[0, 0, 0.06]}>
                    {/* Text Content - Centered since icons are removed */}
                    <Text 
                        position={[0, 0.15, 0]} 
                        fontSize={0.18} 
                        color="white" 
                        anchorX="center" 
                        anchorY="middle"
                        maxWidth={1.6}
                        lineHeight={1.2}
                        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                    >
                        {item.title}
                    </Text>

                    <Text 
                        position={[0, -0.25, 0]} 
                        fontSize={0.09} 
                        color="#93c5fd" // Light blue/white mix
                        anchorX="center" 
                        anchorY="middle"
                    >
                        {item.issuer.toUpperCase()}
                    </Text>
                    
                    {isPlanned && (
                         <Text 
                         position={[0, 0, 0.1]} 
                         fontSize={0.2} 
                         color={primaryBlue} 
                         anchorX="center" 
                         anchorY="middle"
                         fillOpacity={0.2}
                     >
                         PLANNED
                     </Text>
                    )}
                </group>
            </Float>
        </group>
    );
};

const Carousel = ({ certs, activeIndex, onSelect }: Cert3DProps) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            const targetRotation = -((activeIndex / certs.length) * Math.PI * 2);
            let current = groupRef.current.rotation.y;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(current, targetRotation, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            {certs.map((cert, i) => (
                <Card 
                    key={cert.id} 
                    item={cert} 
                    index={i} 
                    total={certs.length} 
                    activeIndex={activeIndex}
                    onClick={() => onSelect(i)}
                />
            ))}
        </group>
    );
};

export const Certifications3D: React.FC<Cert3DProps> = (props) => {
    const { activeIndex, onSelect, certs } = props;
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Touch Swipe Logic for Mobile
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }
    }

    const handlePrev = () => {
        const nextIndex = (activeIndex - 1 + certs.length) % certs.length;
        onSelect(nextIndex);
    };

    const handleNext = () => {
        const nextIndex = (activeIndex + 1) % certs.length;
        onSelect(nextIndex);
    };

    return (
        <div 
            className="w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden relative border border-white/5 bg-gradient-to-br from-[#050505] to-[#0a0a0a] touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#60a5fa" />
                <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
                
                <Carousel {...props} />
                
                {/* Central Core - Blue Theme */}
                <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, -2, 0]}>
                        <cylinderGeometry args={[0.2, 0.5, 1, 32]} />
                        <meshStandardMaterial color="#1e3a8a" roughness={0.2} metalness={0.8} />
                    </mesh>
                    <pointLight position={[0, -1.5, 0]} color="#3b82f6" intensity={2} distance={3} />
                </Float>
            </Canvas>
            
            {/* Overlay Controls */}
            <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-between items-end pointer-events-none">
                <div className="font-mono text-[10px] text-blue-300/50 uppercase tracking-widest hidden md:block">
                    Secure Certification Vault<br/>
                    Status: Verified
                </div>

                <div className="flex gap-4 pointer-events-auto mx-auto md:mx-0">
                    <button 
                        onClick={handlePrev}
                        className="p-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-200 hover:bg-blue-500/20 hover:text-white transition-all active:scale-95 backdrop-blur-md"
                        aria-label="Previous Certification"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="p-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-200 hover:bg-blue-500/20 hover:text-white transition-all active:scale-95 backdrop-blur-md"
                        aria-label="Next Certification"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
            
            {/* Mobile Touch Hint */}
             <div className="absolute top-4 right-4 md:hidden font-mono text-[10px] text-white/20 uppercase tracking-widest pointer-events-none">
                Swipe to Rotate
            </div>
        </div>
    );
};