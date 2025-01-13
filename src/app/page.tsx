"use client";

import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);    // state variable which stores all the fetched blog posts, initial value empty array of "Blog" type of objects
                                                     // used useState because component will re-render whenever we update "blogs"
  const [currentPage, setCurrentPage] = useState(1); // keeps track of the current page, setCurrentPage function will +/- the count
  const postsPerPage = 3;                            // number of blog posts per page

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=30"
      );
      const blogs = await res.json();
      setBlogs(blogs);
    };
    fetchBlogs();

    // adding all the other dynamic element after the component mounts/fetching 
    // will contain all the other dynamic element creation later (maybe contains now if i forgot to delete this comment)
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (currentPage < Math.ceil(blogs.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="bg-white min-h-screen font-sans text-gray-900">
      {/* Sticky Navigation Bar */}
      {/* <nav className="sticky top-0 z-20 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-6">
          <span className="text-3xl font-extrabold text-white">MY BLOG</span>
          <ul className="hidden md:flex space-x-8 text-white text-lg">
            <li>
              <a href="#recent-blogs" className="hover:text-indigo-200">
                Recent Blogs
              </a>
            </li>
            <li>
              <a href="#research-highlights" className="hover:text-indigo-200">
                Research Highlights
              </a>
            </li>
            <li>
              <a href="#travel-spotlights" className="hover:text-indigo-200">
                Travel Spotlights
              </a>
            </li>
          </ul>
          
          <button className="md:hidden text-white text-2xl">&#9776;</button>
        </div>
      </nav> */}

      {/* Banner Section */}
      <div className="w-full relative overflow-hidden">
        <img
          src="/images/banner1920x800placeholder.jpg"
          alt="Banner"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-xl">
          Welcome to Our Scientific Blog
        </h1>
      </div>

      {/* Local Navigation */}
      
        <div className="container mx-auto flex justify-end items-center py-4 px-6 space-x-4 sm:space-x-8">
          <a href="#recent-blogs" className="text-indigo-600 font-bold hover:text-indigo-800 transition text-sm sm:text-base">
            Recent Blogs
          </a>
          <a href="#research-highlights" className="text-indigo-600 font-bold hover:text-indigo-800 transition text-sm sm:text-base">
            Research Highlights
          </a>
          <a href="#travel-spotlights" className="text-indigo-600 font-bold hover:text-indigo-800 transition text-sm sm:text-base">
            Travel Spotlights
          </a>
        </div>
      

      {/* Recent Blogs */}
      <section id="recent-blogs" className="container mx-auto p-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Recent Blogs
        </h2>

        {/* Blog Posts */}
        <div className="overflow-x-auto pb-8">
          <div className="flex justify-center flex-wrap gap-8">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex-shrink-0 w-full sm:w-[85%] md:w-[30%]"
              >
                <img
                  src="/images/article800x400placeholder.png"
                  alt="Blog Image"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {blog.body.substring(0, 100)}...
                </p>
                <a
                  href={`/blog/${blog.id}`}
                  className="text-blue-500 hover:underline mt-4 block text-sm sm:text-base"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold text-sm sm:text-base">
            Page {currentPage} of {Math.ceil(blogs.length / postsPerPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(blogs.length / postsPerPage)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform ${
              currentPage === Math.ceil(blogs.length / postsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </section>

      {/* Research Highlights */}
      <section id="research-highlights" className="container mx-auto p-8 bg-gray-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Research Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Highlight */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/researchhighlight.jpg"
              alt="Highlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Breakthrough in AI</h3>
            <p className="text-gray-600 text-sm">
              Explore the latest breakthrough in artificial intelligence...
            </p>
          </div>
        </div>
      </section>

      {/* Travel Spotlights */}
      <section id="travel-spotlights" className="container mx-auto p-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Travel Spotlights
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Travel Spotlight */}
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/travelspotlight.jpg"
              alt="Spotlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Conference in Paris</h3>
            <p className="text-gray-600 text-sm">
              Highlights from the international AI conference in Paris...
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="meet-the-team" className="container mx-auto p-8 bg-gray-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8"> {/* Example Team Member */} <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center"> <img src="/images/team1.jpg" alt="Team Member" className="w-24 h-24 object-cover rounded-full mb-4" /> <h3 className="text-lg font-bold mb-1">Dr. Alice Johnson</h3> <p className="text-gray-600 text-sm">AI Researcher</p> </div>
              {/* Another Team Member */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
        <img
          src="/images/team2.jpg"
          alt="Team Member"
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-bold mb-1">Dr. Mark Lee</h3>
        <p className="text-gray-600 text-sm">Astrophysicist</p>
      </div>

      {/* Add more team members as needed */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
        <img
          src="/images/team3.jpg"
          alt="Team Member"
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-bold mb-1">Dr. Sarah Kim</h3>
        <p className="text-gray-600 text-sm">Climate Scientist</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
        <img
          src="/images/team4.jpg"
          alt="Team Member"
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
        <h3 className="text-lg font-bold mb-1">Dr. James Smith</h3>
        <p className="text-gray-600 text-sm">Data Scientist</p>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 text-white text-center py-6">
    <p className="text-sm">© 2025 My Scientific Blog | All Rights Reserved</p>
  </footer>
</main>
); }
