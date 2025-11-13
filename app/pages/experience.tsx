import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Software Engineer",
    company: "Surface Experts",
    period: "Jan 2025 - June 2025",
    achievements: [
      "Developed a secure franchise management section of an internal React and Node.js app, enabling HQ and employees with proper credentials to easily create, update, and manage franchise data and operations.",
      "Wrote and optimized SQL queries and backend logic, improving data retrieval speed by approximately 15%.",
      "Collaborated with a senior engineer to test and debug pre-deployment features by identifying edge cases, validating user flows, and resolving issues across backend and frontend, resulting in a more stable and maintainable system",
      "Built a full-stack image processing app (Node.js, React) that uploaded images to a cloud server (AWS S3) and stored metadata locally, automating image merging and WebP conversion to improve marketing page performance.",
      "Integrated automatic WebP conversion and cloud storage on S3, reducing image load times by 30% and file sizes by about 60% while retaining original files for download.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Pinecone Studio",
    period: "Jan 2023 - Dec 2024",
    achievements: [
      "Built an automated onboarding service with Node.js and Google Workspace API that created Gmail, Slack, GitHub, and HR accounts, reducing manual setup time from 2 hours to 15 minutes per hire.",
      "Integrated Slack, GitHub, and internal access systems through secure service accounts and REST APIs, ensuring new employees received correct permissions on day one without IT intervention.",
      "Containerized all onboarding components using Docker and deployed to Kubernetes, enabling auto-recovery and horizontal scaling during peak hiring periods, which cut IT workload by 70%.",
      "Implemented a CI/CD pipeline with GitHub Actions for automated builds, testing, and zero-downtime deployments, using caching and parallel runs to reduce deployment time from 3 hours to 10 minutes and improve reliability.",
    ],
  },
  {
    id: 3,
    title: "Deep Learning Research Assistant",
    company: "Whitworth University",
    period: "Jun 2023 - Dec 2023",
    achievements: [
      "Engineered and selected key features from feature-based network traffic data to train a deep learning model for multi-class classification across 14 traffic types, improving input quality and model interpretability.",
      "Increased model accuracy from 92% to 96% by contributing to data preparation, pipeline consistency, and iterative model tuning with the research team.",
    ],
  },
  {
    id: 4,
    title: "Teaching Assistant - DataBase Systems",
    company: "Whitworth University",
    period: "Jan 2024 - May 2024",
    achievements: [
      "Provided in-class support to almost 40 students by clarifying database concepts and assisting with assignments and projects, helping improve students’ confidence and course completion rates.",
    ],
  },
  {
    id: 5,
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
                      <div key={i} className="flex gap-2 items-start">
                        <p className="text-black">-</p>
                        <p className="text-sm text-gray-700 leading-normal">
                          {achievement}
                        </p>
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
