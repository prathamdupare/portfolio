import SkillCard from "./SkillCard";

export default function Skills() {
  const Skills = ["TypeScript", "JavaScript", "HTML"];
  const BackendSkills = ["TypeScript", "JavaScript", "HTML"];

  return (
    <div className="m-4">
      <div className="font-bold my-3 pl-3">Skills</div>
      <div className="flex flex-row">
        <SkillCard Title="Frontend" Skills={Skills} />
        <SkillCard Title="Backend" Skills={BackendSkills} />
      </div>
    </div>
  );
}
