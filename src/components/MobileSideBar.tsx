import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBarComponent from "./SideBar";
// import { Sidebar } from "@/components/sidebar";

const MobileSideBarComponent = ({ isPro }: { isPro: boolean }) => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary pt-10 w-32'>
        <SideBarComponent isPro={isPro} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBarComponent;
