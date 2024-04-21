import NavBarComponent from "@/components/NavBar";
import SideBarComponent from "@/components/SideBar";
import { checkSubscription } from "@/lib/subscription";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isPro = await checkSubscription();

  return (
    <div className=' h-full'>
      <NavBarComponent isPro={isPro} />
      <div className=' hidden overflow-hidden md:flex mt-16 w-20 flex-col fixed inset-y-0'>
        <SideBarComponent isPro={isPro} />
      </div>
      <main className=' md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  );
};

export default RootLayout;
