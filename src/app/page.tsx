import Link from "next/link"

//Object that will hold each websites' "title" (name visible in the openned tab while visiting the site)
//and "path" (name of the local folder which contains the actual sub-website's page-tsx)
type Page = {
  title: string;
  path: `/${string}`;
}

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
function processPage(page: Page, index: number) {
  return (
    <li key={index}>
      <a href={page.path}>{page.title}</a>
    </li>
  );
}

//Legacy code --- will be removed in future commits (part of hardcoding)
//Function which will create all the nav-elements for each other website (syntactic sugar :D)
export function Navigation() {
  return <ul className="flex space-x-10 mb-5">
    {pages.map(processPage)}
  </ul>
}

//Tracking all the "keys" of each neccessary website for easier traversing in code
//Setting-up <Link> for dynamic traversing "CLIENT_SIDE_NO_FULL_RELOAD"
function processPageLink(page: Page, index: number) {
  return (
    <li key={index}>
      <Link href={page.path}>{page.title}</Link>
    </li>
  );
}
//Accomodating the new processPageLink implementation for faster routing "CLIENT_SIDE_NO_FULL_RELOAD"
export function NavigationLink() {
  return <ul className="flex space-x-10 mb-5">
    {pages.map(processPageLink)}
  </ul>
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
            <NavigationLink />
      <h1 className="text-6xl font-extrabold tracking-tight">Home page</h1>
    </main>
  )
}