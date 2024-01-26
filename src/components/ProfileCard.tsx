import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <Card className="m-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <CardHeader className="flex flex-row ">
        <img className="w-[100px] mx-3" src="https://github.com/shadcn.png" />
        <div>
          <CardTitle className="text-xl">Pratham Dupare</CardTitle>
          <CardDescription className="text-white">
            Web Developer
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
