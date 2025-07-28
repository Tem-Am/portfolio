import React from "react";
import Button from "../components/button";
const Experience = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-900 text-white px-6 py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header with Button */}
        <div className="flex flex-row items-stretch gap-x-6">
          <Button className="w-40 h-12" page="/" text="Main Page" />
          <Button className="w-40 h-12" page="/project" text="Project" />
          <Button className="w-40 h-12" page="/aboutme" text="About Me" />
        </div>
        <h1 className="text-4xl font-bold text-center">My Experience</h1>

        {/* Experience List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your experience items here */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[320px] h-[250px] flex flex-col">
            <h2 className="text-2xl font-semibold mb-2">Experience Title</h2>
            <div className="flex-1 overflow-y-auto mb-4">
              <p className="text-gray-300">Description of the experience.</p>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View Details
            </a>
          </div>
          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
