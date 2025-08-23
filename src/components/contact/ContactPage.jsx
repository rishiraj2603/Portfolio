import React from "react";
import Navbar from "../navbar/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Contact />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="h-dvh w-dvw bg-[#c9dae1] my-2 grid grid-cols-3 justify-center items-center">
      <form className="h-[100%] w-[100%] rounded-4xl p-20 flex flex-col gap-10 col-span-2 relative ">
        <div className="absolute bg-[#3f9db9] size-24 right-110 rounded-full shadow-contact-dots"></div>
        <div className="absolute bg-[#3f9db9] size-13 right-50 shadow-contact-dots rounded-full"></div>
        <div className="absolute bg-[#3f9db9] size-8 right-50 bottom-50 shadow-contact-dots rounded-full"></div>
        <p className="text-5xl my-10">Contact</p>
        <div className="flex gap-10">
          <div className="w-[28%]">
            <p>First name</p>
            <input
              style={{ " -webkit-appearance": "none" }}
              type="text"
              placeholder="John"
              className=" py-2 border-b-1 w-full contactInput "
            />
          </div>
          <div className=" w-[28%]">
            <p>Last name</p>
            <input
              type="text"
              placeholder="Carish"
              className=" py-2 border-b-1 w-full contactInput "
            />
          </div>
        </div>
        <div className=" w-[60%]">
          <p>Email Address</p>
          <input
            type="email"
            placeholder="example@email"
            className=" py-2 border-b-1 w-full contactInput "
          />
        </div>{" "}
        <div className=" w-[60%]">
          <p>Phone number</p>
          <input
            type="text"
            placeholder="+91XXXXXXXXXX"
            className=" py-2 border-b-1 w-full contactInput "
          />
        </div>{" "}
        <div className=" w-[60%]">
          <p>Comment or message</p>
          <input
            type="text"
            placeholder="Type your messages here"
            className=" py-2 border-b-1 w-full contactInput"
          />
        </div>
        <button>Submit</button>
      </form>
      <div className=" h-[100%] w-[100%] bg-[#a8cfdb] rounded-l-full relative ">
        <div className="contactCard flex flex-col p-20 gap-15 absolute -left-50 h-[60%] w-[100%] bg-[#dcf1ec] top-50 border-2">
          <div className="-rotate-45">
            <div>
              <p className="mb-2 text-5xl">Contact Me</p>
              <p className="">Fill up the Form Or Message/Call me</p>
            </div>
            <div className=" flex flex-col gap-2">
              <button className=" w-[15rem] flex gap-2 items-center border-2 px-3 h-[4rem]">
                <BsFillTelephoneFill /> +91 8448509275
              </button>
              <button className=" w-[15rem] flex gap-2 items-center border-2 px-3 h-[4rem]">
                <IoMdMail /> raj@002rishi@gmail.com
              </button>
              <button className=" w-[15rem] flex gap-2 items-center border-2 px-3 h-[4rem]">
                <FaMapPin /> New Delhi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
