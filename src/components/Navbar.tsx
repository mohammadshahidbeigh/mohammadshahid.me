"use client";

import { NavList } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets: { [key: string]: number } = {};
      NavList.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          sectionOffsets[item.href.substring(1)] = section.offsetTop;
        }
      });

      const scrollPosition = window.scrollY;

      let activeSectionId = null;
      for (const [id, offset] of Object.entries(sectionOffsets)) {
        if (scrollPosition >= offset) {
          activeSectionId = id;
        } else {
          break;
        }
      }

      setActiveSection(activeSectionId);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="dark:text-white fixed flex rounded-2xl max-[950px]: mb-2 ml-2 
    min-[951px]:w-28 min-[951px]:left-0 min-[951px]:top-1/2 min-[951px]:transform min-[951px]:-translate-y-1/2 min-[951px]:flex-col
    max-[950px]:bottom-0 max-[950px]:left-0 max-[950px]:right-0 max-[950px]:w-min max-[950px]:mx-auto
    
    border border-gray-700 outline-1 max-[950px]:border-b-0
    dark:max-[950px]:bg-[#030018] dark:max-[950px]:bg-opacity-90
    max-[950px]:bg-[#bebebe] max-[950px]:bg-opacity-90
    z-10
    "
    >
      {NavList.map((item, index) => (
        <Link
          className={`nav-btn hover:bg-blue-500 ${
            pathname === item.href || activeSection === item.href.substring(1)
              ? "nav-btn-active bg-blue-500 "
              : ""
          }`}
          key={index}
          href={item.href}
        >
          {" "}
          {item.name}{" "}
        </Link>
      ))}
    </div>
  );
}
