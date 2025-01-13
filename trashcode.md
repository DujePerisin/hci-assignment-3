NAVIGATION.TSX - OLD CODE ON HAND (xmas break on different setup working)

// "use client"; 
// /* ....is used to declare a boundary between a Server and Client Component modules. 
// This means that by defining a "use client" in a file, all other modules imported into it, 
// including child components, are considered part of the client bundle. */

// //Object that will hold each websites' "title" (also => name visible in the openned tab while visiting the site - planned for later if possible this way)
// //and "path" (name of the local folder which contains the actual sub-website's page-tsx)
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// type Page = {
//   title: string;
//   path: `/${string}`;
// };

// //Legacy code --- will be removed in future commits (part of hardcoding)
// const pages: Page[] = [
//     {title: "Home",
//       path: "/"
//     },
//     {title: "About me",
//       path: "/about",
//     },
//     {title: "Research Blogs",
//       path: "/blog",
//     },
//     {title: "Contact",
//       path: "/contact",
//     },
//     {title: "Education",
//       path: "/education",
//     },
//     {title: "Forum",
//       path: "/forum",
//     },
//     {title: "Business Travelss",
//       path: "/travel",
//     }
//   ];
  

// function processPage(page: Page, index: number, pathname: string) {
//   return (
//     <li key={index}>
//       <Link
//         href={page.path}
//         className={
//             page.path === "/"
//               ? pathname === page.path
//                 ? "font-extrabold"
//                 : ""
//               : pathname.startsWith(page.path)
//               ? "font-extrabold"
//               : ""
//           }> 
//         {page.title}
//       </Link>
//     </li> //highlighting the selected webpage (cool trick which notifies the user he has actually selected his desired website)
//   );
// }

// //Function which will create all the nav-elements for each other website (syntactic sugar :D)
// export function Navigation() {
//   const pathname = usePathname(); //usePathname is a Client Component hook that lets you read the current URL's pathname
//   return (
//     <ul className="flex space-x-4 mb-2 justify-center mt-4">
//       {pages.map((page, index) => processPage(page, index, pathname))}
//     </ul>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// type Page = {
//   title: string;
//   path: `/${string}`;
// };

// const pages: Page[] = [
//   { title: "Home", path: "/" },
//   { title: "About me", path: "/about" },
//   { title: "Research Blogs", path: "/blog" },
//   { title: "Contact", path: "/contact" },
//   { title: "Education", path: "/education" },
//   { title: "Forum", path: "/forum" },
//   { title: "Business Travels", path: "/travel" },
// ];

// function processPage(page: Page, index: number, pathname: string) {
//   return (
//     <li key={index}>
//       <Link
//         href={page.path}
//         className={`${
//           pathname.startsWith(page.path) ? "font-extrabold text-white" : "text-gray-200"
//         } hover:text-white transition`}
//       >
//         {page.title}
//       </Link>
//     </li>
//   );
// }

// export function Navigation() {
//   const pathname = usePathname();

//   return (
//     <nav className="sticky top-0 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md z-10">
//       <div className="container mx-auto flex items-center justify-between p-6">
//         {/* "MY BLOG" text */}
//         <span className="text-3xl font-extrabold text-white">iveblog</span>

//         {/* Navigation Items */}
//         <ul className="flex space-x-8">
//           {pages.map((page, index) => processPage(page, index, pathname))}
//         </ul>

//         {/* Buttons */}
//         <div className="flex space-x-4">
//           <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold hover:bg-indigo-100 transition">
//             Sign In
//           </button>
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold hover:bg-indigo-700 transition">
//             Log In
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


PAGE.TSX - LANDING PAGE - OLD CODE ON HAND (xmas break on different setup working)

// "use client";

// import { useEffect, useState } from "react";
// import { createImageArticle1 } from "./components/iconcards";

// interface Blog { //defined the blog structure as an interface to provide type safety and clarity for the data that we are working with. 
//   id: number;    //In TypeScript, interfaces are used to define the shape of objects, ensuring that all properties and their types are consistent across the application.
//   title: string; //* Clarification for myself <3 *//
//   body: string;
// }

// export default function Home() {

//   const [blogs, setBlogs] = useState<Blog[]>([]); // state variable which stores all the fetched blog posts, initial value empty array of "Blog" type of objects
//                                                   // used useState because component will re-render whenever we update "blogs"
//   const [currentPage, setCurrentPage] = useState(1); // keeps track of the current page, setCurrentPage function will +/- the count
//   const postsPerPage = 3;                            // number of blog posts per page

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20"); // fetching from JSONPlaceholder
//       const blogs = await res.json();
//       setBlogs(blogs);
//     };
//     fetchBlogs();

