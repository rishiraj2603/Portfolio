import React from "react";
import ProjectCard from "./projectCard/ProjectCard";

const ThirdSlide = () => {
  const projects = [
    {
      title: "Event Management Platform",
      link: "https://event-management-xi-gules.vercel.app/dashboard",
      skills:
        "Node.js,Express,JWT,MongoDB,Socket.io,Axios,React,Material UI,RESTful APIs",
      description:
        "Developed a full-stack Event Management Platform for creating, managing, and joining events. •Implemented secure JWT-based user authentication with guest access and protected routes. •Enabled event creation, deletion, and real-time attendee tracking with WebSocket integration. •Built responsive UI using React.js with clean navigation and modern components. •Integrated real-time updates for event modifications and live attendee counts.",
      backGround_color: "#e0f3ff",
      buttonBackGround_color: "#c2ebfc",
    },
    {
      title: "Responsive E-Commerce",
      link: "https://test-harmoni.vercel.app/",
      skills: "React,Redux,Tailwind CSS,Axios,Responsive UI",
      description:
        "Built a responsive e-commerce front-end using React, Redux, and Tailwind CSS. •Integrated FakeStore API to fetch product, category, and detail data. •Implemented search, category filtering, product detail modals, and cart indicator. •Utilized Redux for global state management (cart and filters). •Designed reusable React components for modularity and maintainability. •Ensured mobile-first responsive design with Tailwind CSS Utilities.",
      backGround_color: "#ffe1cb",
      buttonBackGround_color: "#ffd0b4",
    },
    {
      title: "Medicine Vault",
      link: "https://medicine-vault-bfff.onrender.com/",
      skills: "React,Tailwind CSS,Fuzzy Search,MongoDB,Express,Passport.js",
      description:
        "Medicine Vault provides various medicine knowledge to help users find the medicine they need. •Medicine Information contains: Side-effects, Interaction, Mode Of Action, Precaution, Dosage •The medicine database is created from open-source information. •MongoDB is used as a database to store medical information. • Passport.js is utilized for authentication purposes. •Fuzzy search is implemented using fuse.js. •React and Tailwind is used to create the UI",
      backGround_color: "#e2dbf9",
      buttonBackGround_color: "#d4c6fd",
    },
  ];
  return (
    <div className="projects h-dvh w-dvw flex gap-10 justify-center items-center bg-[#d6ddea]">
      {projects.map((item) => {
        return <ProjectCard project={item}></ProjectCard>;
      })}
    </div>
  );
};

export default ThirdSlide;
