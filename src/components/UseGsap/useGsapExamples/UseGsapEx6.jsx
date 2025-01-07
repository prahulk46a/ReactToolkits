import gsap from "gsap";
import React, { useEffect } from "react";

const UseGsapEx6 = () => {
  useEffect(() => {
    gsap.to("#box", {
      backgroundColor: "#ff0000", // Change to red
      duration: 2,
      repeat: -1,
      yoyo: true, // Back to original color
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div>
      <div id="box">TextArea</div>
    </div>
  );
};

export default UseGsapEx6;
