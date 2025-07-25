import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

const ProjectCard = ({ project }) => {
  const { title, link, backGround_color, buttonBackGround_color } = project;
  const descriptionLines = project.description.split("•");
  const skill = project.skills.split(",");

  const [flip, setFlip] = useState(true);

  return (
    <div className="projectCard shadow-projectCard opacity-80 bg-white h-[60%] w-[30%] rounded-4xl  m-10 p-2 transition duration-200 ease hover:shadow-projectCard-hover hover:opacity-100 hover:scale-100 scale-90">
      {flip ? (
        <div
          className=" flex gap-4 p-4 h-[80%] w-[100%] flex-col rounded-4xl"
          style={{ backgroundColor: backGround_color }}
        >
          <div className="text-4xl mt-2 w-fit">{title}</div>
          <div className="my-5 mx-1">{descriptionLines[0]}</div>
          <div className=" flex flex-wrap gap-2">
            {skill.map((skill) => {
              return (
                <button
                  style={{ backgroundColor: buttonBackGround_color }}
                  className="rounded-full shadow-skillButton h-[3.5rem] w-[7.5rem] hover:shadow-projectCard-hover "
                >
                  {skill}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="m-2 p-2 text-xl border-2">
          {descriptionLines.map((line) => {
            return <p>• {line}</p>;
          })}
        </div>
      )}
      <div className="flex mx-3 p-6 justify-between items-center text-3xl">
        {flip ? (
          <p>Explore</p>
        ) : (
          <p>
            Check Out the {}
            <a href={link}>Link</a>
          </p>
        )}
        <button
          onClick={() => {
            setFlip(!flip);
          }}
          className="flex bg-[#f6f6f6] rounded-xl justify-center items-center size-[3rem] "
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
