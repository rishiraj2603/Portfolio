import React, { useEffect, useState } from "react";

const AboutMe = () => {
  return (
    <div className="m-auto">
      <div className="relative text-[1.9rem] h-[22rem] w-[40rem] rounded-4xl tracking-tight text-neutral-600 shadow-aboutMe-box">
        <div className="slide_1 animate-box-slide1 bg-[url('./assets/image/card_background_image.png')] absolute h-full w-full border-2 rounded-4xl z-10">
          <p className="absolute left-[10%] top-[25%]">I'm Rishi Raj,</p>
        </div>

        <div className="slide_2 animate-box-slide2 bg-[url('./assets/image/card_background_image.png')] absolute h-full w-full border-2 rounded-4xl z-5">
          <p className="absolute left-[10%] top-[30%]">
            I have completed my Bachelor's in Computer Science.
          </p>
        </div>

        <div className="slide_3 animate-box-slide3 absolute bg-[url('./assets/image/card_background_image.png')] h-full w-full border-2 rounded-4xl z-1">
          <p className="absolute left-[10%] top-[30%]">
            I have a strong passion for full-stack development and <br /> am
            actively seeking job opportunities in this field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
