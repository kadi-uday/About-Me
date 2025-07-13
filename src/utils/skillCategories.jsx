import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMysql, SiFirebase, SiJupyter, SiPython, SiCplusplus } from "react-icons/si";

const skillCategories = {
    Frontend: [
        {
            name: "HTML5",
            icon: <FaHtml5 className="text-orange-500 text-2xl" />,
            level: 90,
            gradient: "from-orange-400 to-orange-600",
        },
        {
            name: "CSS3",
            icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
            level: 85,
            gradient: "from-blue-400 to-blue-600",
        },
        {
            name: "JavaScript",
            icon: <FaJs className="text-yellow-400 text-2xl" />,
            level: 80,
            gradient: "from-yellow-400 to-yellow-600",
        },
        {
            name: "React.js",
            icon: <FaReact className="text-cyan-400 text-2xl" />,
            level: 85,
            gradient: "from-cyan-400 to-cyan-600",
        },
        {
            name: "Redux Toolkit",
            icon: <SiRedux className="text-purple-500 text-2xl" />,
            level: 75,
            gradient: "from-purple-400 to-purple-600",
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-teal-400 text-2xl" />,
            level: 90,
            gradient: "from-teal-400 to-teal-600",
        },
    ],
    Backend: [
        {
            name: "MySQL",
            icon: <SiMysql className="text-blue-500 text-2xl" />,
            level: 70,
            gradient: "from-blue-400 to-indigo-600",
        },
    ],
    "Programming Languages": [
        {
            name: "Python",
            icon: <SiPython className="text-yellow-400 text-2xl" />,
            level: 70,
            gradient: "from-yellow-400 to-yellow-600",
        },
        {
            name: "Java",
            icon: <FaJava className="text-red-500 text-2xl" />,
            level: 68,
            gradient: "from-red-400 to-red-600",
        },
        {
            name: "C/C++",
            icon: <SiCplusplus className="text-blue-500 text-2xl" />,
            level: 60,
            gradient: "from-blue-400 to-blue-600",
        },
    ],
    Tools: [
        {
            name: "Git",
            icon: <FaGitAlt className="text-orange-600 text-2xl" />,
            level: 92,
            gradient: "from-orange-400 to-orange-600",
        },
        {
            name: "Firebase",
            icon: <SiFirebase className="text-yellow-400 text-2xl" />,
            level: 60,
            gradient: "from-yellow-400 to-yellow-600",
        },
        {
            name: "Jupyter Notebook",
            icon: <SiJupyter className="text-orange-400 text-2xl" />,
            level: 83,
            gradient: "from-orange-400 to-orange-600",
        },
    ],
};

export default skillCategories;