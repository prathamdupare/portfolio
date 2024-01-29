import ProjectCard from "./ProjectCard";

export default function Projects() {
  const Tools = [
    "JavaScript",
    "TailwindCSS",
    "NodeJS",
    "ReactJS",
    "MongoDB",
    "ExpressJS",
  ];
  const Tools2 = ["TypeScript", "NodeJS", "MongoDB", "ExpressJS"];
  const image = "https://github.com/shadcn.png";
  const mernBlog = "images/showcase.jpg";
  const restAPI = "images/rest.jpg";

  return (
    <>
      <div className="flex flex-col  ">
        <div className="mx-3 flex w-full font-bold">Projects</div>
        <div className="flex flex-row">
          <ProjectCard Image={mernBlog} Title="MERN Blog Site" Tools={Tools} />
          <ProjectCard Image={restAPI} Title="Rest API" Tools={Tools2} />
        </div>
      </div>
    </>
  );
}
