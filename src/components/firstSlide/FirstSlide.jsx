import React from "react";
import LeftContent from "./middleContent/LeftContent";
import RightContent from "./middleContent/RightContent";
import Navbar from "../navbar/Navbar";

const FirstSlide = () => {
  return (
    <div className="bg-firstSlide w-dvw h-dvh px-4 m-[0.2rem]">
      <div className="grid grid-cols-3">
        <div className="col-span-2 ">
          <Navbar></Navbar>
          <LeftContent></LeftContent>
        </div>
        <RightContent></RightContent>
      </div>
    </div>
  );
};

export default FirstSlide;
