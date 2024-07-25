'use client'

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { Sky, CameraControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { BackgroundTerrain } from './BackgroundTerrain'

export const SceneRoot = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Sky />
        <Environment preset="warehouse" />
        {children}
        <BackgroundTerrain />
        <PerspectiveCamera makeDefault position={[.3, .2, .3]} fov={30} />
        <CameraControls makeDefault />
      </Canvas>
    </Suspense>
  )
}
