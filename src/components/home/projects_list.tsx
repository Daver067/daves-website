import React from "react";
import Project from "./project";
import projects from "./projects";
const ProjectsList = () => {
  return (
    <div className=" ">
      <div className="  pb-10 lg:pl-8">
        <h3 className="text-gray-400 mx-12 lg:mx-24 text-xl font-bold leading-tight md:text-3xl font-poppins md:pl-48">
          Things I&apos;ve built:
        </h3>
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
