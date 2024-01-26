import { Button } from "./ui/button";

export default function Sidebar() {
  return (
    <>
      <div className="w-full flex  flex-col p-2 gap-4">
        <Button className="w-full" variant="outline">
          Menu
        </Button>

        <Button className="w-full" variant="outline">
          Settings
        </Button>

        <Button className="w-full" variant="outline">
          New
        </Button>

        <Button className="w-full" variant="outline">
          More
        </Button>
      </div>
    </>
  );
}
