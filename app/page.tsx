import { Projects } from "./pages/project";
import { Experience } from "./pages/experience";
import { Skills } from "./pages/skills";
import { Homepage } from "./pages/home";
import { Contact } from "./pages/contact";
export default function Home() {
  return (
    <section >
      <Homepage />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </section>
  );
}
