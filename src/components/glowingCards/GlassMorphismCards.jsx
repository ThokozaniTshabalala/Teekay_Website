import React from "react";
import "./GlassMorphismCards.css";

const GlowingCard = ({ children }) => {
  return (
    <div
      className="w-1/3 relative rounded-lg bg-gray-200 
        transition-all duration-300 ease-in-out h-68 shadow-lg"
      style={{ overflow: "visible" }} // Ensures the semi-circle is not clipped
    >
      {/* Outer div with gray border - fixed height */}
      <div className="relative rounded-lg border border-gray-300 overflow-hidden h-full">

          {/* Glowing top rim with comet effect */}
          <div className="glow-rim"></div>
          <div className="comet"></div>
        {/* Inner div with lighter background - exactly 4px spacing from outer div */}
        <div className="absolute inset-0 m-1 bg-white/90 backdrop-blur-lg rounded-lg">
        
          {/* Content container with padding and flex layout */}
          <div className="p-6 h-full flex flex-col justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const GlassMorphismCards = () => {
  return (
    <div className="flex justify-center space-x-8 p-12 bg-white pt-0">
      {/* Card 1 */}
      <GlowingCard>
        {/* Top content group */}
        <div>
          <h2 className="text-xl font-semibold">
            Web Dev
            <i className="fas fa-arrow-right ml-2 transform rotate-315 text-xl"></i>
          </h2>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-react text-2xl" title="React"></i>
            <i className="fab fa-html5 text-2xl" title="HTML"></i>
            <i className="fab fa-css3-alt text-2xl" title="CSS"></i>
            <i className="fab fa-js-square text-2xl" title="JavaScript"></i>
            <i className="fab fa-python text-2xl" title="Python Django"></i>
            <i className="fa-brands fa-bootstrap text-2xl"></i>
          </div>
        </div>
        
        {/* Bottom content - description */}
        <p className="mt-4">
          Web Development kit I use for building beautiful and functional web
          solutions.
        </p>
      </GlowingCard>

      {/* Card 2 */}
      <GlowingCard>
        {/* Top content group */}
        <div>
          <h2 className="text-xl font-semibold">
            Enterprise
            <i className="fas fa-arrow-right ml-2 transform rotate-315 text-xl"></i>
          </h2>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-java text-4xl pt-3"></i>
            <img src="./sap-3.svg" className="w-11 h-11 pt-6" alt="SAP Logo" />
            <img
              src="./mysql-ar21.svg"
              className="w-16 h-16 pl-0"
              alt="MySQL Logo"
            />
          </div>
        </div>
        
        {/* Bottom content - description */}
        <p className="mt-4">
          Technologies popularly associated and used by Enterprises. Technologies
          like Java and SAP that I use and have experience in. Formally trained
          for 4 years at UCT.
        </p>
      </GlowingCard>

      {/* Card 3 */}
      <GlowingCard>
        {/* Top content group */}
        <div>
          <h2 className="text-xl font-semibold">
            Data
            <i className="fas fa-arrow-right ml-2 transform rotate-315 text-xl"></i>
          </h2>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-python text-2xl pt-9" title="Python Django"></i>
            <img
              src="./tableau-svgrepo-com.svg"
              className="w-25 h-25 pl-0"
              alt="Tableau Logo"
            />
          </div>
        </div>
        
        {/* Bottom content - description */}
        <p className="mt-4">
          Data related technologies for data science, analysis, mining, and AI.
        </p>
      </GlowingCard>
    </div>
  );
};

export default GlassMorphismCards;