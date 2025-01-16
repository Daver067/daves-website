import React from "react";
import Project from "./project";
import projects from "./projects";
const ProjectsList = () => {
  return (
    <div className=" ">
      <div className=" border-b-2 border-zinc-500 py-5 lg:pl-8">
        <h1 className="text-gray-400 mx-24 text-xl font-bold leading-tight lg:text-3xl font-poppins">
          Projects I have built:
        </h1>
      </div>
      {projects.map((project) => {
        return (
          <Project
            key={project.name}
            name={project.name}
            route={project.route}
            img={project.img}
            description={project.description}
            repo={project.repo}
            website={project.website}
            languages={project.languages}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
