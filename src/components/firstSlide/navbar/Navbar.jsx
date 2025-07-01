import React from "react";

const Navbar = () => {
  return (
    <nav className=" font-style font-bold text-3xl flex justify-between m-4 p-4">
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
