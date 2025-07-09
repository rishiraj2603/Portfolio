import React from "react";

const LeftContent = () => {
  return (
    <div>
      <div className="font-style flex  w-[100%] relative">
        <div className="h-[80vh] w-[20%] relative">
          <p className="rotate-270 absolute top-10 left-8">2023</p>
          <p className="border-2 h-[12rem] w-0 absolute top-18 left-13"></p>
          <p className="rotate-270 absolute left-[-1.2rem] top-83 w-max">
            Full Stack Developer
          </p>
          <p className="border-2 h-[30%] w-0 absolute top-106 left-15"></p>
          <p className="rotate-270 absolute top-165 left-9">present</p>
        </div>

        <div className="flex flex-col justify-center gap-5 w-[80%]">
          <p className="text-7xl">Hello</p>
          <p className="text-xl">I'm Rishi Raj</p>
          <p className="text-xl">
            "Programming isn't about what you know; <br /> it's about what you
            can figure out.” <br /> - Chris Pine
          </p>
        </div>
        <div
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
          className="h-[18%] w-[24%] bg-design-blue-block-600 absolute right-0 -bottom-19.5"
        ></div>
      </div>
    </div>
  );
};

export default LeftContent;
