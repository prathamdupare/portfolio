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
    <Card className="m-3">
      <CardHeader className="flex flex-row sm:flex-row ">
        <div>
          <div className="flex w-full my-2 border-2 border-white">
            <img className="object-cover" src={Image} alt="ProjectImage" />
          </div>
          <CardTitle className="flex flex-col p-2 flex-wrap">{Title}</CardTitle>

          <div className="p-2 flex flex flex-wrap">
            {Tools.map((title: string, index: number) => (
              <Badge className="m-1 " key={index} variant="">
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
