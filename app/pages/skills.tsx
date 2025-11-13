import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    category: "Programing Languages",
    icon: Code2,
    items: [
      "Pyton",
      "C++",
      "TypeScript",
      "JavaScrip",
      "Swift",
      "Go",
      "SQL",
      "Mathlab",
      "R",
      "Assembly",
    ],
    color: "violet",
  },
  {
    category: "Frameworks & Libraries",
    icon: Palette,
    items: [
      "React",
      "Node.js",
      "Next.js",
      "Express.js",
      ".NET",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Keras",
      "SwiftUI",
      "Rest APIs",
    ],
    color: "violet",
  },
  {
    category: "Tools & Platforms",
    icon: Rocket,
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Jira",
      "PostgreSQL",
      "MongoDb",
      "Testing",
      "Analytics",
    ],
    color: "violet",
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: [
      "Team Leadership",
      "Communication",
      "Problem Solving",
      "Agile",
      "Mentoring",
      "Documentation",
    ],
    color: "violet",
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 bg-white" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-5xl mb-4 bg-clip-text text-neutral-900 leading-tight pb-2">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse skill set covering development, design, and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-violet-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-${skill.color}-100 rounded-xl`}>
                    <Icon className={`w-6 h-6 text-${skill.color}-600`} />
                  </div>
                  <h3 className="text-gray-900 leading-normal">
                    {skill.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 border border-violet-200 hover:border-violet-400 hover:shadow-md transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* About section */}
        <div className="mt-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl mb-6 text-center">About Me</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto text-center leading-relaxed">
            I’m a Software Engineer with a strong foundation in computer science
            and applied mathematics, passionate about building scalable,
            data-driven, and intelligent systems. I specialize in full-stack
            development, AI-powered solutions, and cloud infrastructure that
            make technology more efficient and accessible. My experience spans
            from developing full-stack web applications to optimizing backend
            systems and experimenting with applied machine learning. I enjoy
            turning complex problems into elegant, high-performance software
            through clean architecture, experimentation, and continuous
            learning.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl mb-2">20+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">2+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
