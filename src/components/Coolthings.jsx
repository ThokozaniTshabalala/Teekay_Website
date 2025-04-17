import React from "react";

const Coolthings = () => {
  return (
    <section className="w-full flex flex-col md:flex-row bg-white text-black p-4 md:p-8 gap-4 md:gap-6">
      {/* Image Section */}
      <div className="w-full md:w-7/12">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src="./teekay_mastered.png" // Replace with your actual image path
            alt="Cool project preview"
            className="w-full h-auto object-cover rounded-lg"
          />
        </a>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-5/12 flex flex-col justify-center items-start px-4 py-6 gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tight">
          A Graphic<br />Designer
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-500 uppercase font-MarkerFelt"> 6 years upskilling and working</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-md">
        "Sanibonani, dumelang, goeiemore! I’m Thokozani Tshabalala — a passionate graphic designer who loves creating 
        visually striking designs that not only captivate but also clearly communicate the intended message to the audience.
        </p>

        {/* Button */}
        <a
          href="https://example.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold uppercase text-sm rounded"
        >
          See More
        </a>
      </div>
    </section>
  );
};

export default Coolthings;
