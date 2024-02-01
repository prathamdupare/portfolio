import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { profileInfo } from "../config";

const ProfileCard = () => {
  return (
    <Card className="m-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <CardHeader className="flex flex-row ">
        <img alt="profile" className="w-[100px] mx-3" src={profileInfo.img} />
        <div>
          <CardTitle className="text-xl">{profileInfo.name}</CardTitle>
          <CardDescription className="text-white font-bold">
            {profileInfo.description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;
