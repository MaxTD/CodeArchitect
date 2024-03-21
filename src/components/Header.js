// Header.js
import React from "react";

const Header = ({ isScrolled, scrollToSection }) => {
  return (
    <header
      className={`py-6 max-w-[1024px] mx-auto px-4 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-b from-gray-900 to-black shadow-md"
          : "bg-transparent"
      }`}
      style={{ paddingTop: isScrolled ? "20px" : "30px" }}
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-2xl text-gradient">Carlo</div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="hover:text-gradient transition-colors"
              >
                <span className="text-pink-500">#</span>Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="hover:text-gradient transition-colors"
              >
                <span className="text-pink-500">#</span>Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
                className="hover:text-gradient transition-colors"
              >
                <span className="text-pink-500">#</span>Skills
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="hover:text-gradient transition-colors"
              >
                <span className="text-pink-500">#</span>About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="hover:text-gradient transition-colors"
              >
                <span className="text-pink-500">#</span>Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;