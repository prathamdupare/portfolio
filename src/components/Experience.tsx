"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "FullStack Web Developer Intern - EMBO ISPP",
    description:
      "Developed and implemented a comprehensive website for EMBO ISSPP Meet, handling all aspects from conceptualization to execution, Designed and integrated features with ReactJs including schedule management and online payment functionality, Explored ways to visualize GitHub collaboration in a classroom setting",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/embo.svg"
          width={400}
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
          src="/upwork.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cognizance • Web Development Intern - IIT Roorkee",
    description:
      "Collaborated with a team to develop and maintain web applications using modern web technologies, Assisted in the implementation of front-end and back-end features for various web projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/cognizance.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Experience() {
  return (
    <div className="p-10 flex h-screen  justify-center flex-col items-center">
      <p className="text-2xl mb-4 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Experience
      </p>
      <p className="p-3 my-4 bg-secondary rounded-md">Scroll to view more..</p>
      <StickyScroll content={content} />
    </div>
  );
}
