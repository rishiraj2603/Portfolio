import React, { useEffect, useState } from "react";

const AboutMe = () => {
  return (
    <div className="relative slides_wrapper text-[1.9rem] h-full w-full rounded-4xl tracking-tight text-neutral-600">
      <div className="slide_1 bg-firstSlide absolute h-[24rem] w-[19rem] border-2 top-40 rounded-4xl z-1 shadow-aboutMe-box">
        <p className="absolute left-[10%] top-[5%]">I'm Rishi Raj,</p>
      </div>

      <div className="slide_2 bg-firstSlide  absolute h-[24rem] w-[19rem] border-2 top-40 left-50 rounded-4xl z-5 shadow-aboutMe-box">
        <p className="absolute left-[10%] top-[10%]">
          I have completed my Bachelor's in Computer Science.
        </p>
      </div>

      <div className="slide_3 bg-firstSlide absolute h-[24rem] w-[19rem] border-2 top-40 left-100 rounded-4xl z-10 shadow-aboutMe-box">
        <p className="absolute left-[10%] top-[15%]">
          I have a strong passion for full-stack development and <br /> am
          actively seeking job opportunities in this field.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
