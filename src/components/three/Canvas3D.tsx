import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MODELS, type ModelName } from "./models";

/**
 * The actual WebGL canvas — code-split via React.lazy in Scene3D so three.js
 * never lands in the initial route bundle. Mounted only when in view.
 */
export default function Canvas3D({
  model,
  interactive = true,
}: {
  model: ModelName;
  interactive?: boolean;
}) {
  const Model = MODELS[model];
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-5, -2, -3]} intensity={40} color="#3d76b8" />
      <pointLight position={[4, -3, 2]} intensity={22} color="#e0b13a" />
      <Model />
      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      )}
    </Canvas>
  );
}
