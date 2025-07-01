import React from "react";

const RightContent = () => {
  return (
    <div className="bg-design-purple-bg relative rounded-r-3xl">
      <div>
        <div className=" size-18 absolute top-86.5 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-26 absolute top-68 left-5.5 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-86.5 left-19.5 bg-design-purple-block-300 -skew-y-22"></div>
      </div>

      <div>
        <div className=" size-18 absolute top-86.5 left-39.5 bg-design-purple-block-500 skew-y-22"></div>
        <div className=" size-26 absolute top-68 left-45 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-86.5 left-59 bg-design-purple-block-200 -skew-y-22"></div>
      </div>

      <div>
        <div className=" size-18 absolute top-74 left-39 bg-design-pink-block-600 -skew-y-22"></div>
        <div className=" size-26 absolute top-56 left-25 bg-white  rotate-x-66 rotate-z-45"></div>
        <div className=" size-18 absolute top-74 left-19 bg-design-pink-block-800 skew-y-22"></div>
      </div>

      <div>
        <div className="size-[30rem] bg-design-blue-block-700 rotate-x-66 rotate-z-45 absolute top-102 -left-22"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-900 top-179 -left-47 absolute skew-y-22"></div>
        <div className="h-[5rem] w-[21.5rem] bg-design-blue-block-500 top-179 left-38 absolute -skew-y-22"></div>
      </div>

      <div>
        <div
          style={{ clipPath: "polygon(0 69%, 100% 8%, 100% 100%, 0% 100%)" }}
          className="bg-design-purple-block-100 h-[28rem] w-[100%] rounded-br-3xl absolute bottom-0"
        ></div>
      </div>
    </div>
  );
};

export default RightContent;
