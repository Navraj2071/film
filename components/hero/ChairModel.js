import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ChairModel = ({ scale = 0.7, position = [0, -2.1, 0] }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "/chair.glb");
  const [hovered, hover] = useState(false);
  const pi = Math.PI;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        scale={scale}
        rotation={[(25 * pi) / 180, (-30 * pi) / 180, (0 * pi) / 180]}
        castShadow
      />
    </>
  );
};

export default ChairModel;
