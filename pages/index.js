import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Features from "@/components/features/features";
import HowItWorks from "@/components/howItWorks/howItWorks";
import Team from "@/components/team/team";
import Roadmap from "@/components/roadmap/roadmap";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

import ChairModel from "@/components/hero/ChairModel";
import Tut from "@/components/hero/tut";
import { Canvas } from "@react-three/fiber";
import Lavaflow from "@/components/background/lavaflow";
import { PerspectiveCamera } from "@react-three/drei";
import { useState, useEffect } from "react";
import { ScrollControls } from "@react-three/drei";
import { Scroll } from "@react-three/drei";
import Head from "next/head";

export default function Home() {
  const fov = 60; // field of view in degrees
  const [aspect, setAspect] = useState(4 / 3);
  const near = 0.1; // near clipping plane
  const far = 1000; // far clipping plane
  const [xBound, setXBound] = useState(0);
  const [yBound, setYBound] = useState(0);

  useEffect(() => {
    poppulateWindowData();
    window.addEventListener("resize", poppulateWindowData);

    return () => window.removeEventListener("resize", poppulateWindowData);
  }, []);

  const poppulateWindowData = () => {
    let aspectRatio = window.innerWidth / window.innerHeight;
    setAspect(aspectRatio);
    let x_boundary = 5 / Math.tan((30 * Math.PI) / 180) / 2;
    let y_boundary = x_boundary / aspectRatio;
    setXBound(x_boundary);
    setYBound(y_boundary);
  };

  return (
    <>
      <Head>
        <title>FilmFinanceApp</title>
        <link rel="shortcut icon" href="/logo4.png" />
        <meta
          name="description"
          content="Decentralized media funding, trading and streaming platform."
        />
      </Head>
      <Canvas
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
          position: "fixed",
          top: "0px",
          zIndex: 0,
        }}
      >
        <ambientLight intensity={1} />
        <Lavaflow xBound={xBound} yBound={yBound} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 5]}
          lookAt={[0, 0, 0]}
          fov={fov}
          aspect={aspect}
          near={near}
          far={far}
        />
      </Canvas>
      <div className="overlay"></div>
      <div className="gradientBackground2"></div>
      <div className="contentOverlay">
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <Team />
        <Roadmap />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}
