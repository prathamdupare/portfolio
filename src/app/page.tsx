import Skills from "@/components/Skills";
import { Typewriter } from "@/components/Typewriter";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Work from "@/components/Work";

import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import { Experience } from "@/components/Experience";
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
        <Skills />
        <Work />
        <Experience />
        <Achievements />
        <Footer />
      </TracingBeam>
    </>
  );
}
