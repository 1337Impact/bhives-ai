"use client";
import MarkdownPreview from '@uiw/react-markdown-preview';

const MarkdownRender = ({ content }: { content: string }) => {

  return (
    <div>
      <MarkdownPreview wrapperElement={{"data-color-mode": "light"}} source={content} />
    </div>
  );
};

export default MarkdownRender;
