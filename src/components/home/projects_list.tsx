import React from "react";
import Project from "./project";
import projects from "./projects";
const ProjectsList = () => {
  return (
    <div className=" ">
      <div className="border-b-2 border-zinc-500 py-5 pl-8">
        <h1 className="text-gray-400 mx-10 text-xl font-bold leading-tight  sm:leading-tight sm:text-2xl lg:text-3xl lg:leading-tight font-pj">
          Projects I have built:
        </h1>
      </div>
      {projects.map((project) => {
        return (
          <Project
            name={project.name}
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
