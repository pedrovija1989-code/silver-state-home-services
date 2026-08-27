'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, RoundedBox, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
function Pipe({ color, position, rotation = [0, 0, 0], length = 2 }: { color: string; position: [number, number, number]; rotation?: [number, number, number]; length?: number }) { return <mesh position={position} rotation={rotation}><cylinderGeometry args={[0.035, 0.035, length, 14]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} metalness={0.25} /></mesh>; }
function House() {
  const group = useRef<THREE.Group>(null); const [revealed, setRevealed] = useState(false);
  useFrame((state) => { if (!group.current) return; group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.16 - 0.22, 0.035); group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.045, 0.035); });
  return <group ref={group} position={[0, -0.25, 0]} onPointerOver={(e) => {e.stopPropagation();setRevealed(true)}} onPointerOut={() => setRevealed(false)} onClick={() => setRevealed(!revealed)}>
    <RoundedBox args={[4.3, .18, 3]} radius={.06} position={[0, -1.45, 0]}><meshStandardMaterial color="#b9c1c4" roughness={.85} /></RoundedBox>
    <RoundedBox args={[3.65, 2.55, 2.45]} radius={.08} position={[0, -.15, 0]}><meshPhysicalMaterial color="#d7dedf" roughness={.72} transparent opacity={revealed ? .18 : .96} transmission={revealed ? .18 : 0} depthWrite={!revealed} /></RoundedBox>
    <mesh position={[0, 1.53, 0]} rotation={[0, Math.PI / 4, 0]}><coneGeometry args={[2.58, 1.5, 4]} /><meshStandardMaterial color="#233c48" roughness={.78} transparent opacity={revealed ? .28 : 1} /></mesh>
    <RoundedBox args={[.76, 1.45, .12]} radius={.05} position={[-.82, -.72, 1.25]}><meshStandardMaterial color="#9c5a36" /></RoundedBox><RoundedBox args={[.92, .74, .12]} radius={.05} position={[.86, .05, 1.25]}><meshPhysicalMaterial color="#9bc7d5" roughness={.15} metalness={.2} /></RoundedBox>
    <group visible={revealed}><Pipe color="#39aee8" position={[-1.25, -.35, .35]} length={2.25} /><Pipe color="#f1994b" position={[-.95, -.2, .35]} length={2} /><Pipe color="#39aee8" position={[.45, -.55, .35]} rotation={[0, 0, Math.PI / 2]} length={3.4} /><Pipe color="#f1994b" position={[.35, -.2, .35]} rotation={[0, 0, Math.PI / 2]} length={2.7} /><Pipe color="#39aee8" position={[1.05, .34, .35]} length={1.6} /><mesh position={[-1.1, .62, .38]}><sphereGeometry args={[.12, 18, 18]} /><meshStandardMaterial color="#f9bd67" emissive="#f29a3d" emissiveIntensity={2} /></mesh><Text position={[-1.1, .95, .4]} fontSize={.16} color="#fff" anchorX="center">WATER HEATER</Text></group>
  </group>;
}
export default function HouseScene() { return <Canvas dpr={[1, 1.6]} camera={{ position: [5.3, 3.5, 6.2], fov: 39 }} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.5} /><directionalLight position={[5, 7, 5]} intensity={3.5} color="#fff4df" /><pointLight position={[-4, 1, 3]} intensity={2} color="#44b9e8" /><House /><Environment preset="city" /><OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.05} maxPolarAngle={1.45} minAzimuthAngle={-.7} maxAzimuthAngle={.4} /></Canvas>; }
