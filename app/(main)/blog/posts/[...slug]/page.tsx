import {
  DetailPostFloatingBar,
  DetailPostHeading,
  DetailPostRender,
} from "@/components/detail/post";
import { seoData } from "@/config/root/seo";
import { getOgImageUrl, getUrl } from "@/lib/utils";
import { PostWithCategoryWithProfile } from "@/types/collection";
import { createClient } from "@/utils/supabase/server";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime, { ReadTimeResults } from "reading-time";

export const revalidate = 0;

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPost(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const supabase = createClient();

  const response = await supabase
    .from("posts")
    .select(`*, categories(*), profiles(*)`)
    .match({ slug: slug, published: true })
    .single<PostWithCategoryWithProfile>();

  if (!response.data) {
    notFound;
  }

  return response.data;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(params);
  const truncateDescription =
    post?.description?.slice(0, 100) + ("..." as string);
  const slug = "/posts/" + post?.slug;

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: seoData.author.name,
      url: seoData.author.twitterUrl,
    },
    openGraph: {
      title: post.title as string,
      description: post.description as string,
      type: "article",
      url: getUrl() + slug,
      images: [
        {
          url: getOgImageUrl(
            post.title as string,
            truncateDescription as string,
            [post.categories?.title as string] as string[],
            slug as string
          ),
          width: 1200,
          height: 630,
          alt: post.title as string,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title as string,
      description: post.description as string,
      images: [
        getOgImageUrl(
          post.title as string,
          truncateDescription as string,
          [post.categories?.title as string] as string[],
          slug as string
        ),
      ],
    },
  };
}

function getPublicImageUrl(image: string) {
  if (!image || !image.length) return "";
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET_COVER_IMAGE_URL}/${image}`;
}

export default async function PostPage({ params }: PostPageProps) {
  const supabase = createClient();
  // Get post data
  const post = await getPost(params);
  if (!post) {
    notFound();
  }
  // Set post views
  const slug = params?.slug?.join("/");

  // Check user logged in or not
  let username = null;
  let profileImage = null;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    username = session.user?.user_metadata.full_name;
    profileImage =
      session?.user?.user_metadata.picture ||
      session?.user?.user_metadata.avatar_url;
  }

  const readTime = readingTime(post.content ? post.content : "");

  return (
    <div className="min-h-full w-full">
      <div className="mx-auto max-w-4xl rounded-lg bg-white px-6 py-4 shadow-sm shadow-gray-300 ring-1 ring-black/5 sm:px-14 sm:py-10">
        <div className="relative mx-auto max-w-4xl py-2">
          <DetailPostHeading
            id={post.id}
            title={post.title as string}
            image={getPublicImageUrl(post.image as string)}
            authorName={post.profiles.full_name as string}
            authorImage={post.profiles.avatar_url as string}
            date={format(parseISO(post.updated_at!), "MMMM dd, yyyy")}
            category={post.categories?.title as string}
            readTime={readTime as ReadTimeResults}
          />
          <div>
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tags=${tag}`}
                className="rounded-md bg-gray-200 py-1 px-2 text-sm font-semibold text-gray-600 hover:text-gray-800 ml-1"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        {/* Content */}
        <div className="relative mx-auto max-w-3xl border-slate-500/50 py-5">
          <DetailPostRender content={post.content as string} />
        </div>
        <div className="mx-auto mt-10">
          {/* Bottom Floatingbar */}
          <DetailPostFloatingBar
            id={post.id as string}
            title={post.title as string}
            text={post.description as string}
            url={`${getUrl()}${encodeURIComponent(`/posts/${post.slug}`)}`}
            totalComments={0}
            isBookmarked={false}
          />
        </div>
      </div>
    </div>
  );
}
