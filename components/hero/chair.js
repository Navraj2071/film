import React from "react";

const Chair = () => {
  return (
    <mesh rotation={[45, 45, 45]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default Chair;
