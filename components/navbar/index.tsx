"use client";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("max-md:overflow-y-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-y-hidden");
    }
  }, [isMenuOpen]);

  const links = [
    {
      name: "Why Us",
      href: "#why-choose",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Our Process",
      href: "#process",
    },
    {
      name: "Team",
      href: "#team",
    },
    {
      name: "Tech Stack",
      href: "#tech-stack",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <nav className="m-container h-[80px] max-w-[1200px] mx-auto text-slate-700 ">
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <h1 className="text-lg font-bold text-black">Bhives.ai</h1>
        </Link>
        <div
          className={`${
            !isMenuOpen && "max-md:hidden"
          } z-10 max-md:absolute max-md:left-0 max-md:top-0 max-md:h-[100dvh] max-md:w-full max-md:backdrop-blur-xl`}
        >
          <ul className="flex h-full items-center justify-around font-semibold max-md:pt-20 max-md:flex-col max-md:text-3xl md:gap-6 lg:gap-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="">
                <li
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    "cursor-pointer hover:text-slate-600 hover:underline hover:underline-offset-4"
                  }
                >
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
        <Link href={"#contact"}>
          <div
            onClick={() => setIsMenuOpen(false)}
            className="float-right bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Contact
          </div>
        </Link>
          <button
            className={`${styles.hamburger} md:hidden z-20`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
            <div
              className={`${styles.line} ${isMenuOpen && styles.open}`}
            ></div>
          </button>
        </div>
      </div>
    </nav>
  );
}
