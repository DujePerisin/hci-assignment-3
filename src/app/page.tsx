//Hardcoding for testing..
type Page = {
  title: string;
  path: `/${string}`;
}

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



function processPage(page: Page, index: number) {
  return (
    <li key={index}>
      <a href={page.path}>{page.title}</a>
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
            <ul className="flex space-x-4 mb-4">{pages.map(processPage)}</ul>
      <h1 className="text-6xl font-extrabold tracking-tight">Home page</h1>
    </main>
  )
}