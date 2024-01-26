import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProfileCard from "@/components/ProfileCard";
import SkillCard from "@/components/SkillCard";
import Skills from "@/components/Skills";

function MainSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-[200px] max-w-[300px]">
        This is Sidebar
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <ProfileCard />
        <Skills />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainSection;
