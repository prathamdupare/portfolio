import { ModeToggle } from "./toggle";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between border-2 p-2">
        <div>
          <div className="p-2">Portfolio</div>
        </div>
        <div className="flex gap-2">
          <ModeToggle />
          <Button variant="secondary">
            Contact Me
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