//     // adding all the other dynamic element after the component mounts/fetching 
//     // will contain all the other dynamic element creation later (maybe contains now if i forgot to delete this comment)
//     createImageArticle1(
//       "dynamic-content",
//       "/images/article800x400placeholder.png",
//       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//       "imageLeft"
//     );
//     createImageArticle1(
//       "dynamic-content",
//       "/images/article800x400placeholder.png",
//       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//       "imageRight"
//     );
//     createImageArticle1(
//       "dynamic-content",
//       "/images/article800x400placeholder.png",
//       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//       "imageLeft"
//     );
//   }, []); // ""empty dependency array to run only once after the initial render""

//   // Calculate the blogs to display for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

//   // Handle navigation
//   const handleNext = () => {
//     if (currentPage < Math.ceil(blogs.length / postsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }

//   return (
//     <main className="bg-gray-100 min-h-screen">
//       {/* sticky navigation Bar */}
//       <nav className="sticky top-0 bg-white shadow z-10">
//         <div className="container mx-auto flex justify-between items-center p-4">
//           <a href="#" className="text-xl font-bold text-gray-800">
//             *iveblog
//           </a>
//           <ul className="flex space-x-6 text-gray-600">
//             <li>
//               <a href="#" className="hover:text-gray-800">
//                 Recent blogs
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-800">
//                 Research highlights
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-800">
//                 Travel spotlights
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* banner section */}
//       <div className="w-full">
//         <img
//           src="/images/banner1920x800placeholder.jpg"
//           alt="Banner"
//           className="w-full h-96 object-cover"
//         />
//         <h1 className="text-center text-4xl font-bold mt-4">
//           Welcome to My Blog
//         </h1>
//         <h2 className="text-center font-bold mt-4">Minimum CSS so far, plan on developing further during the christmas holidays, Merry Christmas everyone!!</h2>
//       </div>

//       {/* left/right article section creation */}
//       <div id="dynamic-content" className="container mx-auto mt-8"></div>
//       {/* Blog Posts Section */}
//       <section className="container mx-auto p-4">
//         <h1 className="text-left text-4xl font-bold mb-8">Blog Posts</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {currentBlogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
//             >
//               <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//               <p className="text-gray-600">{blog.body.substring(0, 100)}...</p>
//               <a
//                 href={`/blog/${blog.id}`}
//                 className="text-blue-500 hover:underline mt-4 block"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center items-center mt-8">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 mr-2 rounded ${
//               currentPage === 1
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-blue-500 text-white hover:bg-blue-600"
//             }`}
//           >
//             Previous
//           </button>
//           <span className="text-gray-800 mx-2">
//             Page {currentPage} of {Math.ceil(blogs.length / postsPerPage)}
//           </span>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}
//             className={`px-4 py-2 ml-2 rounded ${
//               currentPage === Math.ceil(blogs.length / postsPerPage)
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-blue-500 text-white hover:bg-blue-600"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </section>
//       </main>
//   );
//   }
///////////////

LAYOUT.TSX - OLD CODE ON HAND (xmas break on different setup working)

// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// import { Navigation } from "./components/navigation";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// /*
// // Define metadata for each route
// const metadataMap = {
//   "/": { title: "Home - HCI 2024/2025", description: "The home of all things you are about to explore." },
//   "/about": { title: "About Us - HCI 2024/2025", description: "Learn more about us and what we do." },
//   "/blog": { title: "Research Blogs - HCI 2024/2025", description: "Learn more about us and what we do." },
//   "/contact": { title: "Contact us - HCI 2024/2025", description: "Get in touch with us!" },
//   "/education": { title: "Education section - HCI 2024/2025", description: "Learn more about the topics we have covered." },
//   "/forum": { title: "Forum - HCI 2024/2025", description: "Share your ideas and help other achieve theirs." },
//   "/travel": { title: "Business travels - HCI 2024/2025", description: "Quick look into our conferences, networking events and more." },
// };*/

// export const metadata: Metadata = {
//   title: {
//     template: "%s - dperis00 HCI2024/25",
//     default: "dperis00 HCI2024/25",
//   },
//   description: "Research blog website where the owner, an expert in their field, shares research findings and ideas.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navigation />
//         {children}
//       </body>
//     </html>
//   );
// }
