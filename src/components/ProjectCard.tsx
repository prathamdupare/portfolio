import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ Image, Title, Tools }) => {
  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row ">
        <div>
          <div className="w-full h-[150px] my-2">
            <img
              className="w-full h-full object-cover"
              src={Image}
              alt="ProjectImage"
            />
          </div>
          <CardTitle className="p-">{Title}</CardTitle>

          <div className="p-2">
            {Tools.map((title, index) => (
              <Badge className="mx-1" key={index} variant="">
                {title}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
