import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { GITHUB_URL, LINKEDIN_URL, MAIL_ID } from '../utils/constants';

const SocialLinks = ({ minimal = false }) => {
  return (
    <div className="mt-8 flex gap-7 justify-center md:justify-center lg:justify-start text-2xl md:text-[28px]">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-110 "
      >
        <FaGithub />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href={"mailto:" + MAIL_ID}
        className="flex items-center gap-2 md:gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
      >
        <FaEnvelope />
        {!minimal && (
          <span className="text-sm sm:text-base md:text-lg">
            {MAIL_ID}
          </span>
        )}
      </a>
    </div>
  );
};

export default SocialLinks;
