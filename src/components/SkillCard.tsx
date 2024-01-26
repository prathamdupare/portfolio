import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const SkillCard = ({ Title }) => {
  return (
    <Card className="m-4">
      <CardHeader className="flex flex-row ">
        <div>
          <CardTitle className="p-">{Title}</CardTitle>
          <div className="p-2">
            <Badge variant="outline">TypeScript</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">TypeScript</Badge>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
