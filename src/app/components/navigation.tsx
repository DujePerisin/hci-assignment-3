"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

//Legacy code --- will be removed in future commits (part of hardcoding)
const pages: Page[] = [
    {title: "Home",
      path: "/"
    },
    {title: "About me",
      path: "/about",
    },
    {title: "Research Blogs",
      path: "/blog",
    },
    {title: "Contact",
      path: "/contact",
    },
    {title: "Education",
      path: "/education",
    },
    {title: "Forum",
      path: "/forum",
    },
    {title: "Business Travels",
      path: "/travel",
    }
  ];
  

//Legacy code --- will be removed in future commits (part of hardcoding)
function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={pathname === page.path ? "font-extrabold" : ""}> 
        {page.title}
      </Link>
    </li> //highlighting the selected webpage (cool trick which notifies the user he has actually selected his desired website)
  );
}

//Legacy code --- will be removed in future commits (part of hardcoding)
//Function which will create all the nav-elements for each other website (syntactic sugar :D)
export function Navigation() {
  const pathname = usePathname(); //usePathname is a Client Component hook that lets you read the current URL's pathname
  return (
    <ul className="flex space-x-4 mb-4">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}