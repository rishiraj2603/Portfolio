import React from "react";
import AboutMe from "./aboutMe/AboutMe";
import LeftEmoji from "./flowers/LeftEmoji";

const SecondSlide = () => {
  return (
    <div className="px-4 m-2 bg-blue-300 grid grid-cols-2 w-screen h-dvh ">
      <LeftEmoji></LeftEmoji>
      <AboutMe></AboutMe>
    </div>
  );
};

export default SecondSlide;
