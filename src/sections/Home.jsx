import React from "react";
import { words } from "../constants";
import Button from "../components/button";
import HeroObjects from "../components/HeroModels/heroObjects";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen bg-slate-900 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center md:px-20 px-5 max-w-2xl z-10">
        <div className="flex flex-col gap-7">
          <div className="hero-text pt-5 text-white">
            <h1>Welcome to</h1>
            <h1>Tem's portfolio!</h1>
            <h1>
              Here:
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            page="/project"
            text="Projects"
          />
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            page="/experience"
            text="Experience"
          />
          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            page="/achievements"
            text="Certificates and Achievements"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center text-white">
        <div className="w-full h-full">
          <HeroObjects />
        </div>
      </div>
    </div>
  );
};

export default Home;
