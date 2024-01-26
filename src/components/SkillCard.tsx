import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const SkillCard = ({ Title, Skills }) => {
  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row ">
        <div>
          <CardTitle className="p-">{Title}</CardTitle>
          <div className="p-2">
            {Skills.map((title, index) => (
              <Badge key={index} variant="outline">
                {title}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
