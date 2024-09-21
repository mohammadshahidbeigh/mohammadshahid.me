"use client";

import {NavList} from "@/constants";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {FaBars} from "react-icons/fa";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo can be added here */}
              <div className="flex-shrink-0 flex items-center">
                {/* Add your logo or brand name here */}
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex">
                {NavList.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                      ${
                        pathname === item.href ||
                        activeSection === item.href.substring(1)
                          ? "bg-blue-500 text-white"
                          : "text-gray-300 hover:bg-blue-700 hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <button
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleSidebar}
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-5">
          <button
            className="text-yellow-300 hover:text-white transition-colors duration-300"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <div className="mt-5 space-y-2">
            {NavList.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  pathname === item.href ||
                  activeSection === item.href.substring(1)
                    ? "bg-pink-500 text-white shadow-lg transform scale-105"
                    : "text-teal-300 hover:bg-indigo-700 hover:text-white hover:shadow-md"
                }`}
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
