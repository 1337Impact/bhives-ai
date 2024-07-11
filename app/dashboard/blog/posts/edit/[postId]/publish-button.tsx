"use client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { protectedEditorConfig, protectedPostConfig } from "@/config/protected";

async function handlePublish(postId: string) {
  const router = useRouter();
  const supabase = createClient();
  const { data, error } = await supabase
    .from("posts")
    .update({
      id: postId,
      published: true,
    })
    .match({ id: postId })
    .select()
    .single();
  if (error) {
    console.log("Error has occured while publishing post");
    console.log("Error message : ", error.message);
    return;
  }
  if (data) {
    toast.success(protectedEditorConfig.successMessage);
    router.push(`/blog/posts/${data.slug}`);
  } else {
    toast.error(protectedEditorConfig.errorMessage);
  }
}


export default function PublishButton({ postId }: { postId: string}) {
    return (
        <Button
        type="button"
        onClick={()=>handlePublish(postId)}
        className="flex !bg-gray-900 px-10 !text-white hover:!bg-gray-800"
      >
        Publish
      </Button>
    )
}