"use client";
import { useState } from "react";

const ShowMore = ({ text }: { text: string }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  return text.length > 100 ? (
    <>
      <p className="inline">
        {text.slice(0, 100)}
        {showMore && <span>{text.slice(100, text.length)}</span>}
      </p>
      <button
        onClick={toggleText}
        className="inline ml-2 text-blue-500 focus:outline-none"
      >
        {showMore ? "Hide" : "Read More"}
      </button>
    </>
  ) : (
    <p>{text}</p>
  );
};

export default ShowMore;
