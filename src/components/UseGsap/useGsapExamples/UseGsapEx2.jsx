import gsap from "gsap";
import React from "react";

const UseGsapEx2 = () => {
  gsap.to("div", {
    x: 200,
    y: 200,
    duration: 5,
    ease: "bounce.out", // Bouncing effect
  });

  return (
    <div>
      <div className="p-3 mb-2 bg-success text-white w-3 h-2"></div>
    </div>
  );
};

export default UseGsapEx2;
