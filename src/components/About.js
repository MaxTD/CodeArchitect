// About.js
import React from "react";
import resumePDF from "../resume/Carlo_Folino_Resume.pdf";
import profilePhoto from "../photos/about.png"; // Import the photo file

const About = () => {
  return (
    <section id="about" className="max-w-[1024px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-pink-500">#about-me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold mb-4">Hello, I'm Carlo</h3>
          <p className="text-gray-400 mb-4">
            I'm a self-taught front-end developer based in Australia, with a
            strong passion for crafting responsive and user-friendly websites.
            My expertise spans across HTML, CSS, JavaScript, as well as various
            front-end and backend frameworks and libraries. I'm deeply
            passionate about continuously enhancing my coding skills and staying
            abreast of the latest web development trends and best practices.
          </p>
          <a
            href={resumePDF}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="md:w-1/2">
          <div className=" p-6 rounded-lg flex justify-center">
          <img
            src={profilePhoto} // Use the imported image file
            alt="Carlo Folino" // Update the alt text as needed
            className="w-full h-auto rounded-lg shadow-lg"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
