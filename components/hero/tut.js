import { RoundedBox } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Scroll } from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import LavaLamp from "../background/lavaflow";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Tut = () => {
  const myref = useRef();
  const noOfSpheres = 20;
  const colors = ["#00e7d8", "#0086e7", "#ff06aa"];
  const [spheresData, setSpheresdata] = useState([]);

  // useEffect(() => {
  //   const sphereInterval = setInterval(() => poppulateSpheresData(), 5000);

  //   return () => clearInterval(sphereInterval);
  // }, []);

  // const poppulateSpheresData = () => {
  //   let newSpheresData = [];
  //   spheresData.map((sphere, index) => {
  //     if (index !== 0) {
  //       newSpheresData.push(sphere);
  //     }
  //   });
  //   newSpheresData.push({
  //     xPos: randomIntFromInterval(-40, 40) / 10,
  //     yPos: randomIntFromInterval(-40, 40) / 10,
  //     color: colors[randomIntFromInterval(0, 2)],
  //   });
  //   setSpheresdata(newSpheresData);
  // };

  return (
    <>
      <ScrollControls pages={0} damping={0.1}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        {/* {spheresData.map((sphere, index) => (
          <MySphere
            xPos={sphere.xPos}
            yPos={sphere.yPos}
            color={sphere.color}
            key={"sphere-" + index}
          />
        ))} */}

        {/* <MySphere xPos={-2} yPos={-2} color="#00e7d8" />
        <MySphere xPos={0} yPos={2} color="#0086e7" />
        <MySphere xPos={2} yPos={-2} color="#ff06aa" /> */}

        <LavaLamp />

        <Scroll html>
          <MyHtml />
          <h1>html in here (optional)</h1>
          <h1 style={{ top: "100vh" }}>second page</h1>
          <h1 style={{ top: "200vh" }}>third page</h1>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Tut;

const MySphere = ({ xPos, yPos, color }) => {
  const distortion = randomIntFromInterval(5, 10) / 5;
  const speed = randomIntFromInterval(0, 20) / 10;
  const [radius, setRadius] = useState(0);
  // useFrame((state, delta) => {
  //   setRadius((prev) => prev + 0.01);
  // });

  return (
    <Sphere args={[1, 100, 200]} position={[xPos, yPos, 0]}>
      <MeshDistortMaterial distort={distortion} speed={speed} color={color} />
    </Sphere>
  );
};

const MyHtml = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // background: "rgba(255, 255, 255 ,0.5)",
        filter: "blur(10)",
      }}
    >
      fdgfgdfg
    </div>
  );
};
