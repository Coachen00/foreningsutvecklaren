import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = new THREE.Color("#e0b13a");
const BLUE = new THREE.Color("#3d76b8");
const OFFWHITE = new THREE.Color("#eef1f6");

/**
 * Driftande nod-fält — billig ambient "Living Pitch"-bakgrund.
 * Additiv blending mot transparent canvas ger glöd utan tunga modeller.
 */
function Field({ count = 170 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const t = Math.random();
      const col = t < 0.62 ? BLUE : t < 0.9 ? GOLD : OFFWHITE;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, dt) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += dt * 0.025;
    // mjuk pekar-parallax
    const tx = state.pointer.x * 0.4;
    const ty = state.pointer.y * 0.25;
    p.position.x += (tx - p.position.x) * 0.02;
    p.rotation.x += (ty * 0.3 - p.rotation.x) * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function AmbientFieldCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Field />
    </Canvas>
  );
}
