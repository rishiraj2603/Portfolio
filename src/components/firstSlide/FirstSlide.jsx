import React from "react";
import Navbar from "./navbar/Navbar";
import LeftContent from "./middleContent/LeftContent";
import RightContent from "./middleContent/RightContent";

const FirstSlide = () => {
  return (
    <div className="bg-firstSlide w-screen h-dvh px-4 m-2">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Navbar></Navbar>
          <LeftContent></LeftContent>
        </div>
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default FirstSlide;
