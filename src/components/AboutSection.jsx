import React from 'react';
import CardLeft from './CardLeft';
import CardRight from './CardRight';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <CardLeft />
        </div>
        <div className="md:w-1/2">
          <CardRight />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
