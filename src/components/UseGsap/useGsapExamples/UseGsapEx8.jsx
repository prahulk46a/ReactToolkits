import React from "react";
import SmoothScroll from "./SmoothScroll";

const UseGsapEx8 = () => {
  return (
    <div>
      <SmoothScroll />
      {/* Your app content */}
      <a href="#section1">Go to Section 1</a>
      <a href="#section2">Go to Section 2</a>

      <div id="section1" style={{ height: "100vh", background: "lightblue" }}>
        Section 1
      </div>
      <div id="section2" style={{ height: "100vh", background: "lightgreen" }}>
        Section 2
      </div>
    </div>
  );
};

export default UseGsapEx8;
