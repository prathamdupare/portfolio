import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import { sidebarButtons } from "../config";

export default function Sidebar() {
  return (
    <div className="w-full flex flex-col p-2 gap-4">
      {sidebarButtons.map((button, index) => (
        <Link href={button.link} key={index}>
          <Button className="w-full" variant="outline">
            <div className="m-2">{button.icon}</div>
            {button.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
