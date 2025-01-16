"use client";

import { useEffect, useState } from "react";
import { createImageArticle2 } from "./components/articleCards";
import MeetTheTeam from "./components/meetTheTeam";
import ResearchHighlights from "./components/researchHighlights";
import TravelSpotlights from "./components/travelSpotlights";

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
    createImageArticle2(
      "dynamic-container",
      "images/leftsidearticlephoto.jpg", // Replace with your image URL
      "Discover cutting-edge strategies for business investment on IveBlog.",
      "imageRight" // Change to "imageLeft" for text on the left
    );

    createImageArticle2(
      "dynamic-container",
      "images/graph.png", // Replace with your image URL
      "Stay ahead with expert insights and never miss out on newest developments.",
      "imageLeft" // Change to "imageLeft" for text on the left
    );
    createImageArticle2(
      "dynamic-container",
      "images/piechart.jpg", // Replace with your image URL
      "Calculated, analysed and organized business data all in a single place",
      "imageRight" // Change to "imageLeft" for text on the left
    );


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
      {/* Banner Section */}
      <div className="w-full relative overflow-hidden">
        <img
          src="/images/Designer.jpeg"
          alt="Banner"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto p-3 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl mt-12 text-center">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-indigo-600 mb-4 tracking-tight">
          Driving Innovation in Business Investment
        </h2>
        <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Welcome to IveBlog, your trusted source for insights into business investments and cutting-edge research.
          Our mission is to empower professionals, entrepreneurs, and investors with knowledge that drives innovation
          and growth. Explore our comprehensive resources, in-depth articles, and practical guides designed to navigate
          the complex world of business ventures. Join us as we bridge the gap between research and real-world application.
        </p>
      </section>
      <section className="dynamic-content-container mt-8" id="dynamic-container"></section>

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
                  src="/images/Designer.jpeg"
                  alt="Blog Image"
                  className="w-full h-20 sm:h-24 md:h-28 object-cover mb-4 rounded-lg"
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
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
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
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform ${currentPage === Math.ceil(blogs.length / postsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : ""
              }`}
          >
            Next
          </button>
        </div>
      </section>

      {/* Meet the Team */}
      <MeetTheTeam />


      {/* Research Highlights */}
      <ResearchHighlights />


      {/* Our journey so far Section */}
      <section className="container mx-auto p-3 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl mt-12 text-center">
        <h2 className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-bold text-indigo-600 mb-4 tracking-tight">
          From Small Beginnings to Bold Aspirations
        </h2>
        <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Every story has a beginning, and ours started with a simple yet ambitious idea: to create a space where knowledge, innovation, and collaboration could thrive. With just a handful of passionate individuals, we launched our company as a modest venture, driven by the desire to make an impact despite our limited resources.
          In those early days, we worked tirelessly, wearing multiple hats and learning through every success and setback. Each step, no matter how small, brought us closer to building something meaningful. Though our team remains small, we pride ourselves on fostering a culture of determination, creativity, and resilience.
          The road ahead is full of challenges, but it’s also rich with opportunities. With our passion as our compass and growth as our goal, we’re ready to transform our dreams into a thriving reality. Together, we’re not just building a company—we’re shaping a brighter future.
        </p>
      </section>
      <section className="dynamic-content-container mt-8" id="dynamic-container">
      </section>

      {/* Travel Spotlights */}
      <TravelSpotlights />

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="text-sm">© 2025 My Scientific Blog | All Rights Reserved</p>
      </footer>
    </main>
  );
}
