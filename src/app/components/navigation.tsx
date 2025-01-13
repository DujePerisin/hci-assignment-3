"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  { title: "Home", path: "/" },
  { title: "About me", path: "/about" },
  { title: "Research Blogs", path: "/blog" },
  { title: "Contact", path: "/contact" },
  { title: "Education", path: "/education" },
  { title: "Forum", path: "/forum" },
  { title: "Business Travels", path: "/travel" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); //usePathname is a Client Component hook that lets you read the current URL's pathname

  const processPage = (page: Page, index: number) => (
    <li key={index}>
      <Link
        href={page.path}
        className={`${
          pathname.startsWith(page.path)
            ? "font-extrabold text-indigo-600"
            : "text-gray-700"
        } hover:text-indigo-600 transition whitespace-nowrap`}
        onClick={() => setIsMenuOpen(false)} // Close menu on click
      >
        {page.title}
      </Link>
    </li> //highlighting the selected webpage (cool trick which notifies the user he has actually selected his desired website)
  );

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <span className="text-2xl md:text-3xl font-extrabold text-indigo-600 mr-6">
          iveblog
        </span>

        {/* Full Navigation */}
        <ul
          className={`hidden lg:flex flex-row items-center space-x-8 ${ //changed from md -> lg
            isMenuOpen ? "hidden" : ""
          }`}
        >
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                href={page.path}
                className={`${
                  pathname.startsWith(page.path)
                    ? "font-extrabold text-indigo-600"
                    : "text-gray-700"
                } hover:text-indigo-600 transition whitespace-nowrap lg:text-sm xl:text-base`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In and Log In Buttons */}
        <div className="hidden lg:flex space-x-4 ml-auto"> 
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition text-nowrap">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold hover:bg-indigo-700 transition text-nowrap">
            Log In
          </button>
        </div>

        {/* Burger Menu */} 
        <button
          className="burger lg:hidden flex flex-col space-y-1.5" 
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-indigo-600"></span>
          <span className="w-6 h-0.5 bg-indigo-600"></span>
          <span className="w-6 h-0.5 bg-indigo-600"></span>
        </button>

        {/* Mobile Navigation */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-white flex-col items-center space-y-4 py-4 shadow-md lg:hidden`}
        >
          {pages.map((page, index) => processPage(page, index))}
          <li>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition">
              Sign In
            </button>
          </li>
          <li>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold hover:bg-indigo-700 transition">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
