import React from "react";
import Button from "../components/button";
const Aboutme = () => {
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
          <Button className="w-40 h-12" page="/experience" text="Experience" />
        </div>
        <h1 className="text-4xl font-bold text-center">
          Who is Temuulen Amarjargal AKA Tem?
        </h1>
        
      </div>
    </section>
  );
};

export default Aboutme;
