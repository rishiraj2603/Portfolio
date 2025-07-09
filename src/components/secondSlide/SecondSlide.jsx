import React from "react";
import AboutMe from "./aboutMe/AboutMe";
import LeftEmoji from "./flowers/LeftEmoji";

const SecondSlide = () => {
  return (
    <div className="m-5 bg-blue-300 grid-cols-2 h-screen w-screen ">
      <LeftEmoji></LeftEmoji>
      <AboutMe></AboutMe>
    </div>
  );
};

export default SecondSlide;
