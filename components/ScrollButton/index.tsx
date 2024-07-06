"use client";

import { FaChevronUp } from "react-icons/fa";

export default function ScrollButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      className="fixed z-20 bottom-10 right-10 bg-orange-500 text-2xl text-white p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-orange-400 hover:transform hover:-translate-y-1"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  );
}
