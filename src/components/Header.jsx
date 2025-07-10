import React, { useState } from 'react';
import useTheme from '../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-outfit font-semibold text-xl shadow-md sticky top-0 bg-white dark:bg-[#10141e] text-black dark:text-white z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-cyan-400 tracking-tight">Portfolio</h2>

        {/* Hamburger Icon */}
        <button
          className="text-xl md:text-2xl p-4 lg:hidden absolute right-4 z-50 text-gray-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <div
          className={`${menuOpen ? "translate-x-0" : "-translate-x-full"} fixed top-16 left-0 w-full bg-gray-100 dark:bg-[#10141e] lg:bg-transparent z-40 transition-transform duration-300 ease-in-out flex flex-col lg:flex-row lg:static lg:translate-x-0 items-start lg:items-center justify-start lg:justify-end px-6 py-6 lg:p-0 text-base md:text-lg lg:text-xl`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 md:gap-7 lg:gap-14 text-gray-800 dark:text-gray-200 w-full lg:w-auto">
            {["home", "about", "projects", "resume", "contact"].map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className="capitalize hover:text-indigo-500 dark:hover:text-cyan-300 cursor-pointer transition"
              >
                {item}
              </li>
            ))}

            {/* Theme Toggle */}
            <li>
              <button onClick={toggleTheme} className="text-xl hover:text-indigo-500 dark:hover:text-cyan-300 transition">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
