import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProjectCard = ({ title, description, tech, live, github, images }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-xl overflow-hidden bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-[#1e273f] dark:to-[#131c2d] shadow-lg lg:mx-5">

            <div className="relative overflow-hidden w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto rounded-lg">
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`${title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2 p-5 flex flex-col justify-center gap-4 ">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-cyan-400">
                    {title}
                </h3>
                <p className="md:text-base text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>

                <ul className="list-disc list-inside text-sm md:text-base text-gray-600 dark:text-gray-400">
                    {tech.map((item, idx) => (
                        <li key={idx}>✅ {item}</li>
                    ))}
                </ul>

                <div className="flex gap-4 mt-4">
                    <a
                        href={github}
                        target="_blank"
                        className="bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 text-sm rounded flex items-center gap-2 hover:scale-105 transition"
                    >
                        <FaGithub /> Code
                    </a>
                    <a
                        href={live}
                        target="_blank"
                        className="bg-indigo-600 dark:bg-cyan-700 text-white px-6 py-2 text-sm rounded-full font-semibold shadow hover:bg-indigo-700 dark:hover:bg-cyan-600 transition-transform hover:scale-105 duration-300"
                    >
                        <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;