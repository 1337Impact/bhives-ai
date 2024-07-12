import { createClient } from "@/utils/supabase/server";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import BackButton from "../backButton";

export default async function BlogSidebarTop() {
  return (
    <>
      <div>
        <BackButton />
      </div>
      <div className="rounded-md p-5 border-orange-400 bg-gray-100 border-2">
        <h1 className="text-lg font-bold">BHIVES BLOG</h1>
        <p className="mt-1 text-gray-600 text-sm font-semibold">
          Blog posts, articles, and tutorials about Cloud, Ai and Machine
          Learning.
        </p>
      </div>
    </>
  );
}
