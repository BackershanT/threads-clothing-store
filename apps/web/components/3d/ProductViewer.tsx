"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("./ProductModel"), {
  ssr: false
});

export default function ProductViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Environment preset="studio" />
        <Model url={modelUrl} />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}