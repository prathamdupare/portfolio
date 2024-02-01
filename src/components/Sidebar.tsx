import {
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <>
      <div className="w-full flex  flex-col p-2 gap-4">
        <Button className="w-full" variant="outline">
          <GitHubLogoIcon className="mr-2" />
          Github
        </Button>

        <Button className="w-full" variant="outline">
          <GlobeIcon className="mr-2" />
          Blog
        </Button>

        <Button className="w-full" variant="outline">
          <TwitterLogoIcon className="mr-2" />
          Twitter
        </Button>

        <Button className="w-full" variant="outline">
          <FileTextIcon className="mr-2" />
          Resume
        </Button>
      </div>
    </>
  );
}
