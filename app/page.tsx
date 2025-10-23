import { Projects } from "./pages/project";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-800 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-violet-600 via-sky-500 to-orange-300 bg-clip-text leading-tight text-transparent">
              Temuulen Amarjargal
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Software Developer & Data Scientist
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              I’m a Software Engineer with a strong foundation in computer
              science and applied mathematics, passionate about building
              scalable, data-driven, and intelligent systems. I specialize in
              full-stack development, AI-powered solutions, and cloud
              infrastructure that make technology more efficient and accessible.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
                View Projects
              </button>
              <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full h-full px-6 relative z-10">
        <Projects />
      </div>
    </section>
  );
}
