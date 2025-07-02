import React from "react";

const RightContent = () => {
  return (
    <div className="bg-design-purple-bg relative h-screen rounded-r-3xl">
      <div>
        <div className=" size-18 absolute top-56.5 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-26 absolute top-38 left-5.5 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-56.5 left-19.5 bg-design-purple-block-300 -skew-y-22"></div>
      </div>

      <div>
        <div className=" size-18 absolute top-56.5 left-39.5 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-26 absolute top-38 left-45 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-56.5 left-59 bg-design-purple-block-200 -skew-y-22"></div>
      </div>

      <div>
        <div className=" size-18 absolute top-44 left-39 bg-design-pink-block-600 -skew-y-22"></div>
        <div className=" size-26 absolute top-26 left-25 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-44 left-19 bg-design-pink-block-800 skew-y-22"></div>
      </div>

      <div>
        <div className="size-[30rem] bg-design-blue-block-700 rotate-x-66 rotate-z-45 absolute top-72 -left-22"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-900 top-149 -left-47 absolute skew-y-22"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-500 top-149 left-38 absolute -skew-y-22"></div>
      </div>
      <div>
        <div
          style={{ clipPath: "polygon(0 76%, 100% 7%, 100% 100%, 0% 100%)" }}
          className="bg-design-purple-block-100 h-[42%] w-[100%] rounded-br-3xl absolute bottom-0"
        ></div>
        <div className="size-20  rounded-full rotate-x-66 rotate-z-45 absolute bg-design-blue-circle-900 top-130 left-27"></div>
        <div className="size-17  rounded-full bg-linear-to-l from-orange-400 from-30% to-orange-700 absolute top-115 left-28 animate-up"></div>
      </div>
    </div>
  );
};

export default RightContent;
