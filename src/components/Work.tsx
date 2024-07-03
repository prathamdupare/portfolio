"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto h-screen flex flex-col justify-center mt-8 px-8">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Projects
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        More Projects Coming Soon..
      </p>

      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "CodeX",
    description:
      "Codex is an innovative online education platform designed to streamline the process of managing and enrolling in courses for both students and administrators.",
    link: "https://codex.fosspage.com/",
    code: "https://github.com/prathamdupare/CodeX",
  },
  {
    title: "DailyPulse News",
    description:
      "A personalized AI powered news app using Next.js, React, and TypeScript, Personalized news fetching via NewsAPI, AI-powered article summarization with Gemini AI.",
    link: "https://dailypulse.fosspage.com/",

    code: "https://github.com/prathamdupare/dailypulse-news",
  },
  {
    title: "AI Post Sheets Sync",
    description:
      "PostAI is a web application where users can input a prompt to generate social media posts text using OpenAI’s API and syncs it with Google sheets.",
    link: "https://ai-post-generator-theta.vercel.app/",
    code: "https://github.com/prathamdupare/dailypulse-news",
  },
];
