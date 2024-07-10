"use client";

import {
  DetailPostShareButton,
} from "@/components/detail/post/buttons";
import React from "react";

interface DetailPostFloatingBarProps {
  id: string;
  title?: string;
  text?: string;
  url?: string;
  totalComments?: number;
  isBookmarked?: boolean;
}

const DetailPostFloatingBar: React.FC<DetailPostFloatingBarProps> = ({
  id,
  title = "",
  text = "",
  url = window.location.href,
  totalComments = 0,
  isBookmarked = false,
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-3 justify-start gap-4 rounded-md">
        <DetailPostShareButton title={title} text={text} url={url} />
      </div>
    </>
  );
};

export default DetailPostFloatingBar;
