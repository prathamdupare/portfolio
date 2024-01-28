import ProjectCard from "./ProjectCard";

export default function Projects() {
  const Tools = ["TypeScript", "JavaScript", "HTML"];
  const Tools2 = ["TypeScript", "JavaScript", "HTML", "TailwindCSS"];
  const image = "https://github.com/shadcn.png";
  const mernBlog = "images/showcase.jpg";

  return (
    <>
      <div className="">
        <div className="mx-3">Projects</div>
        <div className="flex flex-row">
          <ProjectCard Image={mernBlog} Title="MERN Blog Site" Tools={Tools} />
          <ProjectCard Image={image} Title="Extra" Tools={Tools2} />
          <ProjectCard Image={image} Title="Extra" Tools={Tools} />
        </div>
      </div>
    </>
  );
}
