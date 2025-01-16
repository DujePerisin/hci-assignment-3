export default function MeetTheTeam() {
    return (
      <section id="meet-the-team" className="container mx-auto p-8 bg-gray-50">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-8">
          Meet the Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
            <img
              src="/images/team1.jpg"
              alt="Team Member"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-bold mb-1">Dr. Alice Johnson</h3>
            <p className="text-gray-600 text-sm">AI Researcher</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
            <img
              src="/images/team2.jpg"
              alt="Team Member"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-bold mb-1">Dr. Mark Lee</h3>
            <p className="text-gray-600 text-sm">Market Analyst</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 w-full sm:w-[48%] md:w-[22%] flex flex-col items-center text-center">
            <img
              src="/images/team3.jpg"
              alt="Team Member"
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-bold mb-1">Dr. Sarah Kim</h3>
            <p className="text-gray-600 text-sm">Cryptocurrency Expert</p>
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
    );
  }
  