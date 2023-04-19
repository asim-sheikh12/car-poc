import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// import './styles.css'
import { Car } from '../../models/Car/Innova'
export default function App() {
  return (
    <Canvas style={{ background: '#171717' }}>
      <Suspense fallback={null}>
        <Car />
      </Suspense>
    </Canvas>
  )
}
