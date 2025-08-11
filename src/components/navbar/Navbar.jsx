import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-bold text-3xl flex h-[8%] justify-between m-[0.7rem] p-[1.7rem]">
      <div className="logo ">logo</div>
      <div className="flex justify-between w-[70%]">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>Work</p>
        <Link to={"/contact"}>
          <p>Services</p>
        </Link>
        <p>About Me</p>
      </div>
    </nav>
  );
};

export default Navbar;
