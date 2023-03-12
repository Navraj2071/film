import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";

const Lavaflow = ({ xBound, yBound }) => {
  const radius =
    (Math.pow(Math.pow(xBound / 2, 2) + Math.pow(yBound / 2, 2), 0.5) * 2.5) /
    3;

  const distortion = 1;
  const speed = 1.5;

  return (
    <>
      <Sphere args={[radius, 128, 128]} position={[xBound, yBound, 0]}>
        <MeshDistortMaterial
          distort={distortion}
          speed={speed}
          color="#00e7d8"
        />
      </Sphere>
      <Sphere args={[radius, 128, 128]} position={[-xBound, 0, 0]}>
        <MeshDistortMaterial
          distort={distortion}
          speed={speed}
          color="#0086e7"
        />
      </Sphere>
      <Sphere args={[radius, 128, 128]} position={[0, -yBound, 0]}>
        <MeshDistortMaterial
          distort={distortion}
          speed={speed}
          color="#ff06aa"
        />
      </Sphere>
    </>
  );
};

export default Lavaflow;
