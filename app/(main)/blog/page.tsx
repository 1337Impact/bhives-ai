import { MainPostItem, MainPostItemLoading } from "@/components/main";
import { SharedPagination } from "@/components/shared";
import { PostWithCategoryWithProfile } from "@/types/collection";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { v4 } from "uuid";

export const revalidate = 0;

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function getPostsData(
  searchParams: { [key: string]: string | string[] | undefined },
  from: number,
  to: number
) {
  const supabase = createClient();
  if (searchParams.category) {
    const { data, error } = await supabase
      .from("posts")
      .select(`*, categories(*), profiles(*)`)
      .eq("published", true)
      .eq("category_id", searchParams.category as string)
      .order("created_at", { ascending: false })
      .range(from, to)
      .returns<PostWithCategoryWithProfile[]>();
    if (!data || error || !data.length) {
      null;
    }
    return data;
  } else if (searchParams.tags) {
    const { data, error } = await supabase
      .from("posts")
      .select(`*, categories(*), profiles(*)`)
      .eq("published", true)
      .order("created_at", { ascending: false })
      .range(from, to)
      .returns<PostWithCategoryWithProfile[]>();
    if (!data || error || !data.length) {
      return null;
    }
    return data.filter((post) => {
      return post.tags?.includes(searchParams.tags as string);
    });
  } else {
    const { data, error } = await supabase
      .from("posts")
      .select(`*, categories(*), profiles(*)`)
      .eq("published", true)
      .order("created_at", { ascending: false })
      .range(from, to)
      .returns<PostWithCategoryWithProfile[]>();
    if (!data || error || !data.length) {
      return null;
    }
    return data;
  }
}

async function getCategoryTitle(categoryId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("title")
    .eq("id", categoryId)
    .single();
  if (!data || error) {
    return null;
  }
  return data.title;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const supabase = createClient();
  //console.log("searchParams", searchParams.category);

  const categoryTitle = await getCategoryTitle(searchParams.category as string);

  // Fetch total pages
  const { count } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("published", true);

  // Pagination
  const limit = 10;
  const totalPages = count ? Math.ceil(count / limit) : 0;
  const page =
    typeof searchParams.page === "string" &&
    +searchParams.page > 1 &&
    +searchParams.page <= totalPages
      ? +searchParams.page
      : 1;
  const from = (page - 1) * limit;
  const to = page ? from + limit : limit;

  // Fetch posts
  const data = await getPostsData(searchParams, from, to);
  if (!data) {
    return notFound;
  }

  return (
    <main className="w-full">
      <h1 className="font-bold text-xl text-gray-700">
        {searchParams.category
          ? `${categoryTitle || "Category Not found"}`
          : searchParams.tags
          ? `#${searchParams.tags}`
          : ""}
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {data.length ? (
          data?.map((post) => (
            <Suspense key={v4()} fallback={<MainPostItemLoading />}>
              <MainPostItem post={post} />
            </Suspense>
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-2xl text-gray-700 font-bold">No posts found</h1>
          </div>
        )}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <SharedPagination
          page={page}
          totalPages={totalPages}
          baseUrl="/"
          pageUrl="?page="
        />
      )}
    </main>
  );
}
