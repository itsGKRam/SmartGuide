import SearchInputComponent from "@/components/SearchInput";
import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <SearchInputComponent />
    </div>
  );
};

export default RootPage;
