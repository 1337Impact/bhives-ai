"use client";

import { UpdatePost } from "@/actions/post/update-post";
import WysiwygEditor from "@/components/protected/editor/wysiwyg/wysiwyg-editor";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
// import { mainCategoryConfig } from "@/config/main";
import { protectedEditorConfig, protectedPostConfig } from "@/config/protected";
import { postEditFormSchema } from "@/lib/validation/post";
import { Post } from "@/types/collection";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { SparklesIcon, Loader2 as SpinnerIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import slugify from "react-slugify";
import { v4 } from "uuid";
import * as z from "zod";
import { createClient } from "@/utils/supabase/client";
import { CategoryType } from "@/types";
import UploadImage from "./upload-image";
import MarkdownRender from "@/components/detail/post/detail-post-render";
import ReactSelect from "react-select";

export const dynamic = "force-dynamic";

type FormData = z.infer<typeof postEditFormSchema>;

interface EditorProps {
  post: Post;
}

const tagsList = [
  { value: "artificial_intelligence", label: "#artificial_intelligence" },
  { value: "machine_learning", label: "#machine_learning" },
  { value: "deep_learning", label: "#deep_learning" },
  { value: "neural_networks", label: "#neural_networks" },
  {
    value: "natural_language_processing",
    label: "#natural_language_processing",
  },
  { value: "computer_vision", label: "#computer_vision" },
  { value: "data_science", label: "#data_science" },
  { value: "big_data", label: "#big_data" },
  { value: "cloud", label: "#cloud" },
  { value: "cloud_infrastructure", label: "#cloud_infrastructure" },
  { value: "cloud_security", label: "#cloud_security" },
  { value: "aws", label: "#aws" },
  { value: "azure", label: "#azure" },
  { value: "google_cloud", label: "#google_cloud" },
  { value: "serverless_computing", label: "#serverless_computing" },
  { value: "devops", label: "#devops" },
  { value: "ci_cd", label: "#ci_cd" },
  { value: "rpa", label: "#rpa" },
  { value: "infrastructure_as_code", label: "#infrastructure_as_code" },
  { value: "automation_tools", label: "#automation_tools" },
  { value: "test_automation", label: "#test_automation" },
];

function getPublicImageUrl(image: string) {
  if (!image || !image.length) return "";
  return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET_COVER_IMAGE_URL}/${image}`;
}

function getBaseImage(image: string) {
  if (!image || !image.length) return "";
  return image.split("/").pop() || "";
}

type EditorFormValues = z.infer<typeof postEditFormSchema>;

const Editor: FC<EditorProps> = ({ post }) => {
  const router = useRouter();
  const supabase = createClient();
  const [categoriers, setCategoriers] = useState<CategoryType[]>([]);
  const [tags, setTags] = useState<string[]>(post.tags || []);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, slug, title");

      if (error) {
        //console.log("Error has occured while getting categories!");
        //console.log("Error message : ", error.message);
        return;
      }

      data && setCategoriers(data);
    };

    fetchCategories();
  }, []);

  // States
  const [isSaving, setIsSaving] = useState(false);
  const [showLoadingAlert, setShowLoadingAlert] = useState<boolean>(false);

  const [content, setContent] = useState<string | null>(post?.content || null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Default values for the form
  const defaultValues: Partial<EditorFormValues> = {
    title: post.title ?? "Untitled",
    slug: post.slug ?? `post-${v4()}`,
    image: post.image ?? "",
    categoryId: post.category_id ?? protectedEditorConfig.defaultCategoryId,
    description: post.description ?? "Post description",
    content: content ?? protectedEditorConfig.placeholderContent,
  };

  const form = useForm<EditorFormValues>({
    resolver: zodResolver(postEditFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const [image, setImage] = useState<string | null>(post.image || null);

  async function onSubmit(data: EditorFormValues) {
    setShowLoadingAlert(true);
    setIsSaving(true);
    let coverImageUrl = post.image as string;

    if (imageFile) {
      if (data.image) {
        await supabase.storage.from("cover-image").remove([getBaseImage(data.image)]);
      }
      const { data: uploadedImage, error } = await supabase.storage
        .from("cover-image")
        .upload(v4(), imageFile);
      if (error) {
        console.log("Error uploading file: ", error.message);
        toast.error(protectedEditorConfig.errorMessage);
      }
      if (uploadedImage) {
        coverImageUrl = uploadedImage.path
          ? getPublicImageUrl(uploadedImage.path)
          : "";
      }
    }
    //console.log("image: ",isImage, coverImageUrl);
    const response = await UpdatePost({
      id: post.id,
      title: data.title,
      slug: data.slug,
      image: image ? coverImageUrl : "",
      description: data.description,
      content: content,
      categoryId: data.categoryId,
      tags: tags,
    });

    if (response) {
      toast.success(protectedEditorConfig.successMessage);
      router.push(`/dashboard/blog/posts`);
    } else {
      toast.error(protectedEditorConfig.errorMessage);
    }
    setIsSaving(false);
    setShowLoadingAlert(false);
  }

  return (
    <>
      <Form {...form}>
        {/* Title */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* General information */}
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>{protectedEditorConfig.generalTitle}</CardTitle>
              <CardDescription>
                {protectedEditorConfig.generalDescription}
              </CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="w-full max-w-md">
                    <FormLabel>{protectedEditorConfig.formTitle}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={protectedEditorConfig.placeHolderTitle}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Slug */}
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="w-full max-w-md">
                    <FormLabel>{protectedEditorConfig.slug}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={protectedEditorConfig.placeholderSlug}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          field.onChange(slugify(form.getValues("title")))
                        }
                      >
                        <SparklesIcon className="mr-2 h-4 w-4" />
                        {protectedEditorConfig.generateSlug}
                      </Button>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Category */}
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>{protectedEditorConfig.categoryTitle}</CardTitle>
              <CardDescription>
                {protectedEditorConfig.categoryDescription}
              </CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {categoriers.map(
                          (category) =>
                            category.slug !== "/" && (
                              <FormItem
                                key={v4()}
                                className="flex items-center space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <RadioGroupItem value={category.id} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {category.title}
                                </FormLabel>
                              </FormItem>
                            )
                        )}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
              <CardDescription>Choose Tags</CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              <ReactSelect
                defaultValue={tagsList.filter((tag) =>
                  post.tags?.includes(tag.value)
                )}
                onChange={(e) => setTags(e.map((tag) => tag.value))}
                options={tagsList}
                isMulti
              />
            </CardContent>
          </Card>

          {/* Cover Image */}
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Cover Image</CardTitle>
              <CardDescription>
                Chose a cover image for your post
              </CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              <UploadImage image={image} setImage={setImage} setImgFile={setImageFile} />
            </CardContent>
          </Card>

          {/* Short Description */}
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>
                {protectedEditorConfig.shortDescriptionTitle}
              </CardTitle>
              <CardDescription>
                {protectedEditorConfig.shortDescriptionDescription}
              </CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder={
                          protectedEditorConfig.placeholderDescription
                        }
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
              <CardDescription>Update content using Markdown</CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              {/* Description */}
              <Textarea
                value={content || ""}
                onChange={(e) => {
                  //console.log(e.target.value);
                  setContent(e.target.value);
                }}
                className="min-h-60"
              />
            </CardContent>
          </Card>

          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>Post Preview</CardTitle>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className="space-y-4">
              <MarkdownRender content={content || ""} />
            </CardContent>
          </Card>

          <div className="infline-flex flex items-center justify-start space-x-3">
            <Button
              type="submit"
              className="flex !bg-gray-900 px-10 !text-white hover:!bg-gray-800"
              disabled={isSaving}
            >
              {protectedEditorConfig.submit}
            </Button>
            <Button
              type="button"
              onClick={() => router.back()}
              className="flex !bg-gray-100 px-10 !text-gray-900 hover:!bg-gray-200"
              disabled={isSaving}
            >
              {protectedEditorConfig.cancel}
            </Button>
          </div>
        </form>
      </Form>
      <AlertDialog open={showLoadingAlert} onOpenChange={setShowLoadingAlert}>
        <AlertDialogContent className="font-sans">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              {protectedPostConfig.pleaseWait}
            </AlertDialogTitle>
            <AlertDialogDescription className="mx-auto text-center">
              <SpinnerIcon className="h-6 w-6 animate-spin" />
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Editor;
