import React from 'react';
import './Products.css'; // For any custom CSS we might need

const Product = () => {
  const projects = [
    {
      id: 1,
      //title: "Analytics Dashboard",
      //domain: "analytics",
      //description: "Real-time data visualization platform with interactive charts and customizable widgets.",
      isDark: false,
      status: "In Progress",
      link: null,
      size: "wide",
      image: "./VISION_SPRINT_MARKETING_MATERIAL01.png",
    },
    {
      id: 2,
     //title: "DocStream",
      //domain: "docstream",
      //extension: ".io",
      //description: "Collaborative document management system",
      isDark: false,
      //link: "https://example.com/docstream",
      size: "tall",
      image: "./Ayoba_app_image.png",
    },
    {
      id: 3,
      //title: "TaskFlow",
      //domain: "taskflow",
      extension: ".app",
      //description: "Task management with AI prioritization",
      isDark: true,
      //link: "https://example.com/taskflow",
      size: "medium",
      image: "./AORA_thumbnail.png",
    },
    {
      id: 4,
      //title: "DevConnect",
      //domain: "devconnect",
      //description: "Developer networking platform",
      isDark: false,
      //status: "In Progress",
      link: null,
      size: "medium",
      image: "./homyz.png",
    },
    {
      id: 5,
      title: "Private Torrent",
      domain: "Private Torrent",
      extension: ".co",
      description: "Torrent system for file sharing",
      isDark: true,
      link: "https://example.com/designvault",
      size: "medium",
      image: "./Torrent_App.png",
    },
    {
      id: 6,
      //title: "CodeSync",
      //domain: "codesync",
      //extension: ".dev",
      //description: "Real-time collaborative coding environment",
      isDark: false,
      link: "https://example.com/codesync",
      size: "large",
      image: "./FLUF_REDESIGN.png",
    },
  ];

  const getGridClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-gray-600">Crafted with passion and precision</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              project.isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-200'
            } ${getGridClasses(project.size)}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-sm">
                    {project.domain}
                    <span className="opacity-60">{project.extension}</span>
                  </h3>
                  {project.status ? (
                    <div className="text-xs mt-1 px-2 py-1 rounded-full inline-block bg-opacity-20 bg-blue-500 text-white">
                      {project.status}
                    </div>
                  ) : (
                    project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-white"
                      >
                        🔗
                      </a>
                    )
                  )}
                </div>
              </div>
              
              <p className={`${project.size === 'large' ? 'text-xl' : 'text-lg'} font-medium text-white`}> 
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
