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
        <img
          alt="profile"
          className="w-[100px] mx-3"
          src="https://github.com/shadcn.png"
        />
        <div>
          <CardTitle className="text-xl">Pratham Dupare</CardTitle>
          <CardDescription className="text-white font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            aperiam enim quasi doloribus, ad, officiis corporis et laudantium
            quod excepturi quisquam at. Asperiores porro corporis quisquam optio
            obcaecati, recusandae nihil?
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
