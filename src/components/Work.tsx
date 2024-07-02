"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export default function Work() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-8">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Projects
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Hover over the icons to see info.
      </p>

      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    code: "https://github.com/prathamdupare/codeX",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",

    code: "https://github.com/prathamdupare/codeX",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",

    code: "https://github.com/prathamdupare/codeX",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",

    code: "https://github.com/prathamdupare/codeX",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",

    code: "https://github.com/prathamdupare/codeX",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",

    code: "https://github.com/prathamdupare/codeX",
  },
];
