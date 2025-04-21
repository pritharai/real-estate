import React from 'react';
import { Link } from 'react-router-dom';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Projects grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="relative bg-white shadow-md rounded overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {project.price} <span className="px-1">|</span> {project.location}
              </p>
              {/* <Link to={`/project/${project.id}`}>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                View Details
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
