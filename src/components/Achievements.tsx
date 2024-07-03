"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";

export default function Achievements() {
  const { toast } = useToast();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto  w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Won the Hackathon organized by 30DaysCoding!
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Built a Fullstack Education platform called CodeX!
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="https://www.linkedin.com/posts/pratham-dupare-a99b97247_im-thrilled-to-announce-that-ive-successfully-activity-7189671676463239169-pK52?utm_source=share&utm_medium=member_desktop">
            <button className="p-[3px] my-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg" />
              <div className="flex flex-row gap-2 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                More...
              </div>
            </button>
          </Link>

          <Link href="https://codex.fosspage.com">
            <button className="p-[3px] my-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg" />
              <div className="flex flex-row gap-2 px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Visit CodeX
              </div>
            </button>
          </Link>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
