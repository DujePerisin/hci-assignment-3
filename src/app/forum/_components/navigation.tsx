"use client"; 
/* ....is used to declare a boundary between a Server and Client Component modules. 
This means that by defining a "use client" in a file, all other modules imported into it, 
including child components, are considered part of the client bundle. */

//Object that will hold each websites' "title" (also => name visible in the openned tab while visiting the site - planned for later if possible this way)
//and "path" (name of the local folder which contains the actual sub-website's page-tsx)
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

//Legacy code --- will be removed in future commits (part of hardcoding)
const pages: Page[] = [
    {title: "Discussions",
      path: "/forum/discussions",
    },
    {title: "Rules and Guidelines",
      path: "/forum/rules",
    },
  ];
  

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

//Function which will create all the nav-elements for each other website (syntactic sugar :D)
export function Navigation() {
  const pathname = usePathname(); //usePathname is a Client Component hook that lets you read the current URL's pathname
  return (
    <ul className="flex space-x-4 mb-2 justify-center mt-4">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}