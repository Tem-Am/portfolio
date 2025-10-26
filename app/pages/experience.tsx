import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Software Engineer",
    company: "Surface Experts",
    period: "Jan 2025 - May 2025",
    achievements: [
      "Developed a secure franchise management section of an internal React and Node.js app, enabling HQ and employees with proper credentials to easily create, update, and manage franchise data and operations",
      "Wrote and optimized SQL queries and backend logic, improving data retrieval speed by approximately 15%.",
      "Built a separate full-stack image processing app using Node.js and React, allowing employees to upload before-and-after repair photos, automatically generate combined images, and displaying for marketing and internal use.",
      "Integrated automatic WebP conversion to reduce image load times by 30% and file sizes by 60% during testing, while preserving original PNG files for download.",
    ],
  },
  {
    id: 2,
    title: "Deep Learning Research Assistant",
    company: "Whitworth University",
    period: "Jun 2023 - Dec 2023",
    achievements: [
      "Engineered and selected key features from feature-based network traffic data to train a deep learning model for multi-class classification across 14 traffic types, improving input quality and model interpretability.",
      "Increased model accuracy from 92% to 96% by contributing to data preparation, pipeline consistency, and iterative model tuning with the research team.",
    ],
  },
  {
    id: 3,
    title: "Teaching Assistant - DataBase Systems",
    company: "Whitworth University",
    period: "Feb 2024 - May 2024",
    achievements: [
      "Built 20+ responsive websites",
      "Implemented accessibility standards",
      "Optimized SEO performance",
    ],
  },
  {
    id: 4,
    title: "Mathematics and Computer Science Tutor and grader",
    company: "Whitworth University.",
    period: "Sep 2022 - Dec 2024",
    achievements: [
      "Assisted students in mathematics courses by explaining complex concepts, and helping them prepare for exams.",
      "Tutored students in concepts with an emphasis on C++, including inheritance, polymorphism, and encapsulation.",
    ],
  },
];

export function Experience() {
  return (
    <section
      className="px-6 bg-gradient-to-b from-white to-violet-50"
      id="experience"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl bg-clip-text text-gray-900 leading-tight pb-2">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-purple-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 bg-violet-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                <div className="md:ml-20 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-violet-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-violet-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-1 leading-normal">
                          {exp.title}
                        </h3>
                        <p className="text-violet-600 leading-normal">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2" />
                        <p className="text-sm text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
