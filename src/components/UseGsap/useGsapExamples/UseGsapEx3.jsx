import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const UseGsapEx3 = () => {
  useEffect(() => {
    gsap.to(divRef.current, {
      rotation: 360, // Full spin
      scale: 1.5, // Grow 1.5x
      duration: 2,
      ease: "elastic.out(1, 0.3)", // Elastic ease
    });
  }, []);
  const divRef = useRef();

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div
        ref={divRef}
        className="flex justify-center items-center   w-20 h-20 bg-red-500 text-white"
      >
        Hello World
      </div>
    </div>
  );
};

export default UseGsapEx3;
