import React from "react";
import profilePhoto from "../photos/home.png"; // Import the photo file

const Home = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="max-w-[1024px] mx-auto px-4 py-12 content-with-padding"
      style={{ paddingTop: "100px" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Hi, I'm Carlo <br />
            <span className="text-pink-500">Web Designer</span> &{" "}
            <span className="text-pink-500">Developer</span>
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            I'm an enthusiastic web designer and front-end developer dedicated to crafting visually stunning and user-friendly websites. Additionally, I am proficient in back-end development and driven by a strong motivation to shape a new future.
          </p>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors animate-pulse"
          >
            Scroll Down ↓
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={profilePhoto} // Use the imported image file
            alt="Carlo Folino" // Update the alt text as needed
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;