"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "FullStack Web Developer Intern",
    description:
      "Developed and implemented a comprehensive website for EMBO ISSPP Meet, handling all aspects from conceptualization to execution, Designed and integrated features with ReactJs including schedule management and online payment functionality, Explored ways to visualize GitHub collaboration in a classroom setting",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/embo.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="EMBO ISPP"
        />
      </div>
    ),
  },
  {
    title: "Freelancing, Remote • Full Stack Engineer (Upwork)",
    description:
      "Improved the performance and visuals of a Next.js-based full-stack website, boosting user retention by 40%, Eliminated 100% of manual updates in a Next.js-based full-stack app by integrating a CMS.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="upwork.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];
export function Experience() {
  return (
    <div className="p-10">
      <p className="text-2xl mb-4 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Experience
      </p>
      <StickyScroll content={content} />
    </div>
  );
}
