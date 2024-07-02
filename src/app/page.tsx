import { Navbar } from "@/components/Navbar";
import Skills from "@/components/Skills";
import Testor from "@/components/Testor";
import { Typewriter } from "@/components/Typewriter";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Work from "@/components/Work";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <TracingBeam>
        <FloatingNav navItems={navItems} />
        <Typewriter />

        <Separator />
        <Skills />

        <Separator />
        <Work />

        <Separator />

        <Footer />
      </TracingBeam>
    </>
  );
}
