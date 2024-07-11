import Editor from "@/components/protected/editor/editor";
import { Separator } from "@/components/ui/separator";
import { protectedEditorConfig } from "@/config/protected";
import { Post } from "@/types/collection";
import { createClient } from "@/utils/supabase/server";
import { notFound, useRouter } from "next/navigation";
import PublishButton from "./publish-button";

export const revalidate = 0;

interface PostEditorPageProps {
  params: { postId: string };
}

async function getUserId() {
  const supabase = createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.log("Error has occured while getting UserId!");
    console.log("Error message : ", error.message);
    return null;
  }

  return session ? session.user.id : null;
}

async function getPost(postId: string, userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .match({ id: postId, author_id: userId })
    .single<Post>();

  if (error) {
    console.log("Error has occured while getting post data");
    console.log("Error message : ", error.message);
    return null;
  }

  return data ? data : null;
}

export default async function PostEditorPage({ params }: PostEditorPageProps) {
  const userId = await getUserId();
  const post = await getPost(params.postId, userId || "");

  if (!post) {
    return notFound;
  }

  return (
    <div className="max-w-5xl px-10">
      <div className="flex justify-between items-start max-w-2xl">
        <div>
          <h3 className="text-lg font-semibold">{protectedEditorConfig.title}</h3>
          <p className="py-2 text-sm text-muted-foreground">
            {protectedEditorConfig.description}
          </p>
        </div>
        <PublishButton postId={post.id} isPublished={!!post.published} />
      </div>
      <Separator className="mb-5 max-w-2xl" />
      <Editor post={post} />
    </div>
  );
}
