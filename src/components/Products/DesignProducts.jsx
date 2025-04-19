import React from 'react';

const DesignProducts = () => {
  const designs = [
    {
      id: 1,
      title: "Brand Identity Kit",
      domain: "brand identity",
      extension: ".design",
      description: "An elegant 3D animation showcasing my logo in a glass finish.",
      isDark: false,
      size: "tall",
      video: "/creative/logo_spin_9_16.mp4",
    },
    {
      id: 2,
      title: "UI/UX Mockup",
      //domain: "NeoBank App",
      //extension: ".figma",
      //description: "Mobile banking interface focused on clarity and user flow.",
      isDark: true,
      size: "medium",
      image: "/creative/TK_KT_LOGO-PRESENTATION.png",
    },
    {
      id: 3,
      //title: "Poster Series",
      //domain: "Event Design",
      //extension: ".psd",
      //description: "Vibrant and minimalistic posters for music and tech events.",
      isDark: false,
      size: "medium",
      image: "/creative/TK_GLASS_ENGRAVED_BLUE-WITH_TINT_OF_RED.png",
    },
    {
      id: 4,
      //title: "Landing Page",
      //domain: "Startup Launch",
      //extension: ".web",
      //description: "Modern and responsive landing page built to convert.",
      isDark: true,
      size: "wide",
      image: "/creative/TK_PHONE-PRESENTATION_PLUS_TILE.png",
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
        <h1 className="text-4xl font-bold mb-4">Personal Branding</h1>
        <p className="text-xl text-gray-600"> I craft a cohesive identity that reflects professionalism, creativity, and vision.
            <br/> My own brand is proof — a personal showcase of what intentional design can achieve.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {designs.map((design) => (
          <div
            key={design.id}
            className={`relative transition-all duration-300 ${
              design.id === 4 
                ? 'rounded-2xl overflow-visible shadow-lg hover:scale-101' 
                : 'rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1'
            } ${
              design.isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border border-gray-200'
            } ${getGridClasses(design.size)}`}
          >
            {design.video ? (
              <video 
                src={design.video} 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className={`w-full h-full ${design.id === 4 ? 'rounded-2xl overflow-hidden' : ''}`}>
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-sm">
                    {design.domain}
                    <span className="opacity-60">{design.extension}</span>
                  </h3>
                </div>
              </div>
              
              <p className={`${design.size === 'large' ? 'text-xl' : 'text-lg'} font-medium text-gray-800`}> 
                {design.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignProducts;