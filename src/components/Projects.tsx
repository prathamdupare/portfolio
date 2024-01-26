import ProjectCard from "./ProjectCard";

export default function Projects() {
  const Tools = ["TypeScript", "JavaScript", "HTML"];
  const Tools2 = ["TypeScript", "JavaScript", "HTML", "TailwindCSS"];
  const image = "https://github.com/shadcn.png";

  return (
    <>
      <div className="flex flex-row">
        <ProjectCard Image={image} Title="Discord Clone" Tools={Tools} />
        <ProjectCard Image={image} Title="Hello Clone" Tools={Tools2} />
        <ProjectCard Image={image} Title="Hello World" Tools={Tools} />
      </div>
    </>
  );
}
