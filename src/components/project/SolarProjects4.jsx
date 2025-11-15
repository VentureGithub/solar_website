import React from "react";

const projects = [
  {
    id: 1,
    image: "/services/sss.webp",
    location: "Dholpur, Rajasthan",
  },
  {
    id: 2,
    image: "ss.jpg",
    location: "Dholpur, Rajasthan",
  },
  {
    id: 3,
    image: "/services/sss.webp",
    location: "Dholpur, Rajasthan",
  },

];

const SolarProjects4 = () => {
  return (
    <div className="bg-blue-50 text-orange-600 py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative mt-10">
            <h3 className="text-2xl font-semibold text-orange-500 inline-block">
              Dholpur, Rajasthan
            </h3>
            <div className="h-1 w-24 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-orange-100 w-full mx-auto"
            >
              <div className="overflow-hidden rounded-2xl mb-6  relative h-64">
                <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.location}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                {/* <div className="absolute bottom-4 right-4 bg-white/90 text-orange-600 py-2 px-4 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-md">
                  View Project
                </div> */}
              </div>
              <div className="flex flex-col items-center justify-center py-2">
                <div className="w-12 h-1 bg-orange-400 rounded-full mb-3"></div>
                <p className="text-center text-orange-700 font-medium text-xl tracking-wide">
                    
                  {project.location}
                </p>
                
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default SolarProjects4;