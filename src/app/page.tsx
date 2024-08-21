import Skills from "@/components/Skills";
import { Typewriter } from "@/components/Typewriter";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Separator } from "@/components/ui/separator";
import GitHubCal from "@/components/GitHub";

export default function Home() {
  return (
    <div className="backdrop-blur-sm">
      <TracingBeam>
        <Typewriter />
        <Separator />
        <GitHubCal />
        <Separator />
        <Skills />
        <Separator />
        <Work />
        <Separator />
        <Experience />
        <Separator />
        <Achievements />
        <Footer />
      </TracingBeam>
    </div>
  );
}
