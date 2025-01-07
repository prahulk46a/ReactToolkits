import gsap from "gsap";
import React, { useEffect } from "react";

const UseGsapEx4 = () => {
  useEffect(() => {
    gsap.to("#box", {
      x: "100vw",
      duration: 5,
      repeat: -1, // Loop infinitely
      ease: "bounce.in", // Linear movement
    });
  }, []);
  return (
    <div>
      <div id="box" className="w-5 h-5">
        ⚽
      </div>
    </div>
  );
};

export default UseGsapEx4;
