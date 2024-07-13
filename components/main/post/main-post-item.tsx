import { mainPostConfig } from "@/config/main";
import { getMinutes, shimmer, toBase64 } from "@/lib/utils";
import { PostWithCategoryWithProfile } from "@/types/collection";
import { createClient } from "@/utils/supabase/server";
import { format, parseISO } from "date-fns";
import { CalendarIcon, Clock10Icon, MessageCircleIcon } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";

export const dynamic = "force-dynamic";

function getPublicImageUrl(image: string) {
  if (!image || !image.length) return "";
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET_COVER_IMAGE_URL}/${image}`;
}

interface MainPostItemProps {
  post: PostWithCategoryWithProfile;
}

const MainPostItem: React.FC<MainPostItemProps> = async ({ post }) => {
  const readTime = readingTime(post.content ? post.content : "");

  return (
    <div className="group max-w-md mx-auto border-2 border-x-0 border-y-[2px] border-orange-400 lg:max-w-full w-full -mt-[2px]">
      <Link href={`/blog/posts/${post.slug}`}>
        <article className="relative isolate flex flex-col gap-2 py-5">
          <div
            className={`relative aspect-[2/1] md:aspect-[4/1] ${
              !post.image && "md:hidden"
            }`}
          >
            {post.image ? (
              <img
                src={getPublicImageUrl(post.image)}
                alt={post.title ?? "Cover"}
                className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700">
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            )}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div>
            <div className="relative max-w-3xl">
              <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 group-hover:underline lg:text-xl lg:font-bold">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3">
                {post.description}
              </p>
              <div className="mt-3 hidden items-center gap-x-3 text-sm sm:flex">
                <div className="hidden items-center gap-x-3 text-sm sm:flex">
                  <span className="relative z-10 rounded-full bg-orange-300 px-3 py-1 font-medium text-gray-600 hover:bg-orange-400">
                    {post.categories?.title}
                  </span>
                </div>
                <div className="inline-flex items-center text-gray-500">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="ml-1">
                    {format(parseISO(post.updated_at!), "MMMM dd, yyyy")}
                  </span>
                </div>
                <div className="inline-flex items-center text-gray-500">
                  <Clock10Icon className="h-4 w-4" />
                  <span className="ml-1">{getMinutes(readTime.minutes)}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex border-t border-gray-900/5 pt-2">
              <div className="relative flex items-center gap-x-2">
                <Image
                  src={post.profiles?.avatar_url ?? "/images/avatar.png"}
                  alt={post.profiles?.full_name ?? "Avatar"}
                  height={40}
                  width={40}
                  priority
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(40, 40)
                  )}`}
                  className="h-[40px] w-[40px] rounded-full bg-gray-50 object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    {post.profiles.full_name}
                  </p>
                  <p className="text-gray-600">{mainPostConfig.author}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default MainPostItem;
