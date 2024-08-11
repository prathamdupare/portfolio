"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

import { EarthIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import { useToast } from "@/components/ui/use-toast";
export function Typewriter() {
  const { toast } = useToast();
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
    <div className="flex flex-col items-center h-screen mt-8 justify-center p-4 sm:p-6 md:p-8">
      <p className="text-neutral-600 dark:text-neutral-200 bg-secondary p-4 mt-8 rounded-md text-base font-bold mb-10 text-center max-w-full sm:max-w-lg md:max-w-xl">
        Hey! Welcome to my portfolio! I am a FullStack Developer, Freelancer,
        and a Linux Nerd.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-5 flex-wrap justify-center">
        <DirectionAwareHover imageUrl="/hero.png">Pratham</DirectionAwareHover>

        <div className="relative mockup-code mb-6"></div>

        <div className="flex flex-col items-center justify-center bg-background p-4 rounded-lg shadow-lg max-w-full sm:max-w-md">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl font-bold text-card-foreground text-center">
              Run this command in your terminal to send direct notification to
              my phone.
            </p>
            <div className="flex items-center bg-black p-3 rounded-md space-x-2 w-full justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="text-card-foreground hover:bg-muted/50"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "curl -d 'Hey!' server.fosspage.com/alerts",
                  );
                  toast({
                    title: "Command copied to clipboard",
                    description:
                      "Run it inside your terminal to send a direct notification on my phone.",
                  });
                }}
              >
                <CopyIcon className="w-5 h-5" />
                <span className="sr-only">Copy text</span>
              </Button>
              <p className="text-muted-foreground text-sm sm:text-base">
                curl -d &quot;Hey!&quot; server.fosspage.com/alerts
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 justify-center">
        <Link href="https://github.com/prathamdupare">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex flex-row gap-2 px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              <GithubIcon />
              GitHub
            </div>
          </button>
        </Link>
        <Link href="https://blog.fosspage.tech/">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="flex flex-row gap-2 px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
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

function CopyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
