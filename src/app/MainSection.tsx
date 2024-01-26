import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProfileCard from "@/components/ProfileCard";
import SkillCard from "@/components/SkillCard";

function MainSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="min-w-[300px] max-w-[400px]">
        One
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <ProfileCard />
        <SkillCard Title="Frontend" />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainSection;
