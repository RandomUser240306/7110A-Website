import React from 'react'

import "./Home.css" 
import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei"; 
import { MeshoptDecoder } from '@meshopt/meshopt';

function Model(props){
  const {scene} = useGLTF("https://media.githubusercontent.com/media/Ashwin-Iyer1/7110A-Website/main/bot.glb", MeshoptDecoder);
  return <primitive object={scene} {...props} /> 
}

export default function Home
() {
  return (
    <div>
      <Canvas 
          dpr={[1,2]} 
          shadows camera={{fav: 45}}
          style={{"position": "absolute"}}
        >
          <PresentationControls 
            speed={1.5} 
            global zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={null}>
              <Model scale={.1} />
            </Stage>
          </PresentationControls>
        </Canvas>
        <div className="content">
            <h1>Carroll <span>Robotics</span></h1>
            <h1 className="portfolio-text">7110A Website</h1>
        </div>
    </div>
  )
}
