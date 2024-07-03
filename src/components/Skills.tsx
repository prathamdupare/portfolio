import { AnimatedTooltip } from "./ui/animated-tooltip";

const skills = [
  {
    id: 1,
    name: "Next.js Navigator",
    designation: "SSR Specialist",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 2,
    name: "React Ruler",
    designation: "Component Commander",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 3,
    name: "TypeScript T. Script",
    designation: "Master of Typing",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Node.js Nodey",
    designation: "Node Wizard",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 5,
    name: "MongoDB Mania",
    designation: "Database Dynamo",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 6,
    name: "AWS Aficionado",
    designation: "Cloud Conqueror",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: 7,
    name: "Docker Dabbler",
    designation: "Container Captain",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 8,
    name: "Express Enthusiast",
    designation: "Framework Fanatic",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 9,
    name: "PostgreSQL Pro",
    designation: "SQL Samurai",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 10,
    name: "Redis Ruler",
    designation: "Cache Connoisseur",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    id: 11,
    name: "Bash Boss",
    designation: "Command Line Commander",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    id: 12,
    name: "Git Guru",
    designation: "Version Control Virtuoso",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 13,
    name: "Linux Legend",
    designation: "Kernel Conqueror",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

const firstArray = skills.slice(0, 8);
const secondArray = skills.slice(9, 13);

export default function Skills() {
  return (
    <div className="flex flex-col mt-8  items-center justify-center">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Skills
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Hover over the icons to see info.
      </p>

      <div className="flex flex-row items-center justify-center my-10  w-full">
        <AnimatedTooltip items={firstArray} />
      </div>

      <div className="flex flex-row items-center justify-center my-10  w-full">
        <AnimatedTooltip items={secondArray} />
      </div>
    </div>
  );
}
