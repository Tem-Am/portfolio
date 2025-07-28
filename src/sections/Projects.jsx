import React from "react";
import Button from "../components/button";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Golf Application",
      description:
        "It was our capstone project for the final course. We created a golf tip application that helps users improve their golf skills with tips and videos.",
      link: "https://github.com/yourusername/major-advisor-app",
    },
    {
      id: 2,
      title: "Simple Processor",
      description:
        "Our team developed our own general purpose processor. The simple process manages basic arithmetic operations and logical operations.",
      link: "https://yourwebsite.com",
    },
    {
      id: 3,
      title: "Career Coach Application",
      description:
        "A simple career manager application built with React Native and Node.js backend. The main purpose is helping younger kids to choose their major carefully with AI help. It provides information about different majors, career paths, and job opportunities.",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      id: 4,
      title: "Personal Protfolio",
      description:
        "A simple task manager built with React and Node.js backend.",
      link: "https://github.com/yourusername/task-manager",
    },
    // Add more projects here
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-900 text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header with Button */}
        <div className="flex flex-row items-stretch gap-x-6">
          <Button className="w-40 h-12" page="/" text="Main Page" />
          <Button className="w-40 h-12" page="/experience" text="Experience" />
          <Button className="w-40 h-12" page="/aboutme" text="About Me" />
        </div>
        <h1 className="text-4xl font-bold text-center">My Projects</h1>

        {/* Project List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, link }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[320px] h-[250px] flex flex-col "
            >
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <div className="flex-1 overflow-y-auto mb-4">
                <p className="text-gray-300">{description}</p>
              </div>{" "}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
