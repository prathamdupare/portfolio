import React from "react";
import {
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";

const buttonData = [
  { icon: <GitHubLogoIcon />, label: "Github", link: "#" },
  { icon: <GlobeIcon />, label: "Blog", link: "#" },
  { icon: <TwitterLogoIcon />, label: "Twitter", link: "#" },
  {
    icon: <FileTextIcon />,
    label: "Resume",
    link: "https://resume.com",
  },
];

export default function Sidebar() {
  return (
    <div className="w-full flex flex-col p-2 gap-4">
      {buttonData.map((button, index) => (
        <Link href={button.link} key={index}>
          <Button className="w-full" variant="outline">
            <div className="m-2" a>
              {button.icon}
            </div>
            {button.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
