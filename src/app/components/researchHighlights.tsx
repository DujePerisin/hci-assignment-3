export default function ResearchHighlights() {
    return (
      <section id="research-highlights" className="container mx-auto p-8 bg-gray-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Research Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/ai.jpg"
              alt="Highlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Breakthrough in AI</h3>
            <p className="text-gray-600 text-sm">
              Explore the latest breakthrough in artificial intelligence...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Read More
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/roboticsphoto.jpg"
              alt="Highlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Advances in Robotics</h3>
            <p className="text-gray-600 text-sm">
              Discover groundbreaking advancements in robotics and automation...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Read More
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/quantum.jpg"
              alt="Highlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
            <p className="text-gray-600 text-sm">
              Insights into the revolutionary developments in quantum computing...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    );
  }
  