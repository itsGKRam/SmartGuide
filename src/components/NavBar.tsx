"use client";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import MobileSideBarComponent from "./MobileSideBar";
import { ModeToggle } from "./ThemeToggle";

const font = Poppins({ weight: "600", subsets: ["latin"] });
interface NavbarProps {
  isPro: boolean;
}

const NavBarComponent = ({ isPro }: NavbarProps) => {
  const proModel = useProModal();

  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary'>
      <div className='flex items-center'>
        <MobileSideBarComponent isPro={isPro} />
        <Link href='/'>
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}>
            SmartGuide AI
          </h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-3'>
        {!isPro && (
          <Button onClick={proModel.onOpen} size='sm' variant='premium'>
            Upgrade
            <Sparkles className='h-4 w-4 fill-white text-white ml-2' />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default NavBarComponent;
