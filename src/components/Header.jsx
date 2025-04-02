import React, { useState } from "react";

const Header = () => {
  const [mode, setMode] = useState("Formal");

  const toggleMode = () => {
    setMode((prev) => (prev === "Formal" ? "Creative" : "Formal"));
  };

  return (
    <header className="mt-5 pb-2 w-full flex justify-center bg-white">
      <section className="w-4/5 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/THOKOZANI_IMPACT_LOGO_PROFESSIONAL_CREATIVE.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-gray-800 text-lg">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#project" className="hover:text-blue-500 transition">Project</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </nav>

        {/* Toggle Button */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">{mode}</span>
          <button
            onClick={toggleMode}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors ${
              mode === "Creative" ? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            <span
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                mode === "Creative" ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
