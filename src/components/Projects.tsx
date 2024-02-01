import ProjectCard from "./ProjectCard";

import { projectData } from "../config";

export default function Projects() {
  return (
    <>
      <div className="flex flex-col mt-5">
        <div className="mx-3 flex w-full font-bold">Projects</div>
        <div className="flex flex-row">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              Image={project.image}
              Title={project.title}
              Tools={project.tools}
            />
          ))}
        </div>
      </div>
    </>
  );
}
