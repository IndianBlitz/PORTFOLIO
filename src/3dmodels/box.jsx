import React, { useRef } from "react";

import { Canvas, useFrame } from '@react-three/fiber';



const Boxed = () => {
    const boxRef = useRef();
  
    useFrame(() => {
      boxRef.current.rotation.y += 0.01;
    });
  
    return (
      <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"pink"} />
      </mesh>
    );
  };



  

export default Boxed;