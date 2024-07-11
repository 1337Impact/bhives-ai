"use client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { protectedEditorConfig, protectedPostConfig } from "@/config/protected";

async function handlePostPublish(postId: string, published: boolean) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .update({
      id: postId,
      published: !published,
    })
    .match({ id: postId })
    .select()
    .single();
  if (error) {
    console.log("Error has occured while publishing post");
    console.log("Error message : ", error.message);
    return null;
  }
  return data;
}

export default function PublishButton({
  isPublished,
  postId,
}: {
  isPublished: boolean;
  postId: string;
}) {
  const router = useRouter();
  const handlePublish = async (postId: string, isPublished: boolean) => {
    const data = await handlePostPublish(postId, isPublished);
    if (data) {
      toast.success(protectedEditorConfig.successMessage);
      if (isPublished) {
        router.push(`/dashboard/blog/posts`);
      } else {
        router.push(`/blog/posts/${data.slug}`);
      }
    } else {
      toast.error(protectedEditorConfig.errorMessage);
    }
  };

  return !isPublished ? (
    <Button
      type="button"
      onClick={() => handlePublish(postId, isPublished)}
      className="flex !bg-gray-900 px-10 !text-white hover:!bg-gray-800"
    >
      Publish
    </Button>
  ) : (
    <Button
      type="button"
      onClick={() => handlePublish(postId, isPublished)}
      className="flex !bg-red-500 px-10 !text-white hover:!bg-red-400"
    >
      Draft
    </Button>
  );
}
