import React from "react";

const Navbar = () => {
  return (
    <nav className="font-bold text-3xl flex h-[8%] justify-between m-[0.7rem] p-[1.7rem]">
      <div className="logo ">logo</div>
      <div className="flex justify-between w-[70%]">
        <p>Home</p>
        <p>Work</p>
        <p>Services</p>
        <p>About Me</p>
      </div>
    </nav>
  );
};

export default Navbar;
