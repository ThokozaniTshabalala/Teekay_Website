import React from "react";

const Hero = ({ mode }) => {
  const heroImage =
    mode === "Creative"
      ? "/corporate_punk_teekay.webp"
      : "/THOKOZANI_PROFILE_pure_WHITE_BACKGROUND.webp";

  const backgroundColor = mode === "Creative" ? "#fbfafa" : "transparent";
  const spacingClasses = mode === "Creative" ? "" : "mt-14 pt-12";

  return (
    <section
      className={`relative w-full flex justify-center items-center ${spacingClasses}`}
      style={{ backgroundColor }}
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Thokozani Tshabalala"
        className="w-3/4 h-auto object-cover transition-opacity duration-700 opacity-0"
        onLoad={(e) => (e.target.style.opacity = 1)}
      />

      {/* Text Overlay - only in Formal mode */}
      {mode !== "Creative" && (
        <div className="absolute left-35 top-1/2 transform -translate-y-1/2 p-6 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-bold">Hi, I am Thokozani</h1>
          <p className="text-lg md:text-2xl mt-2">Software Developer</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
