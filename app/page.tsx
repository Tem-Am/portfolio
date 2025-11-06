import { Projects } from "./pages/project";
import { Experience } from "./pages/experience";
import { Skills } from "./pages/skills";
import { Homepage } from "./pages/home";
import { Contact } from "./pages/contact";
export default function Home() {
  return (
    <section>
      <div id="home"><Homepage /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </section>
  );
}
