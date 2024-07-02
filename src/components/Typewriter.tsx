"use client";

import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

import { EarthIcon, Github, GithubIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";

export function Typewriter() {
  const words = [
    {
      text: "Pratham",
    },
    {
      text: "Dupare",
    },
    {
      text: "FullStack",
      className:
        "inline bg-gradient-to-r from-[#FFA500] via-[#FF7F00] to-[#FF4500] text-transparent bg-clip-text",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-8 justify-center h-screen">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  font-bold mb-10">
        Freelancer, Web Developer, Linux Nerd
      </p>
      <div className="flex flex-row items-center gap-5">
        <DirectionAwareHover imageUrl="/hero.png">Pratham</DirectionAwareHover>
      </div>
      <div className="flex flex-row md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link href="https://github.com/prathamdupare">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex flex-row gap-2 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <GithubIcon />
              GitHub
            </div>
          </button>
        </Link>
        <Link href="https://blog.fosspage.com/">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex flex-row gap-2 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <EarthIcon />
              Blog
            </div>
          </button>
        </Link>
      </div>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
