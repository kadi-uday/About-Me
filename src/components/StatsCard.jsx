import React from 'react';
import { stats } from '../utils/constants';

const StatsCards = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row flex-wrap gap-7 md:gap-6 justify-center md:justify-center lg:justify-start">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-full md:w-44 px-4 py-3 rounded-lg text-center transform hover:-translate-y-1 transition-all duration-300 shadow-md bg-gradient-to-r from-indigo-100 to-cyan-50 dark:from-[#192438] dark:to-[#12192c] border border-transparent dark:border-[#334155]"
        >
          <h4 className="text-xl font-bold text-indigo-700 dark:text-cyan-400">{stat.title}</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">{stat.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
