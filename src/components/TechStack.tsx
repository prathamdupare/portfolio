import React from "react";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLinux, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const techStackIcons = [
  { icon: IoLogoHtml5, color: "skyblue" },
  { icon: IoLogoCss3, color: "orange" },
  { icon: IoLogoJavascript, color: "yellow" },
  { icon: FaReact, color: "skyblue" },
  { icon: IoLogoNodejs, color: "green" },
  { icon: SiTailwindcss, color: "deepskyblue" },
  { icon: SiGnubash, color: "gray" },
  { icon: FaLinux, color: "yellow" },
  { icon: TbBrandNextjs, color: "orange" },
  { icon: SiTypescript, color: "deepskyblue" },
  { icon: FaGitAlt, color: "darkorange" },
  { icon: FaGithub, color: "white" },
];

const TechStack = () => {
  return (
    <div className="m-3">
      <div className="font-bold mb-3">Tech Stack</div>
      <div className="flex gap-3 flex-wrap">
        {techStackIcons.map((item, index) => (
          <Badge
            key={index}
            className="h-14 w-14 flex items-center justify-center"
            variant="outline"
          >
            {React.createElement(item.icon, {
              color: item.color,
              size: 35,
              className: "w-36",
            })}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
