import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Job from "../../public/pictures/job.png";
import Processor from "../../public/pictures/processor.jpg";
import Golfapp from "../../public/pictures/golf.jpg";
const projects = [
  {
    id: 1,
    title: "Golf Application",
    description:
      "Built a cross-platform mobile app with React Native that helps golfers improve through professional tips and video lessons. Developed the backend with Node.js and PostgreSQL to enable real-time data storage, secure authentication, and cloud synchronization. Designed a clean, responsive UI with smooth video integration.",
    image: Golfapp,
    tags: ["React Native", "Node.js", "PostgreSQL", "Jira", "Figma"],
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    title: "Customized Processor",
    description: "Designed and implemented a custom VHDL processor in Vivado with a 5-stage pipeline. Built an assembler in Python to translate assembly code to machine code. Created a testbench to simulate and verify functionality, ensuring efficient execution and hazard handling. Gained experience in computer architecture and digital logic design.",
    image: Processor,
    tags: ["VHDL", "Pyton", "Assymbly", "Vivado", "Computer Architecture", "Digital Logic"],
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    title: " Job tracker app with AI analytics",
    description: "Developed a full-stack job tracking web app with SwiftUI, Node.js, and Express. Used MongoDB for data storage and integrated the OpenAI API for AI-driven insights into job search patterns. Designed an intuitive and responsive interface for seamless user experience across devices.",
    image: Job,
    tags: ["SwiftUI", "Node.js", "Express", "MongoDB", "OpenAI API"],
    span: "md:col-span-1 md:row-span-2",
  },
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-white" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div>
          <h2 className="text-5xl mb-4 text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
            Projects
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            There are projects that I have worked on independently as well as
            collaboratively in teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden ${project.span} cursor-pointer transition-transform hover:scale-[1.02]`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-2xl mb-2 leading-normal">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 ">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="flex items-center gap-2 text-white hover:text-violet-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Live</span>
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-violet-300 transition-colors">
                      <span className="text-sm">Source</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
