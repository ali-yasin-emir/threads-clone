import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgDetailsMore } from "react-icons/cg";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" hidden max-md:flex max-md:items-center max-md:text-4xl">
          <CgDetailsMore />
        </div>
      </SheetTrigger>

      <SheetContent className="bg-slate-800">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
