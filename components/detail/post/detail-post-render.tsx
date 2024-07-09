"use client";
import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { defaultExtensions } from "@/components/protected/editor/wysiwyg/extensions";

const TiptapEditor = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [...defaultExtensions],
    content: JSON.parse(content),
    editable: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
