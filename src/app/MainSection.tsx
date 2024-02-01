import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProfileCard from "@/components/ProfileCard";
import SkillCard from "@/components/SkillCard";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

function MainSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-[200px] max-w-[400px]">
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <ProfileCard />
        <Projects />
        <Skills />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainSection;
