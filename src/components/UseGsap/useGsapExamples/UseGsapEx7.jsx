import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const UseGsapEx7 = () => {
  useEffect(() => {
    gsap.to("#c", {
      scrollTrigger: {
        trigger: "#c",
        toggleActions: "play pause none none ",
      },
      x: 500,
      duration: 3,
      rotation: 360,
    });
  }, []);
  return (
    <div className="flex flex-col h-[2000px] justify-around">
      <div className="flex justify-center items-center text-white w-[50px] h-[50px] bg-red-400">
        a
      </div>
      <div className="flex justify-center items-center text-white w-[50px] h-[50px] bg-gray-400">
        b
      </div>
      <div
        id="c"
        className=" flex justify-center items-center text-white w-[50px] h-[50px] bg-blue-400"
      >
        c
      </div>
    </div>
  );
};

export default UseGsapEx7;
