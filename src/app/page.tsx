"use client";

import { useEffect } from "react";
import { createImageArticle1, createDynamicElement } from "./components/iconcards";

interface Blog { //defined the blog structure as an interface to provide type safety and clarity for the data that we are working with. 
  id: number;    //In TypeScript, interfaces are used to define the shape of objects, ensuring that all properties and their types are consistent across the application.
  title: string; //* Clarification for myself <3 *//
  body: string;
}

export default function Home() {
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"); // fetching from JSONPlaceholder
      const blogs = await res.json();
      const container = document.getElementById("blog-container"); // selecting the place where all the blog posts are gonna be "created"
      blogs.forEach((blog: { id: number; title: string }) => { // going through all the "blog posts"
        createDynamicElement(blog, container!); 
      });
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

      {/* recent blog posts section creation */}
      <div id="blog-container" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
    </main>
  );
}
