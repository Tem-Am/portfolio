import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1700887937204-69f8b8400ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNzYxMTYxNjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Node.js', 'MongoDB'],
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Design System',
    description: 'Comprehensive design system with 50+ reusable components.',
    image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTEyMDcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Figma', 'React', 'Storybook'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing.',
    image: 'https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjEwOTQ0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Creative portfolio with unique animations and interactions.',
    image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTEyMDcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Tailwind', 'Motion'],
    span: 'md:col-span-2 md:row-span-1',
  },
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-white" id="projects">
      <div className="container mx-auto max-w-6xl">
        <div>
          <h2 className="text-5xl mb-4 text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A collection of my recent work showcasing creative solutions and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden ${project.span} cursor-pointer transition-transform hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white mb-2 leading-normal">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
