import gsap from "gsap";
import React, { useEffect } from "react";

const UseGsapEx5 = () => {
  useEffect(() => {
    gsap.to("#water", {
      x: 400,
      y: 200,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut", // Smooth sine wave motion
    });
  }, []);
  return <div id="water">Water</div>;
};

export default UseGsapEx5;
