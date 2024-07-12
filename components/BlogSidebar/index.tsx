import { createClient } from "@/utils/supabase/server";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import BackButton from "../backButton";
import BlogSidebarTop from "./blog-sidebar-top";
import BlogSidebarBot from "./blog-sidebar-bot";

export default async function BlogSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id, title");
  if (!categories || error) {
    return null;
  }
  return (
    <>
      <div className="px-2 flex flex-col gap-4 md:hidden">
        <BlogSidebarTop />
        {children}
        <BlogSidebarBot categories={categories} />
      </div>
      <div className="hidden md:flex gap-4">
        {children}
        <div className="px-2 flex flex-col gap-4 max-w-[330px]">
          <BlogSidebarTop />
          <BlogSidebarBot categories={categories} />
        </div>
      </div>
    </>
  );
}
