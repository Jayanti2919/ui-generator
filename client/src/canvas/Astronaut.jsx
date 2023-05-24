import React, {Suspense, useRef, useState} from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { meshBounds, Preload, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Astronaut = () => {
  const astronaut = useGLTF('./Astronaut2/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} position={[5, 10, -5]}/>
      <spotLight 
      position={[0,0,0]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={astronaut.scene}
        scale={0.06}
        position={[8, -8, -10]}
        rotation={[0, Math.PI/2, 0]}
      />
    </mesh>
  )
}

const AstronautCanvas = () =>{
  return(
  <Canvas
    frameloop='demand'
    shadows
    camera={{position:[0,20,-20], fov: 65}}
    gl={{preserveDrawingBuffer:true}}
  >
    <Suspense fallback={null}>
      <OrbitControls 
        autoRotate
        autoRotateSpeed={3}
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Astronaut />
    </Suspense>
    <Preload all/>
  </Canvas>
  )
}

export default AstronautCanvas