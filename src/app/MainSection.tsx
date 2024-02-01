import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProfileCard from "@/components/ProfileCard";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";

import { Separator } from "@/components/ui/separator";

import { ScrollArea } from "@/components/ui/scroll-area";

function MainSection() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={15} className="max-w-[400px]">
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
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default MainSection;
