import React from 'react';

const CardLeft = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 h-full w-full flex flex-col items-center relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:content-[''] after:outline-1 after:outline-white/30 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none">
      <div className="w-20 h-20 rounded-full bg-gray-200 inline-flex items-center justify-center mb-4">
        <img
          className="rounded-full"
          src="./Thokozani_HeadShot.png"
          width="70"
          height="70"
          alt="Thokozani Tshabalala"
        />
      </div>

      <div className="bg-gray-950 border border-gray-800 px-3 py-1 inline-flex items-center gap-2 rounded-lg">
      <div className="bg-green-500 size-2 rounded-full"></div>
        <div className="text-xs font-medium text-white">Available for new projects</div>
      </div>

      <h3 className="mt-4 text-center font-semibold text-black text-lg">Hi, I'm Thokozani Tshabalala</h3>
      <p className="text-black/90 text-sm text-center mt-3 px-4">
        I'm a software developer based in South Africa, passionate about designing and building beautiful, functional
        interfaces and systems.
      </p>
    </div>
  );
};

export default CardLeft;
