// Emphasis.jsx
import React from "react";

const Emphasis = () => {
  return (
    <div className="text-center p-6">
      <p className="text-lg text-gray-700">
        A <span className="font-bold">trained</span>,{" "}
        <span className="font-bold">talented</span> and{" "}
        <span className="font-bold">driven</span> individual who creates unique
        solutions.
        <br />
        <span className="font-bold">Let's make MAGIC!!!</span>
      </p>
      <button className="mt-4 px-6 py-2 border-2 border-black border-dashed text-black font-semibold rounded-lg transition hover:bg-black hover:text-white">
        Hire me
      </button>
    </div>
  );
};

export default Emphasis;
