import ProjectCard from "./ProjectCard";

export default function Projects() {
  const Tools = ["TypeScript", "JavaScript", "HTML"];
  const Tools2 = ["TypeScript", "JavaScript", "HTML", "TailwindCSS"];
  const image = "https://github.com/shadcn.png";
  const mernBlog = "images/showcase.jpg";

  return (
    <>
      <div className="flex flex-col  ">
        <div className="mx-3 flex w-full font-bold">Projects</div>
        <div className="flex flex-row">
          <ProjectCard Image={mernBlog} Title="MERN Blog Site" Tools={Tools} />
          <ProjectCard Image={mernBlog} Title="Rest-Api" Tools={Tools2} />
        </div>
      </div>
    </>
  );
}
