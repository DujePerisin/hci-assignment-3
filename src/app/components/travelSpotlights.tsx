export default function TravelSpotlights() {
    return (
      <section id="travel-spotlights" className="container mx-auto p-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Travel Spotlights
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/paris.jpg"
              alt="Spotlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Conference in Paris</h3>
            <p className="text-gray-600 text-sm">
              Highlights from the international AI conference in Paris...
            </p>
            <a
              href="/travel"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/tokyo.jpg"
              alt="Spotlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Summit in Tokyo</h3>
            <p className="text-gray-600 text-sm">
              Key insights from the global business summit held in Tokyo...
            </p>
            <a
              href="/travel"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[30%]">
            <img
              src="/images/newyork.jpg"
              alt="Spotlight"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Workshop in New York</h3>
            <p className="text-gray-600 text-sm">
              A closer look at the innovative workshop series hosted in NYC...
            </p>
            <a
              href="/travel"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  