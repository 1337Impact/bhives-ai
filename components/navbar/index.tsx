"use client";
import { use, useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import NavbarNavigation from "./navbar-navigation";
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    name: "Why Us",
    href: "/#why-choose",
    id: "why-choose",
  },
  {
    name: "Services",
    href: "/#services",
    id: "services",
  },
  {
    name: "Our Process",
    href: "/#process",
    id: "process",
  },
  {
    name: "Team",
    href: "/#team",
    id: "team",
  },
  {
    name: "Tech Stack",
    href: "/#tech-stack",
    id: "tech-stack",
  },
  {
    name: "FAQ",
    href: "/#faq",
    id: "faq",
  },
  {
    name: "Blog",
    href: "/blog",
    id: "blog",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setActiveSection("blog");
      return;
    }
    const sections = document.querySelectorAll("section");
    console.log("sections: ", sections);
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed bg-white z-[100] w-full h-[80px] mx-auto text-slate-700">
      <div className="relative flex h-full w-full items-center justify-between px-4 max-w-[1200px] mx-auto">
        <Link href="/#" className="flex items-center gap-1">
          <img alt="logo" src="/logo.png" className="h-9" />
          <h1 className="text-xl font-bold text-black">Bhives.ai</h1>
        </Link>
        <nav
          className={`${
            !isMenuOpen && "max-md:hidden"
          } max-md:absolute z-40 flex right-0 top-[70px] max-md:w-full max-md:h-[400px] max-md:shadow-md max-md:bg-gray-100 max-md:rounded-md items-center max-md:justify-around font-semibold max-md:flex-col max-md:text-xl md:gap-4 lg:gap-8 xl:gap-10`}
        >
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              <div
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  activeSection === link.id && "text-orange-500"
                } cursor-pointer hover:text-orange-400`}
              >
                {link.name}
              </div>
              <div
                className={`${
                  activeSection !== link.id && "hidden"
                } w-full h-[2.4px] bg-orange-500 hover:bg-orange-400`}
              />
            </Link>
          ))}
          <Link href={"/#contact"} className="md:hidden">
            <div
              onClick={() => setIsMenuOpen(false)}
              className="float-right bg-orange-500 hover:bg-orange-400 text-white px-8 py-2 rounded-md cursor-pointer"
            >
              Contact
            </div>
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <button
            name="menu"
            type="button"
            aria-label="menu"
            className={`${styles.hamburger} md:hidden z-50`}
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
          <Link href={"/#contact"} className="max-md:hidden">
            <div
              onClick={() => setIsMenuOpen(false)}
              className="float-right bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
