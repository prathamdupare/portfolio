import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import GitHub from "@mui/icons-material/GitHub";
import ArrowOutward from "@mui/icons-material/ArrowOutward";

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
          <div className="flex gap-3">
            <Button variant="secondary">
              Live Preview{" "}
              <div>
                <ArrowOutward />
              </div>
            </Button>
            <Button variant="secondary">
              Source Code <GitHubIcon className="ml-2" />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
