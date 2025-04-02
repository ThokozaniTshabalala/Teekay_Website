import React, { useState } from 'react';

const tabs = ['skills', 'projects', 'education'];

const CardRight = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-6 h-full w-full text-black relative z-0 overflow-hidden after:z-10 after:absolute after:inset-0 after:content-[''] after:outline-1 after:outline-white/30 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none">
      <h1 className="text-2xl font-semibold mb-4">About Me</h1>
      <p className="text-sm mb-4">
        I am a results-driven software engineer specializing in full-stack solutions with expertise in React, .NET, MongoDB, and SQL. Proficient in Java, Python, JavaScript, Kotlin, and C#. I excel in project management and UI/UX design. I thrive in collaborative environments, contributing ideas and fostering inclusivity. My approach includes requirements gathering, prototyping, development, deployment, and user analytics.
      </p>

      <div className="flex gap-4 mb-3 text-sm font-medium">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer transition-colors duration-200 ${
              activeTab === tab ? 'text-blue-500' : 'text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </p>
        ))}
      </div>

      <div className="text-sm">
        {activeTab === 'skills' && (
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="font-semibold">UI/UX:</span> Designing Web/App interfaces, UX research, and graphic design
            </li>
            <li>
              <span className="font-semibold">Full Stack:</span> Web, software, and mobile app development using Kotlin and React Native
            </li>
            <li>
              <span className="font-semibold">Data Analysis:</span> Cleaning, visualization, statistical analysis, and ML
            </li>
          </ul>
        )}
        {activeTab === 'projects' && (
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="font-semibold">Vision Sprint:</span> React + Vite + Yarn, full UI/UX implementation
            </li>
            <li>
              <span className="font-semibold">TOUR MZANSI:</span> UX research, prototyping in Figma, full dev
            </li>
            <li>
              <span className="font-semibold">AORA App:</span> React Native + Expo for cross-platform deployment
            </li>
          </ul>
        )}
        {activeTab === 'education' && (
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="font-semibold">BSc in Computer Science & Info Systems</span> - University of Cape Town
            </li>
            <li>
              <span className="font-semibold">Machine Learning w/ Python:</span> FreeCodeCamp (In Progress)
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CardRight;

