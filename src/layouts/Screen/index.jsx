import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Effects } from "../../containers";
import { InnovaCrysta } from "../../components/Car";

export const Screen = ({ children }) => {
  return (
    <Canvas
      className="canvas"
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 15], fov: 25 }}
    >
      {children}
      {/* <InnovaCrysta  /> */}
      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        {/* Key */}
        {/* <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
      </Environment>
      <Effects />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
};
