import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Cloud } from "@react-three/drei";
import Text from "./3d/Text";

const Logo3d = () => {
  return (
    <div
      className="w-screen h-screen"
      style={{ width: "99vw", height: "100vh" }}
    >
      <Canvas flat linear camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Cloud />
        <group>
          <Text
            position={[-0.15, 0.05, 0]}
            fontSize={1.3}
            font="lexend"
            text="P"
            matcap="black"
            bevelSize={0.04}
          />
          <Text
            position={[0.3, -0.6, 0]}
            fontSize={1}
            font="lobster"
            text="Q"
            matcap="yellow"
          />
        </group>

        <OrbitControls enablePan={false} zoomSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Logo3d;
