import { createClient } from "@/utils/supabase/server";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import BackButton from "../backButton";

const tagsList = [
  "artificial_intelligence",
  "machine_learning",
  "deep_learning",
  "neural_networks",
  "natural_language_processing",
  "computer_vision",
  "data_science",
  "big_data",
  "cloud",
  "cloud_infrastructure",
  "cloud_security",
  "aws",
  "azure",
  "google_cloud",
  "serverless_computing",
  "devops",
  "ci_cd",
  "rpa",
  "infrastructure_as_code",
  "automation_tools",
  "test_automation",
];

export default async function BlogSidebar() {
  const supabase = await createClient();
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");
  if (!categories || error) {
    return null;
  }
  return (
    <div className=" md:max-w-[330px] px-2 flex flex-col gap-4">
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
      <div className="rounded-md p-5 border-orange-400 bg-gray-100 border-2">
        <h1 className="text-lg font-bold">RECOMMENDED TOPICS</h1>
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.id}`}
            className="flex border-2 border-orange-400 rounded-md bg-orange-300 p-2 mt-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            {category.title}
            <ArrowRight size={20} className="ml-auto" />
          </Link>
        ))}
      </div>
      <div className="rounded-md p-5 border-orange-400 bg-gray-100 border-2">
        <h1 className="text-lg font-bold">RECOMMENDED TAGS</h1>
        <div className="flex flex-wrap gap-1 -ml-1 mt-2">
        {tagsList?.map((tag) => (
          <Link
          key={tag}
          href={`/blog?tags=${tag}`}
          className="rounded-md bg-orange-300 py-[1.4px] px-[5px] text-sm font-semibold text-gray-600 hover:text-gray-800 ml-1"
          >
            #{tag}
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
