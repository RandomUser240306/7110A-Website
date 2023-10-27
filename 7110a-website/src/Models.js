// Models.js
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CanvasComp from "./CanvasComp";  
import "./Models.css";
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { MeshoptDecoder } from 'meshoptimizer';

export default function Models() {
  const modelNames = ["Intake", "Sleds", "Ratchet", "Slapper", "Cata", "Wings", "Drivetrain", "Elevation"];

  return (
    <div className="models-grid">
      {modelNames.map((modelName, index) => (
        <div key={index} className="model-square">
                  <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [4, 0, 15], fov: 60 }} className='Model'>
        <color attach="background" args={['skyblue']} />
        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 1 }}
          adjustCamera={1}
          environment="city"
        >
        </Stage>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
      </Canvas>

          <Link to={`/models/${modelName}`} className="model-link">
            {modelName}
          </Link>
        </div>
      ))}

      <Routes>
        {modelNames.map((modelName, index) => (
          <Route key={index} path={`/${modelName}`} element={<CanvasComp modelName={modelName} />} />
        ))}
      </Routes>
    </div>
  );
}
