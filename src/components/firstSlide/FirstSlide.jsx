import React from "react";
import Navbar from "./navbar/Navbar";
import LeftContent from "./middleContent/LeftContent";
import RightContent from "./middleContent/RightContent";

const FirstSlide = () => {
  return (
    <div className="bg-firstSlide w-screen h-screen mt-0">
      <div className="grid grid-cols-2 p-2">
        <div>
          <Navbar></Navbar>
          <LeftContent></LeftContent>
        </div>
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default FirstSlide;
