"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    () => window.removeEventListener("scroll", () => {});
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`${
        show || "hidden"
      } fixed z-20 bottom-10 right-10 bg-orange-500 text-2xl text-white p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-orange-600 hover:transform hover:-translate-y-1`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  );
}
