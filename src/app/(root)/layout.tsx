import NavBarComponent from "@/components/NavBar";
import SideBarComponent from "@/components/SideBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-full'>
      <NavBarComponent isPro={false} />
      <div className=' hidden overflow-hidden md:flex mt-16 w-20 flex-col fixed inset-y-0'>
        <SideBarComponent isPro={false} />
      </div>
      <main className=' md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  );
};

export default RootLayout;
