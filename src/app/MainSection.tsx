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
import TechStack from "@/components/TechStack";

import { Separator } from "@/components/ui/separator";

import { ScrollArea } from "@/components/ui/scroll-area";

function MainSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="">
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <ScrollArea className="h-[100%] w-full rounded-md border p-4">
          <ProfileCard />
          <Separator />
          <TechStack />
          <Separator />

          <Separator />
          <Projects />
          <Separator />
        </ScrollArea>

        <div className="h-36">hello</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainSection;
