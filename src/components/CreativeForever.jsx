import React from "react";

const CreativeForever = () => {
  return (
    <section className="w-full bg-white text-black p-4 md:p-8">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Content Section */}
        <div className="w-full md:w-7/12 flex flex-col justify-center items-start px-4 py-6 gap-6">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tight">
            A Creative
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-500 uppercase font-MarkerFelt">
            I love art man.
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-md">
            I am more than a graphic designer. At times, I dabble with
            illustrations, drawing, and paintings. I have an active imagination
            and I love bringing it to life — even if it means learning a new
            skill.
          </p>

          {/* Button */}
          <a
            href="https://freelives.net/games/anger-foot/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold uppercase text-sm rounded"
          >
            See my Work
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-5/12">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="creative_forever_mastered.png"
              alt="Thokozani with a guitar"
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreativeForever;
