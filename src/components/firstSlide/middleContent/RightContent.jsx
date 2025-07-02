import React from "react";

const RightContent = () => {
  return (
    <div className="bg-design-purple-bg relative h-screen rounded-r-3xl z-0">
      <div className="absolute animate-block-left">
        <div className=" size-15 absolute top-56.5 left-0 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-22 absolute top-42 left-3.5 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-15 absolute top-56.5 left-14.5 bg-design-purple-block-300 -skew-y-22"></div>
      </div>

      <div className="absolute animate-block-right">
        <div className=" size-15 absolute top-56.5 left-29.5 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-22 absolute top-42 left-33.5 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-15 absolute top-56.5 left-44.5 bg-design-purple-block-200 -skew-y-22"></div>
      </div>
      <div className="absolute animate-block-top-blue -z-1">
        <div className=" size-15 absolute top-45.5 left-29.5 bg-design-purple-block-500 -skew-y-22"></div>
        <div className=" size-21 absolute top-32 left-19 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-15 absolute top-45.5 left-14.5 bg-design-purple-block-200 skew-y-22"></div>
      </div>

      <div className="absolute animate-block-top-pink">
        <div className=" size-15 absolute top-46 left-29 bg-design-pink-block-600 -skew-y-22"></div>
        <div className=" size-21 absolute top-32.5 left-18.5 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-15 absolute top-46 left-14 bg-design-pink-block-800 skew-y-22"></div>
      </div>
      <div>
        <div className="size-[30rem] bg-design-blue-block-700 rotate-x-66 rotate-z-45 absolute top-68 -left-31"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-900 top-145 -left-56 absolute skew-y-22"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-500 top-145 left-29 absolute -skew-y-22"></div>
      </div>
      <div>
        <div>
          <div className=" h-[6.6rem] w-[16rem] absolute top-89.5 left-50 bg-linear-to-r from-design-yellow-block-500 to-design-yellow-block-200 -rotate-y-2 rotate-x-67 rotate-z-48"></div>
          <div className=" h-[5.3rem] w-[10.7rem] absolute top-106.5 left-51 bg-design-yellow-block-900 skew-y-22"></div>
          <div className=" size-21 absolute top-111 left-93.5 bg-design-yellow-block-800 -skew-y-22"></div>
        </div>
        <div
          style={{ clipPath: "polygon(0 70%, 100% 13%, 100% 100%, 0% 100%)" }}
          className="bg-design-purple-block-100 h-[48%] w-[100%] rounded-br-3xl absolute bottom-0"
        ></div>
        <div className="size-20  rounded-full rotate-x-66 rotate-z-45 absolute bg-design-blue-circle-900 top-128 left-19"></div>
        <div className="size-17  rounded-full bg-linear-to-l from-orange-400 from-30% to-orange-700 absolute top-115 left-20 animate-up"></div>
      </div>
    </div>
  );
};

export default RightContent;
