import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/lib/css/styles.css'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, ContactShadows, OrbitControls, Html } from '@react-three/drei'
import { Effects } from './Effects'
import { CarModel } from './CarModel'
import { Car } from './models/Car/Innova'
import { FrontGuard, RoofGarnish } from './models/Accessories'

export default function App() {
  const [color, setColor] = useColor('hex', '#121212')
  return (
    <Canvas
      className="canvas"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      {/* <Html className="colorPicker">
        <ColorPicker width={250} height={150} color={color} onChange={setColor} hideHSV dark />
      </Html> */}
      {/* <Car rotation={[0, Math.PI / 0.8, 0]} scale={0.085} /> */}
      {/* <CarModel rotation={[0, Math.PI / 1.5, 0]} scale={0.015} color={color} /> */}
      {/* <FrontGuard rotation={[0, Math.PI / 0.8, 0]} scale={0.085} /> */}
      <RoofGarnish rotation={[0, Math.PI / 0.8, 0]} scale={0.085} />
      {/* <RoofGarnish rotation={[0, Math.PI / 1.5, 0]} scale={0.08} /> */}
      {/* <hemisphereLight intensity={0.9} /> */}
      {/* <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} /> */}

      {/* <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh> */}

      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        {/* <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
      </Environment>
      <Effects />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
  )
}
