const WorkExperience = () => {
    return (
      <section className="relative py-16 bg-white md:pl-10">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Work Experience</h2>
            <p className="text-xl text-gray-600 mt-2">Trained, Talented and Driven</p>
          </div>
  
          {/* Side by side layout */}
          <div className="flex flex-col md:flex-row">
            {/* Left Side: Text & Details */}
            <div className="w-full md:w-1/2">
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="px-4 py-2 rounded-full text-sm text-purple-600 bg-white border border-gray-200 hover:bg-gray-50">Full-Stack Dev</span>
                  <span className="px-4 py-2 rounded-full text-sm text-green-600 bg-white border border-gray-200 hover:bg-gray-50">UX/UI Specialist</span>
                  <span className="px-4 py-2 rounded-full text-sm text-orange-600 bg-white border border-gray-200 hover:bg-gray-50">BI Expert</span>
                  <span className="px-4 py-2 rounded-full text-sm text-blue-600 bg-white border border-gray-200 hover:bg-gray-50">Team Leader</span>
                  <span className="px-4 py-2 rounded-full text-sm text-purple-500 bg-white border border-gray-200 hover:bg-gray-50">Data Analyst</span>
                  <span className="px-4 py-2 rounded-full text-sm text-green-500 bg-white border border-gray-200 hover:bg-gray-50">Creative Strategist</span>
                </div>
              </div>
  
              <div className="mt-8">
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Engen - Trainee Business Analyst:</span> Led a Team in Business Process Redesign,<br className="hidden md:block" />
                  <span className="font-bold">Fluf -  Business Developer:</span> .
                </p>
                
                <p className="text-gray-700 mb-8">
                  <span className="font-bold">Freelance Work - </span> Web Developer for ShuttleAfrica<br className="hidden md:block" />
                  Web Developer for .
                </p>
  
                <a href="#" className="bg-black text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 hover:bg-blue-800 transition-colors">
                  Hire Me
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Right Side: Employee Cards - With fancy hover animation */}
            <div className="w-full md:w-1/3 mt-12 md:mt-0 relative h-96">
              <div className="card-fan-container relative h-full w-full perspective-1000 hover:cursor-pointer">
                {/* Bottom card */}
                <div className="card-bottom absolute top-12 right-0 w-64 md:w-72 transform rotate-6 z-0 transition-all duration-500 ease-in-out">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="./EMPLOYEE_CARD_THOKOZANI.png" alt="Employee Card 1" className="w-full h-auto" />
                  </div>
                </div>
  
                {/* Middle card */}
                <div className="card-middle absolute top-6 right-12 w-64 md:w-72 transform -rotate-3 z-10 transition-all duration-500 ease-in-out">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="./EMPLOYEE_CARD_THOKOZANI_2.png" alt="Employee Card 2" className="w-full h-auto" />
                  </div>
                </div>
  
                {/* Top card */}
                <div className="card-top absolute top-0 right-24 w-64 md:w-72 transform rotate-2 z-20 transition-all duration-500 ease-in-out">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="./EMPLOYEE_CARD_THOKOZANI.png" alt="Employee Card 1" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Add the animation CSS */}
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          
          /* Initial positions and rotations */
          .card-fan-container:hover .card-bottom {
            transform: translateX(40px) rotate(14deg); /* Move right, increase rotation */
            transition: all 0.5s ease-out;
          }
          
          .card-fan-container:hover .card-middle {
            transform: translateX(0) rotate(0deg); /* Stay centered */
            transition: all 0.5s ease-out;
          }
          
          .card-fan-container:hover .card-top {
            transform: translateX(-40px) rotate(-10deg); /* Move left, decrease rotation */
            transition: all 0.5s ease-out;
          }
          
          /* Add subtle shadow enhancement on hover */
          .card-fan-container:hover .card-bottom div,
          .card-fan-container:hover .card-middle div,
          .card-fan-container:hover .card-top div {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            transition: box-shadow 0.5s ease-out;
          }
        `}</style>
      </section>
    );
  };
  
  export default WorkExperience;