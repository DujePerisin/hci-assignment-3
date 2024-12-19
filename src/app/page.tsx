"use client";

import { useEffect, useState } from "react";
import { createImageArticle1 } from "./components/iconcards";

interface Blog { //defined the blog structure as an interface to provide type safety and clarity for the data that we are working with. 
  id: number;    //In TypeScript, interfaces are used to define the shape of objects, ensuring that all properties and their types are consistent across the application.
  title: string; //* Clarification for myself <3 *//
  body: string;
}

export default function Home() {

  const [blogs, setBlogs] = useState<Blog[]>([]); // state variable which stores all the fetched blog posts, initial value empty array of "Blog" type of objects
                                                  // used useState because component will re-render whenever we update "blogs"
  const [currentPage, setCurrentPage] = useState(1); // keeps track of the current page, setCurrentPage function will +/- the count
  const postsPerPage = 3;                            // number of blog posts per page

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"); // fetching from JSONPlaceholder
      const blogs = await res.json();
      setBlogs(blogs);
    };
    fetchBlogs();

    // adding all the other dynamic element after the component mounts/fetching 
    // will contain all the other dynamic element creation later (maybe contains now if i forgot to delete this comment)
    createImageArticle1(
      "dynamic-content",
      "https://via.placeholder.com/800x400",
      "This is some sample text for the dynamic element.",
      "imageLeft"
    );
    createImageArticle1(
      "dynamic-content",
      "https://via.placeholder.com/800x400",
      "Here’s another dynamically added section!",
      "imageRight"
    );
    createImageArticle1(
      "dynamic-content",
      "https://via.placeholder.com/800x400",
      "This is some sample text for the dynamic element.",
      "imageLeft"
    );
  }, []); // ""empty dependency array to run only once after the initial render""

  // Calculate the blogs to display for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Handle navigation
  const handleNext = () => {
    if (currentPage < Math.ceil(blogs.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* sticky navigation Bar */}
      <nav className="sticky top-0 bg-white shadow z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#" className="text-xl font-bold text-gray-800">
            My Blog
          </a>
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-800">
                Recent blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Research highlights
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Travel spotlights
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* banner section */}
      <div className="w-full">
        <img
          src="https://via.placeholder.com/1920x600"
          alt="Banner"
          className="w-full h-96 object-cover"
        />
        <h1 className="text-center text-4xl font-bold mt-4">
          Welcome to My Blog
        </h1>
      </div>

      {/* left/right article section creation */}
      <div id="dynamic-content" className="container mx-auto mt-8"></div>
      {/* Blog Posts Section */}
      <section className="container mx-auto p-4">
        <h1 className="text-center text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.body.substring(0, 100)}...</p>
              <a
                href={`/blog/${blog.id}`}
                className="text-blue-500 hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 mr-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-800 mx-2">
            Page {currentPage} of {Math.ceil(blogs.length / postsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}
            className={`px-4 py-2 ml-2 rounded ${
              currentPage === Math.ceil(blogs.length / postsPerPage)
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </section>
      </main>
  );
  }
