// CanvasComp.js
import React, { useRef } from "react";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useParams } from "react-router-dom";
import { MeshoptDecoder } from 'meshoptimizer';

function Model({ modelName, ...props }) {
  const { scene } = useGLTF(`https://media.githubusercontent.com/media/Ashwin-Iyer1/7110A-Website/main/${modelName}.glb`, MeshoptDecoder);
  return <primitive object={scene} rotation={[Math.PI / -2, 0, 0]} {...props} />;
}

export default function CanvasComp() {
  const { modelName } = useParams();
  const group = useRef();

  return (
    <div className="content">
      <h1>
        Carroll <span>Robotics</span>
      </h1>
      <h1 className="portfolio-text">{modelName} Model</h1>

      <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [4, 0, 15], fov: 60 }} className="Model">
        <color attach="background" args={['skyblue']} />
        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 1 }}
          adjustCamera={1}
          environment="city"
        >
          <Model modelName={modelName} scale={1} /> {/* Example: Passing a scale prop */}
        </Stage>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
      </Canvas>
    </div>
  );
}
