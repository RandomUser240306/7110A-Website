import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { MeshoptDecoder } from 'meshoptimizer';
import './Home.css';

function Model(props) {
  const { scene } = useGLTF('https://media.githubusercontent.com/media/Ashwin-Iyer1/7110A-Website/main/bot.glb', MeshoptDecoder);
  return <primitive object={scene} rotation={[Math.PI / -2, 0, 0]} {...props} />;
}

export default function Home() {
  return (
    <div>
      <div className="content">
        <h1>
          Carroll <span>Robotics</span>
        </h1>
        <h1 className="portfolio-text">7110A Website</h1>
      </div>
      <div className='Model-container'>
      <Canvas shadows gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [4, 0, 15], fov: 60 }} className='Model'>
        <color attach="background" args={['skyblue']} />
        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 1 }}
          adjustCamera={1}
          environment="city"
        >
          <Model scale={1}/>
        </Stage>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
      </Canvas>

      </div>
    </div>
  );
}
