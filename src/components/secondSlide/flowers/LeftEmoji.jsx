import React from "react";

const LeftEmoji = () => {
  return (
    <div className="relative size-[14rem] left-50 top-70">
      <div className=" main_circle border-4 size-56 rounded-full relative z-10 bg-white">
        <div
          style={{ boxShadow: "inset -15px 2px 0px 2px rgba(0,0,0,0.2" }}
          className="main_circle_shadow rounded-full size-[13.5rem] absolute z-1"
        >
          <div
            style={{ boxShadow: "inset -15px 5px 0px 2px rgba(50,48,51)" }}
            className="eye_circle_shadow_left rounded-full size-[6.5rem] z-1 absolute "
          ></div>
          <div className="eye_circle_left bg-black rounded-full size-[6.5rem] absolute left-0 flex items-center justify-center ">
            <div className="animate-emoji-eyes-left rounded-full border-2 h-0 w-0 border-white"></div>
          </div>
          <div
            style={{ boxShadow: "inset -15px 5px 0px 2px rgba(50,48,51)" }}
            className="eye_circle_shadow_right rounded-full size-[6.5rem] absolute z-1 right-0"
          ></div>
          <div className="eye_circle_right rounded-full bg-black size-[6.5rem] absolute right-0  flex items-center justify-center">
            <div className="animate-emoji-eyes-right rounded-full size-6 border-2 border-white"></div>
          </div>
          <div className="smile_white_circle_left rounded-full size-20 bg-white absolute z-2 bottom-15 left-2 ">
            <div
              style={{ clipPath: "circle(50% at 0% 0%" }}
              className="smile_end_left size-8 border-4 rounded-full absolute bottom-2 left-5"
            ></div>
          </div>
          <div className="smile_white_circle_right rounded-full size-20 bg-white absolute z-2 bottom-15 right-2 ">
            <div
              style={{ clipPath: "circle(50% at 100% 0%" }}
              className="smile_end_right size-8 border-4 rounded-full absolute bottom-2 left-5"
            ></div>
          </div>
          <div
            style={{ clipPath: "circle(62% at 50% 100%" }}
            className=" smile border-4 rounded-full absolute size-[9rem] left-8 top-8 z-3"
          ></div>
        </div>
      </div>
      <div className="side_box">
        <div className="shadow-emoji-box animate-emoji-box side_box_left h-[2.5rem] w-[4.5rem] absolute rounded-[30%]"></div>
      </div>
      <div className="h-[3rem] w-[6rem] rounded-t-[2rem] border-4 absolute top-[109%] z-1 left-[29%] flex justify-between items-end bg-blue-500">
        <div className="border-4 h-4 w-0 mx-3"></div>
        <div className="border-4 h-4 w-0 mx-3"></div>
      </div>
      <div className=" neck h-[2rem] w-[1.5rem] border-y-transparent border-4 absolute top-[97%] z-0 left-[45%]  bg-white"></div>
    </div>
  );
};

export default LeftEmoji;
