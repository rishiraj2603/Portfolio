import React from "react";

const ProjectCard = ({ project }) => {
  const { title, link, backGround_color, buttonBackGround_color } = project;
  const descriptionLines = project.description.split("•");
  const skill = project.skills.split(",");
  console.log("🚀 ~ ProjectCard ~ skill:", skill);

  return (
    <div
      className="projectCard h-[50%] w-[25%] rounded-4xl border-2 m-10"
      style={{ backgroundColor: backGround_color }}
    >
      <div className="">
        <div className="mx-auto my-auto border-2 w-fit">{title}</div>
        <div>{descriptionLines[0]}</div>
        <div className="">
          {skill.map((skill) => {
            return (
              <button
                style={{ backgroundColor: buttonBackGround_color }}
                className="rounded-full h-[3rem] w-[7rem] border-2"
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>
      <div className="hidden m-2">
        {descriptionLines.map((line) => {
          return <p>{line}</p>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
