import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../assets/assets';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        Project not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-20">
      <Link to="/" className="text-blue-600 mb-6 inline-block hover:underline">&larr; Back to Projects</Link>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {project.location}<br />
            <strong>Price:</strong> {project.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description ||
              'This is a beautifully crafted property with modern design and excellent amenities. It’s located in a prime area, offering convenience and comfort.'}
          </p>

          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
