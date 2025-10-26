import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:your.email@example.com",
    color: "violet",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/temuulen-amarjargal/",
    color: "blue",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/Tem-Am",
    color: "gray",
  },
];

export function Contact() {
  return (
    <section className="px-6 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-5xl mb-4 text-neutral-900  bg-clip-text leading-tight pb-2">
            Contact Informations
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col mb-12 items-center gap-3 p-6 bg-white rounded-2xl border border-violet-100 hover:border-violet-300 hover:shadow-lg hover:scale-105 transition-all"
              >
                <div className="p-3 bg-violet-100 rounded-xl">
                  <Icon className="w-6 h-6 text-violet-600" />
                </div>
                <span className="text-sm text-gray-700">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
