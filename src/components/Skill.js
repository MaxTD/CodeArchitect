// Skill.js
import React from "react";

const Skill = ({ icon, title }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-r from-purple-500 to-indigo-500 transition-colors">
      <img src={icon} alt={title} className="w-16 h-16 mb-2" />
      <span>{title}</span>
    </div>
  );
};

export default Skill;