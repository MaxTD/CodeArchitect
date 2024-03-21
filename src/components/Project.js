import React from "react";

const Project = ({ project, projectsRendered }) => {
  return (
    <div
      key={project.id}
      className={`bg-gray-800 p-6 rounded-lg ${
        projectsRendered > 3 && project.id > 3 ? "animate-fade-in" : ""
      }`}
      style={{
        animationDelay: `${(project.id - 3) * 0.2}s`,
      }}
    >
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto rounded-lg transform transition-all duration-500 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gradient">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-2">{project.technologies}</p>
      <p className="mb-4 text-gray-300">{project.description}</p>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Live
      </a>
    </div>
  );
};

export default Project;