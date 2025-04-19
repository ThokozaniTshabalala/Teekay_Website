import React from "react";

const Iscathulo = () => {
  return (
    <section className="pt-18">
      {/* Centered Heading */}
      <div className="px-16 mb-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tight">We live for this</h1>
      </div>

      {/* Image Section */}
      <div className="px-16 w-[97%] box-border">
        <img
          src="/faki_iscathulo_wider.png"
          alt="Iscathulo"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Iscathulo;
