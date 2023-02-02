import React from "react";
import { extend, useLoader, Vector3 } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import lexend from "../../assets/lexend_regular.json";
import lobster from "../../assets/lobster_regular.json";
import { TextureLoader } from "three";

extend({ TextGeometry });

interface TextProps {
  font: "lexend" | "lobster";
  text: string;
  matcap: "yellow" | "black";
  position?: Vector3;
  fontSize?: number;
  bevelSize?: number;
  bevelThickness?: number;
}

const Text = ({
  font,
  text,
  matcap,
  position,
  fontSize,
  bevelSize = 0.02,
  bevelThickness = 0.05,
}: TextProps) => {
  const fontUrl =
    font === "lobster"
      ? "/fonts/lobster_regular.json"
      : "/fonts/lexend_regular.json";
  const [fontLoaded] = useLoader(FontLoader, [fontUrl]);

  const matcapUrl =
    matcap === "yellow"
      ? "/assets-3d/matcaps/1.png"
      : "/assets-3d/matcaps/3.png";
  const [map] = useLoader(TextureLoader, [matcapUrl]);

  return (
    <mesh position={position}>
      {/* @ts-ignore */}
      <textGeometry
        args={[
          text,
          {
            font: fontLoaded,
            size: fontSize ?? 1,
            height: 0.2,
            bevelEnabled: true,
            bevelThickness: bevelThickness,
            bevelSize: bevelSize,
            bevelOffset: 0,
            bevelSegments: 5,
          },
        ]}
      />
      <meshMatcapMaterial matcap={map} />
    </mesh>
  );
};

export default Text;
