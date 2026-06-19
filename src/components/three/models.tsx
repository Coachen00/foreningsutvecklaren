import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import type { Mesh, Group } from "three";

/**
 * Procedural, abstract-premium models — no external .glb assets required.
 * Midnight Pitch palette: near-white surfaces, navy depth, gold + swedish-blue glow.
 */

const GOLD = "#e0b13a";
const NAVY = "#0b0f16";
const OFFWHITE = "#eef1f6";
const BLUE = "#3d76b8";

/** Faceted ball — icosphere with dark seams. Reads as an abstract football. */
export function Ball() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.25;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={ref} castShadow>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color={OFFWHITE} metalness={0.1} roughness={0.45} flatShading />
        <Edges threshold={15} color={NAVY} />
      </mesh>
    </Float>
  );
}

/** Tilted pitch plane with glowing zone strips. */
export function Pitch() {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.06;
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} rotation={[-1.15, 0, 0.2]}>
        <mesh receiveShadow>
          <boxGeometry args={[3.2, 2.1, 0.08]} />
          <meshStandardMaterial color={NAVY} metalness={0.2} roughness={0.7} />
          <Edges threshold={15} color={BLUE} />
        </mesh>
        {/* Three zone strips: defense / midfield / attack */}
        {[
          { x: -1.0, c: "#b33b46" },
          { x: 0, c: GOLD },
          { x: 1.0, c: "#2f7d4f" },
        ].map((z) => (
          <mesh key={z.x} position={[z.x, 0, 0.05]}>
            <boxGeometry args={[0.04, 2.1, 0.02]} />
            <meshStandardMaterial color={z.c} emissive={z.c} emissiveIntensity={0.8} />
          </mesh>
        ))}
        {/* Center mark */}
        <mesh position={[0, 0, 0.06]}>
          <torusGeometry args={[0.34, 0.012, 12, 48]} />
          <meshStandardMaterial color={OFFWHITE} emissive={OFFWHITE} emissiveIntensity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

/** Faceted gold gem — abstract trophy / award marker. */
export function Trophy() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.18} emissive={GOLD} emissiveIntensity={0.18} />
        <Edges threshold={15} color="#fff2cf" />
      </mesh>
    </Float>
  );
}

export const MODELS = { ball: Ball, pitch: Pitch, trophy: Trophy } as const;
export type ModelName = keyof typeof MODELS;
