import { Categories } from "@/components/Categories";
import { Companions } from "@/components/Companions";
import SearchInputComponent from "@/components/SearchInput";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        contains: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <SearchInputComponent />
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  );
};

export default RootPage;
