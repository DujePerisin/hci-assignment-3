"use client"

import { useEffect } from "react";
import { createImageArticle1 } from "./components/iconcards";


export default function Home() {
  
  useEffect(() => {
    // Add dynamic elements using the imported function
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
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#" className="text-xl font-bold text-gray-800">
            My Blog
          </a>
          <ul className="flex space-x-6 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
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

      {/* Dynamic Content Area */}
      <div id="dynamic-content" className="container mx-auto mt-8"></div>
    </main>
  );
}
