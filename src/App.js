// WebDesignerPortfolio.js
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skill from "./components/Skill";

const WebDesignerPortfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectsRendered, setProjectsRendered] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "B-BOOK",
        description:
          "B-Book streamlines bookings for customers and businesses. Customers schedule effortlessly; store owners manage schedules efficiently with real-time bookings.",
        technologies: "React, CSS, JavaScript, Node.js, MySQL",
        image: "https://via.placeholder.com/350x200",
        liveUrl: "https://github.com/ryansaam/b-book",
      },
      {
        id: 2,
        title: "TravelX",
        description:
          "TravelX: A social platform for travelers. Connect, share experiences, photos, and tips. Find inspiration, plan trips, and join a vibrant community.",
        technologies: "React, CSS, Figma, Node.js, Firebase",
        image: "https://via.placeholder.com/350x200",
        liveUrl: "https://github.com/MaxTD/TravelX",
      },
      {
        id: 3,
        title: "Bloomer (Private)",
        description:
          "Bloomer: A dating app fostering connections with innovative techniques. Find meaningful connections with new methods. Redefining the dating experience.",
        technologies: "GoLang, Swift, AWS Cloud Databases, JavaScript",
        image: "https://via.placeholder.com/350x200",
        liveUrl: "#",
      },
    ],
    []
  );

  useEffect(() => {
    let timeout;
    if (showAllProjects) {
      setProjectsRendered(projects.length);
    } else {
      setProjectsRendered(3);
      timeout = setTimeout(() => {
        window.scrollTo({
          top: document.getElementById("home").offsetTop - 80,
          behavior: "smooth",
        });
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [showAllProjects, projects]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.pageYOffset;
    setIsScrolled(scrollPosition > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Header isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <section id="projects" className="max-w-[1024px] mx-auto px-4 py-12 content-with-padding">
        <h2 className="text-3xl font-bold mb-8 text-pink-500">#Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, projectsRendered).map((project) => (
            <Project
              key={project.id}
              project={project}
              projectsRendered={projectsRendered}
            />
          ))}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAllProjects}
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors animate-pulse"
            >
              {showAllProjects ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </section>
      <section id="skills" className="max-w-[1024px] mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-pink-500">#Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            title="HTML"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            title="CSS"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            title="JavaScript"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            title="React.js"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            title="Node.js"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            title="Figma"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            title="Git"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            title="MySQL"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            title="Firebase"
          />
          <Skill
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            title="Java"
          />
        </div>
      </section>
      <About />
      <Contact />
    </div>
  );
};

export default WebDesignerPortfolio;