import React from 'react';
import CodeBlock from './CodeBlock';
import StatsCards from './StatsCard';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { HERO_DESP } from '../utils/constants';

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-[#111928] transition-all duration-300 px-5 md:px-10 lg:px-40 py-12 lg:pt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">

        {/* Left: Intro Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
            Hi, I'm Kadi Uday
          </h1>
          <p className="mt-4 font-outfit text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            {HERO_DESP}
          </p>
          <div className="mt-9 md:mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              to="projects"
              className="bg-indigo-600 font-outfit text-white px-6 py-2 rounded hover:bg-indigo-700 hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              className="border font-outfit border-indigo-600 text-indigo-600 dark:text-cyan-400 px-6 py-2 rounded hover:bg-indigo-200 dark:hover:bg-[#253240] hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: Code Animation */}
        <div className="flex-1 w-full flex justify-center mt-4 lg:justify-center lg:mt-28 transition-transform duration-500 hover:scale-105">
          <CodeBlock />
        </div>
      </div>

      <StatsCards />
      <SocialLinks />
    </section>

  );
};

export default Hero;
