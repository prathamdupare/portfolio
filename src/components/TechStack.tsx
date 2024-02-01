import React from "react";

import { techStack } from "../config";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  return (
    <div className="m-3">
      <div className="font-bold mb-3">Tech Stack</div>
      <div className="flex gap-3 flex-wrap">
        {techStack.map((item, index) => (
          <Badge
            key={index}
            className="h-14 w-14 flex items-center justify-center"
            variant="outline"
          >
            {React.createElement(item.icon, {
              color: item.color,
              size: 35,
              className: "w-36",
            })}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
