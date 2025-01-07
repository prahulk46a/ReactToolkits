import gsap from "gsap";
import React, { useEffect } from "react";

const UseGsapEx1 = () => {
  useEffect(() => {
    gsap.to("h1", {
      x: 300,
      duration: 3,
    });
  }, []);
  return (
    <div>
      <h1>Heading</h1>
    </div>
  );
};

export default UseGsapEx1;
