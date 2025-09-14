import React from "react";
import Button from "../components/button";
const Home = () => {
  const aboutme = [
    {
      id: 1,
      title: "About me",
      description:
        "I am a software developer with a passion for creating innovative and efficient solutions. I have experience in various programming languages and frameworks, and I enjoy tackling challenging problems. In my free time, I love exploring new technologies and working on personal projects.",
      link: "/images/me.JPG",
    },
    {
      id: 2,
      title: "Education",
      description:
        "I graduted Whitworth University with dual degree in Computer Science and Appliead Mathematics with Data Science Track.",
      link: "/images/logo.jpg",
    },
    {
      id: 3,
      title: "Skills",
      description:
        "I have experience in various programming languages and frameworks, including JavaScript, Python, React, C++, C#, R, Node.js, and more. I am also familiar with database management systems and cloud technologies.",
      link: "/images/skill.png",
    },
    {
      id: 4,
      title: "Hobbies",
      description:
        "In my free time, I enjoy exploring new places and cultures, and playing basketball. I also enjoy running and spending time with family and friends.",
      link: "/images/hobby.png",
    },
  ];
  const [index, setInfo] = React.useState(0);
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-slate-900 text-white px-6 py-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header with Button */}
        <div className="flex flex-row items-stretch gap-x-6">
          <Button className="w-40 h-12" page="/project" text="Project" />
          <Button className="w-40 h-12" page="/experience" text="Experience" />
        </div>
        <h1 className="text-4xl font-bold text-center">
          Who is Temuulen Amarjargal AKA Tem?
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() =>
              setInfo((index - 1 + aboutme.length) % aboutme.length)
            }
          ></button>
        </div>
        {aboutme.map(({ id, title, description, link }) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-800 rounded-2xl shadow-lg max-w-4xl mx-auto"
          >
            <img
              src={link}
              alt={title}
              className="w-60 h-60 object-contain rounded-full border-4 border-blue-500 shadow-md bg-gray-900 p-1"
            />
            <p className="text-2xl text-gray-200 leading-relaxed max-w-xl text-center md:text-left">
              <span className="text-blue-400 font-semibold">{title}</span>
              <br />
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
