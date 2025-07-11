import React from "react";
import TechSkills from "./TechSkills";
import AboutDescription from "./AboutDescription";
import { GITHUB_URL } from "../utils/constants";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div className="-mt-5">
      <section className="min-h-screen px-4 md:px-8 lg:px-20 py-16 bg-white dark:bg-[#0e1628] text-black dark:text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-10 ">

          {/* GitHub Image */}
          <div className="w-52 h-auto md:w-60 lg:w-[280px] flex flex-col items-center gap-4">
            {/* Profile Image */}
            <img
              src={GITHUB_URL + ".png"}
              alt="Kadi Uday"
              className="w-full h-[280px] object-cover border-4 border-indigo-300 dark:border-cyan-600 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
            />

            {/* Centered Social Icons */}
            <div className="w-full flex justify-center ">
              <SocialLinks minimal />
            </div>
          </div>


          {/* About Info */}
          <AboutDescription />
        </div>
      </section>

      <TechSkills />
    </div>
  );
};

export default About;
